import _ from 'lodash';
import config from './component.resource.json';

const $inject = ['$q', 'rest', 'exception', 'pathToRegexp', 'logger', '$filter'];
class SerialService {
  constructor(...injects) {
    SerialService.$inject.forEach((item, index) => this[item] = injects[index]);
    this.restConfig = {
      basePath: (__DEV__) ? __BASE_PATH__ : undefined
    };
    this.message = {
      read: {
        error: '[SerialService] Get data error.'
      },
      update: {
        success: 'SERIAL_FORM_SAVE_SUCCESS',
        error: '[SerialService] Update data error.'
      }
    };

    switch(config.get.type) {
    case 'collection':
      this.data = [];
      break;
    case 'model':
      this.data = {};
      break;
    default:
      this.data = [];
    }
  }

  _transform(data) {
    switch(config.get.type) {
    case 'collection':
      return _.map(data, (item, index) => {
        return {
          title: (config.get.titlePrefix || 'tab') + index,
          content: item,
          formOptions: {},
          fields: config.fields
        };
      });
    case 'model':
      return {
        content: data,
        formOptions: {},
        fields: config.fields
      };
    default:
      return _.map(data, (item, index) => {
        return {
          title: (config.get.titlePrefix || 'tab') + index,
          content: item,
          formOptions: {},
          fields: config.fields
        };
      });
    }
  }

  setResponseMsg(message) {
    if (message) {
      this.message = Object.assign(this.message, message);
    }
  }

  get() {
    const toPath = this.pathToRegexp.compile(config.get.url);
    // __BASE_PATH__ define in webpack
    return this.rest.get(toPath(), this.restConfig)
    .then(res => this.data = this._transform(res.data))
    .catch(err => {
      this.exception.catcher('[SerialService] Get data error.')(err);
      return this.$q.reject();
    });
  }

  update(data) {
    const toPath = this.pathToRegexp.compile(config.put.url);
    const path = (undefined !== data.content.id) ? toPath({id: data.content.id}) : toPath();
    // __BASE_PATH__ define in webpack
    return this.rest.put(path, data.content, data.formOptions.files, this.restConfig)
    .then(res => {
      this.logger.success(this.$filter('translate')(this.message.update.success), res.data);
      return res.data;
    })
    .catch(err => {
      this.exception.catcher(this.$filter('translate')(this.message.update.error))(err);
      return this.$q.reject();
    });
  }
}
SerialService.$inject = $inject;
export default SerialService;

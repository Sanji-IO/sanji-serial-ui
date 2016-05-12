const $inject = ['$q', 'rest', 'exception', '_', 'pathToRegexp', 'logger', '$filter'];
const config = require('./component.resource.json');
class SerialService {
  constructor(...injects) {
    SerialService.$inject.forEach((item, index) => this[item] = injects[index]);
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
      return this._.map(data, (item, index) => {
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
      return this._.map(data, (item, index) => {
        return {
          title: (config.get.titlePrefix || 'tab') + index,
          content: item,
          formOptions: {},
          fields: config.fields
        };
      });
    }
  }

  get() {
    let toPath = this.pathToRegexp.compile(config.get.url);
    // __BASE_PATH__ define in webpack
    return this.rest.get(toPath(), (__DEV__) ? {basePath: __BASE_PATH__} : undefined)
    .then(res => {
      this.data = this._transform(res.data);
    })
    .catch(err => {
      this.exception.catcher('[SerialService] Get data error.')(err);
      return this.$q.reject();
    });
  }

  update(data) {
    let toPath = this.pathToRegexp.compile(config.put.url);
    let path = (undefined !== data.content.id) ? toPath({id: data.content.id}) : toPath();
    // __BASE_PATH__ define in webpack
    return this.rest.put(path, data.content, data.formOptions.files, (__DEV__) ? {basePath:  __BASE_PATH__ } : undefined)
    .then(res => {
      this.logger.success(this.$filter('translate')('SERIAL_FORM_SAVE_SUCCESS'), res.data);
      return res.data;
    })
    .catch(err => {
      this.exception.catcher('[SerialService] Update data error.')(err);
      return this.$q.reject();
    });
  }
}
SerialService.$inject = $inject;
export default SerialService;

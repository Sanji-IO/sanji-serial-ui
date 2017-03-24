import SerialInfoController from './info.controller';

const SerialInfoComponent = {
  bindings: {
    tabs: '<data',
    tabIndex: '='
  },
  templateUrl: 'sanji-serial-info.tpl.html',
  controller: SerialInfoController
};
export default SerialInfoComponent;

import SerialInfoController from './info.controller';

const SerialInfoComponent = {
  bindings: {
    tabs: '<data'
  },
  templateUrl: 'sanji-serial-info.tpl.html',
  controller: SerialInfoController,
  controllerAs: 'vm'
};
export default SerialInfoComponent;

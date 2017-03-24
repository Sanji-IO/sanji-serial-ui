import SerialInfoContainerController from './container.controller';

const SerialInfoContainerComponent = {
  template: `<sanji-serial-info data="$ctrl.data" tab-index="$ctrl.sanjiWindowMgr.tabIndex"></sanji-serial-info>`,
  controller: SerialInfoContainerController
};
export default SerialInfoContainerComponent;

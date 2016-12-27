import SerialFormContainerController from './container.controller';

const SerialFormContainerComponent = {
  template:`<sanji-serial-form data="$ctrl.data" on-submit="$ctrl.onSave($event)"></sanji-serial-form>`,
  controller: SerialFormContainerController
};
export default SerialFormContainerComponent;

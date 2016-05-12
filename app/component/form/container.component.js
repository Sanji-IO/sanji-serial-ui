const SerialFormContainerComponent = {
  template:`<sanji-serial-form data="vm.data" on-submit="vm.onSave(data)"></sanji-serial-form>`,
  controller: 'SerialFormContainerController',
  controllerAs: 'vm'
};
export default SerialFormContainerComponent;

const injectMap = new WeakMap();
const $inject = [];
class SerialFormContainerDirective {
  constructor(injects) {
    SerialFormContainerDirective.directiveFactory.$inject.forEach((item, index) => {
      SerialFormContainerDirective[item] = injects[index];
      injectMap.set(SerialFormContainerDirective[item], injects[index]);
    });
    this.restrict = 'EA';
    this.controller = 'SerialFormContainerController';
    this.controllerAs = 'vm';
    this.scope = {};
    this.bindToController = true;
    this.template = `<sanji-serial-form data="vm.data" on-submit="vm.onSave(data)"></sanji-serial-form>`;
  }

  static directiveFactory(...injects) {
    SerialFormContainerDirective.instance = new SerialFormContainerDirective(injects);
    return SerialFormContainerDirective.instance;
  }
}
SerialFormContainerDirective.directiveFactory.$inject = $inject;
export default SerialFormContainerDirective;

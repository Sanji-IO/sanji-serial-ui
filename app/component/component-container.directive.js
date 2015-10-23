const injectMap = new WeakMap();
const $inject = [];
class SerialContainerDirective {
  constructor(injects) {
    SerialContainerDirective.directiveFactory.$inject.forEach((item, index) => {
      SerialContainerDirective[item] = injects[index];
      injectMap.set(SerialContainerDirective[item], injects[index]);
    });
    this.restrict = 'EA';
    this.controller = 'SerialContainerController';
    this.controllerAs = 'vm';
    this.scope = {};
    this.bindToController = true;
    this.template = `<sanji-serial data="vm.data" on-submit="vm.onSave(data)"></sanji-serial>`;
  }

  static directiveFactory(...injects) {
    SerialContainerDirective.instance = new SerialContainerDirective(injects);
    return SerialContainerDirective.instance;
  }
}
SerialContainerDirective.directiveFactory.$inject = $inject;
export default SerialContainerDirective;

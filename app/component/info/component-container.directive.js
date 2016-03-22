const injectMap = new WeakMap();
const $inject = [];
class SerialInfoContainerDirective {
  constructor(injects) {
    SerialInfoContainerDirective.directiveFactory.$inject.forEach((item, index) => {
      SerialInfoContainerDirective[item] = injects[index];
      injectMap.set(SerialInfoContainerDirective[item], injects[index]);
    });
    this.restrict = 'EA';
    this.controller = 'SerialInfoContainerController';
    this.controllerAs = 'vm';
    this.scope = {};
    this.bindToController = true;
    this.template = `<sanji-serial-info data="vm.data"></sanji-serial-info>`;
  }

  static directiveFactory(...injects) {
    SerialInfoContainerDirective.instance = new SerialInfoContainerDirective(injects);
    return SerialInfoContainerDirective.instance;
  }
}
SerialInfoContainerDirective.directiveFactory.$inject = $inject;
export default SerialInfoContainerDirective;

const injectMap = new WeakMap();
const $inject = [];
class SerialInfoDirective {
  constructor(injects) {
    SerialInfoDirective.directiveFactory.$inject.forEach((item, index) => {
      SerialInfoDirective[item] = injects[index];
      injectMap.set(SerialInfoDirective[item], injects[index]);
    });
    this.templateUrl = 'sanji-serial-info.tpl.html'
    this.restrict = 'EA';
    this.controller = 'SerialInfoController';
    this.controllerAs = 'vm';
    this.scope = {};
    this.bindToController = {
      tabs: '=data'
    };
  }

  static directiveFactory(...injects) {
    SerialInfoDirective.instance = new SerialInfoDirective(injects);
    return SerialInfoDirective.instance;
  }
}
SerialInfoDirective.directiveFactory.$inject = $inject;
export default SerialInfoDirective;

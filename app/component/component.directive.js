const injectMap = new WeakMap();
const $inject = [];
class SerialDirective {
  constructor(injects) {
    SerialDirective.directiveFactory.$inject.forEach((item, index) => {
      SerialDirective[item] = injects[index];
      injectMap.set(SerialDirective[item], injects[index]);
    });
    this.templateUrl = 'sanji-serial-edit.tpl.html'
    this.restrict = 'EA';
    this.controller = 'SerialController';
    this.controllerAs = 'vm';
    this.scope = {};
    this.bindToController = {
      
      tabs: '=data',
      
      submitCallback: '&onSubmit'
    };
  }

  static directiveFactory(...injects) {
    SerialDirective.instance = new SerialDirective(injects);
    return SerialDirective.instance;
  }
}
SerialDirective.directiveFactory.$inject = $inject;
export default SerialDirective;

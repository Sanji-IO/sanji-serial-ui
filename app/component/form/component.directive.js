const injectMap = new WeakMap();
const $inject = [];
class SerialFormDirective {
  constructor(injects) {
    SerialFormDirective.directiveFactory.$inject.forEach((item, index) => {
      SerialFormDirective[item] = injects[index];
      injectMap.set(SerialFormDirective[item], injects[index]);
    });
    this.templateUrl = 'sanji-serial-form.tpl.html'
    this.restrict = 'EA';
    this.controller = 'SerialFormController';
    this.controllerAs = 'vm';
    this.scope = {};
    this.bindToController = {
      tabs: '=data',
      submitCallback: '&onSubmit'
    };
  }

  static directiveFactory(...injects) {
    SerialFormDirective.instance = new SerialFormDirective(injects);
    return SerialFormDirective.instance;
  }
}
SerialFormDirective.directiveFactory.$inject = $inject;
export default SerialFormDirective;

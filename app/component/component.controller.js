const $inject = [];
class SerialController {
  constructor(...injects) {
    SerialController.$inject.forEach((item, index) => this[item] = injects[index]);
  }

  save(data) {
    this.submitCallback({data: data});
  }
}
SerialController.$inject = $inject;
export default SerialController;

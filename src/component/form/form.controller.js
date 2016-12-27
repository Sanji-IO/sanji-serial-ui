const $inject = [];
class SerialFormController {
  constructor(...injects) {
    SerialFormController.$inject.forEach((item, index) => this[item] = injects[index]);
  }

  save(data) {
    this.submitCallback({
      $event: {data: data}
    });
  }
}
SerialFormController.$inject = $inject;
export default SerialFormController;

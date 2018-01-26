const $inject = [];
class SerialInfoController {
  constructor(...injects) {
    SerialInfoController.$inject.forEach((item, index) => (this[item] = injects[index]));
  }
}
SerialInfoController.$inject = $inject;
export default SerialInfoController;

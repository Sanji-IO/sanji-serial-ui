const $inject = ['sanjiWindowService', 'serialService'];
class SerialContainerController {
  constructor(...injects) {
    SerialContainerController.$inject.forEach((item, index) => this[item] = injects[index]);

    const WINDOW_ID = 'sanji-serial-ui';
    const EDIT_STATE = 'sanji-edit';
    let serialService = this.serialService;
    let sanjiWindowMgr = this.sanjiWindowService.get(WINDOW_ID);

    this.data = serialService.data;

    this.serialService.get().then(() => {
      this.data = serialService.data;
      sanjiWindowMgr.navigateTo(EDIT_STATE);
    });
  }

  onSave(data) {
    this.serialService.update(data);
  }
}
SerialContainerController.$inject = $inject;
export default SerialContainerController;

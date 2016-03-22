const $inject = ['$scope', 'sanjiWindowService', 'serialService'];
const WINDOW_ID = 'sanji-serial-ui';
class SerialInfoContainerController {
  constructor(...injects) {
    SerialInfoContainerController.$inject.forEach((item, index) => this[item] = injects[index]);


    this.sanjiWindowMgr = this.sanjiWindowService.get(WINDOW_ID);
    this.data = this.serialService.data;

    this.activate();

    this.$scope.$on('sj:window:refresh', this.onRefresh.bind(this))
  }

  activate() {
    this.sanjiWindowMgr.promise = this.serialService.get().then(() => {
      this.data = this.serialService.data;
    });
  }

  onRefresh(event, args) {
    if (args.id === WINDOW_ID) {
      this.activate();
    }
  }
}
SerialInfoContainerController.$inject = $inject;
export default SerialInfoContainerController;

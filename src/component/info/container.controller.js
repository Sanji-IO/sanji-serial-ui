const $inject = ['$scope', '$ngRedux', 'sanjiWindowService', 'serialAction'];
const WINDOW_ID = 'sanji-serial-ui';
class SerialInfoContainerController {
  constructor(...injects) {
    SerialInfoContainerController.$inject.forEach((item, index) => this[item] = injects[index]);
  }

  $onInit() {
    this.sanjiWindowMgr = this.sanjiWindowService.get(WINDOW_ID);
    this.unhandler = this.$scope.$on('sj:window:refresh', this.onRefresh.bind(this));
    this.unsubscribe = this.$ngRedux.connect(this.mapStateToThis, this.serialAction)(this);
    this.sanjiWindowMgr.promise = this.getSerials();
  }

  $onDestroy() {
    this.unhandler();
    this.unsubscribe();
  }

  mapStateToThis(state) {
    return {
      data: state.serials
    };
  }

  onRefresh(event, args) {
    if (args.id === WINDOW_ID) {
      this.sanjiWindowMgr.promise = this.getSerials({ force: true });
    }
  }
}
SerialInfoContainerController.$inject = $inject;
export default SerialInfoContainerController;

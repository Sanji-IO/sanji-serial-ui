const SerialWindowComponent = {
  bindings: {
    onAuthorized: '&'
  },
  template: `<sanji-window window-id="sanji-serial-ui"
              window-name="{{'SERIAL' | translate}}" show-loading-btn>
              <sanji-window-state default-state
                state-name="sanji-info"
                link-name="{{'SERIAL_WINDOW_INFO' | translate}}"
                icon="info">
                <sanji-serial-info-container></sanji-serial-info-container>
              </sanji-window-state>
              <sanji-window-state ng-if="::$ctrl.isAuthorized(['root', 'admin'])"
                state-name="sanji-form"
                link-name="{{'SERIAL_FORM_SETTING' | translate}}"
                icon="settings">
                <sanji-serial-form-container></sanji-serial-form-container>
              </sanji-window-state>
            </sanji-window>`,
  controller: class SerialWindowController {
    constructor() {}

    isAuthorized(roles) {
      return this.onAuthorized({
        $event: {
          roles: roles
        }
      });
    }
  }
};
export default SerialWindowComponent;

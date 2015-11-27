const injectMap = new WeakMap();
const $inject = [];
class SerialWindowDirective {
  constructor(injects) {
    SerialWindowDirective.directiveFactory.$inject.forEach((item, index) => {
      SerialWindowDirective[item] = injects[index];
      injectMap.set(SerialWindowDirective[item], injects[index]);
    });
    this.restrict = 'E';
    this.template = `<sanji-window window-id="sanji-serial-ui"
                      window-name="{{'SERIAL' | translate}}" show-loading-btn>
                      <sanji-window-state default-state
                        state-name="sanji-form"
                        link-name="{{'SERIAL_FORM_SETTING' | translate}}"
                        icon="settings">
                        <sanji-serial-container></sanji-serial-container>
                      </sanji-window-state>
                    </sanji-window>`;
  }

  static directiveFactory(...injects) {
    SerialWindowDirective.instance = new SerialWindowDirective(injects);
    return SerialWindowDirective.instance;
  }
}
SerialWindowDirective.directiveFactory.$inject = $inject;
export default SerialWindowDirective;

import SerialFormController from './form.controller';

const SerialFormComponent = {
  bindings: {
    tabs: '<data',
    tabIndex: '=',
    submitCallback: '&onSubmit'
  },
  templateUrl: 'sanji-serial-form.tpl.html',
  controller: SerialFormController
};
export default SerialFormComponent;

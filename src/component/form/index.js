import angular from 'angular';

import './form.tpl.html';
import SerialFormContainerComponent from './container.component';
import SerialFormComponent from './form.component';

const sjSerialForm = angular.module('sanji.serial.form', [])
  .component('sanjiSerialFormContainer', SerialFormContainerComponent)
  .component('sanjiSerialForm', SerialFormComponent)
  .name;
export { sjSerialForm };

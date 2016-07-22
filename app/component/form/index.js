import angular from 'angular';
import {sjCore} from 'sanji-core-ui';

import './form.tpl.html';
import SerialFormContainerComponent from './container.component';
import SerialFormComponent from './form.component';

const sjSerialForm = angular.module('sanji.serial.form', [sjCore])
  .component('sanjiSerialFormContainer', SerialFormContainerComponent)
  .component('sanjiSerialForm', SerialFormComponent)
  .name;
export {sjSerialForm};

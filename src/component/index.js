import angular from 'angular';

import { sjSerialInfo } from './info';
import { sjSerialForm } from './form';

import i18nConfig from './component.i18n';
import { SerialAction, serials, GET_SERIALS, UPDATE_SERIAL } from './serial.state';
import SerialService from './serial.service';
import SerialWindowComponent from './window.component';

const sjSerial = angular.module('sanji.serial', [
  sjSerialInfo,
  sjSerialForm
])
  .config(i18nConfig)
  .factory('serialAction', SerialAction)
  .service('serialService', SerialService)
  .component('sanjiSerialWindow', SerialWindowComponent)
  .name;
export { sjSerial, serials, GET_SERIALS, UPDATE_SERIAL };

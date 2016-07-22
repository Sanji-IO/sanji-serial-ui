import angular from 'angular';
import {sjCore} from 'sanji-core-ui';

import './info.tpl.html';
import SerialInfoContainerComponent from './container.component';
import SerialInfoComponent from './info.component';

const sjSerialInfo = angular.module('sanji.serial.info', [sjCore])
  .component('sanjiSerialInfoContainer', SerialInfoContainerComponent)
  .component('sanjiSerialInfo', SerialInfoComponent)
  .name;
export {sjSerialInfo};

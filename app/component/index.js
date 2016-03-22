import angular from 'angular';
import sjCore from 'sanji-core-ui';

import sjSerialInfo from './info';
import sjSerialForm from './form';

import i18nConfig from './component.i18n';
import SerialService from './component.service';
import SerialWindowDirective from './component-window.directive';

let app = angular.module('sanji.serial', [
  sjCore,
  sjSerialInfo,
  sjSerialForm
]);
app.config(i18nConfig);
app.service('serialService', SerialService);
app.directive('sanjiSerialWindow', SerialWindowDirective.directiveFactory);
export default app = app.name

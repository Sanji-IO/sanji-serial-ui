import sjCore from 'sanji-core-ui';

import './component.tpl.html';
import './component.style.scss';
import i18nConfig from './component.i18n';
import SerialService from './component.service';
import SerialContainerController from './component-container.controller';
import SerialController from './component.controller';
import SerialContainerDirective from './component-container.directive';
import SerialDirective from './component.directive';
import SerialWindowDirective from './component-window.directive';

let app = angular.module('sanji.serial', [sjCore]);
app.config(i18nConfig);
app.service('serialService', SerialService);
app.controller('SerialContainerController', SerialContainerController);
app.controller('SerialController', SerialController);
app.directive('sanjiSerialContainer', SerialContainerDirective.directiveFactory);
app.directive('sanjiSerial', SerialDirective.directiveFactory);
app.directive('sanjiSerialWindow', SerialWindowDirective.directiveFactory);
export default app = app.name

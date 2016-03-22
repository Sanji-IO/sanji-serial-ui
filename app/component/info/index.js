import angular from 'angular';
import sjCore from 'sanji-core-ui';

import './component.tpl.html';
import SerialInfoContainerController from './component-container.controller';
import SerialInfoController from './component.controller';
import SerialInfoContainerDirective from './component-container.directive';
import SerialInfoDirective from './component.directive';

let app = angular.module('sanji.serial.info', [sjCore]);
app.controller('SerialInfoContainerController', SerialInfoContainerController);
app.controller('SerialInfoController', SerialInfoController);
app.directive('sanjiSerialInfoContainer', SerialInfoContainerDirective.directiveFactory);
app.directive('sanjiSerialInfo', SerialInfoDirective.directiveFactory);
export default app = app.name

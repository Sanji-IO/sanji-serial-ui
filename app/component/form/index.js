import angular from 'angular';
import sjCore from 'sanji-core-ui';

import './component.tpl.html';
import SerialFormContainerController from './component-container.controller';
import SerialFormController from './component.controller';
import SerialFormContainerDirective from './component-container.directive';
import SerialFormDirective from './component.directive';

let app = angular.module('sanji.serial.form', [sjCore]);
app.controller('SerialFormContainerController', SerialFormContainerController);
app.controller('SerialFormController', SerialFormController);
app.directive('sanjiSerialFormContainer', SerialFormContainerDirective.directiveFactory);
app.directive('sanjiSerialForm', SerialFormDirective.directiveFactory);
export default app = app.name

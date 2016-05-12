import angular from 'angular';
import sjCore from 'sanji-core-ui';

import './form.tpl.html';
import SerialFormContainerController from './container.controller';
import SerialFormController from './form.controller';
import SerialFormContainerComponent from './container.component';
import SerialFormComponent from './form.component';

let app = angular.module('sanji.serial.form', [sjCore]);
app.controller('SerialFormContainerController', SerialFormContainerController);
app.controller('SerialFormController', SerialFormController);
app.component('sanjiSerialFormContainer', SerialFormContainerComponent);
app.component('sanjiSerialForm', SerialFormComponent);
export default app = app.name;

import angular from 'angular';
import sjCore from 'sanji-core-ui';

import './info.tpl.html';
import SerialInfoContainerController from './container.controller';
import SerialInfoController from './info.controller';
import SerialInfoContainerComponent from './container.component';
import SerialInfoComponent from './info.component';

let app = angular.module('sanji.serial.info', [sjCore]);
app.controller('SerialInfoContainerController', SerialInfoContainerController);
app.controller('SerialInfoController', SerialInfoController);
app.component('sanjiSerialInfoContainer', SerialInfoContainerComponent);
app.component('sanjiSerialInfo', SerialInfoComponent);
export default app = app.name;

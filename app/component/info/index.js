import angular from 'angular';
import sjCore from 'sanji-core-ui';

import './info.tpl.html';
import SerialInfoContainerComponent from './container.component';
import SerialInfoComponent from './info.component';

let app = angular.module('sanji.serial.info', [sjCore]);
app.component('sanjiSerialInfoContainer', SerialInfoContainerComponent);
app.component('sanjiSerialInfo', SerialInfoComponent);
export default app = app.name;

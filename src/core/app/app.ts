import {module as ngMogule} from 'angular';
import AppCtrl from './app.controller'
import appComponent from './app.component'

import footer from '../footer/footer';
import header from '../header/header';

// const components:Array<string> = [];
const components:Array<string> = [
    footer,
    header
];

const MODULE_NAME = 'app';

ngMogule(MODULE_NAME, components)
    .controller('AppCtrl', AppCtrl)
     // .component('kfooter', footer)
    .component('app', appComponent);

export default MODULE_NAME;
import {module as ngMogule} from 'angular';
import AppCtrl from './app.controller'


import './app.less';

let app = () => {
    return {
        template : require('./app.html'),
        controller: 'AppCtrl',
        controllerAs: 'app'
    }
};

const MODULE_NAME = 'app';

ngMogule(MODULE_NAME, [])
    .directive('app', app)
    .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;
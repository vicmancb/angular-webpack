import {module} from 'angular';
import AppCtrl from './app.controller'


import '../style/app.css';

let app = () => {
    return {
        template : require('./app.html'),
        controller: 'AppCtrl',
        controllerAs: 'app'
    }
};


const MODULE_NAME = 'app';

module(MODULE_NAME, [])
    .directive('app', app)
    .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;
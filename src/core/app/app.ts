import {module as ngMogule} from 'angular';
import 'angular-ui-router';


import AppCtrl from './app.controller'
import appComponent from './app.component'

import footer from '../footer/footer';
import header from '../header/header';
import pokemon from '../../pokemon/list/list';

const components:Array<string> = [
    footer,
    header,
    pokemon
];

var dependencies = ['ui.router'].concat(components);

export default ngMogule('app', dependencies)
    .controller('AppCtrl', AppCtrl)
    .component('app', appComponent)
    .config(function ($stateProvider:any, $urlRouterProvider:any, $locationProvider:any) {
        $urlRouterProvider
            .otherwise('/');

        $stateProvider
            .state('main', {
                url: '/',
                template : '<app></app>'
            });

        $locationProvider.html5Mode(true);
    }).name;
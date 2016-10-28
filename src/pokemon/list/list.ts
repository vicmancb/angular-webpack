/**
 * Created by vicman on 10/28/16.
 */

import {module as ngMogule} from 'angular';
import listComponent from './list.component';
import listService from './list.service'

export default ngMogule('app.pokemons.list',[])
    .component('listComponent', listComponent)
    .service('listService', listService)
    .config(function ($stateProvider:any) {
        $stateProvider
            .state('list', {
                url: '/list',
                template : '<list-component></list-component>'
            });
    }).name;
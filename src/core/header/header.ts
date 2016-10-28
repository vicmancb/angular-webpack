/**
 * Created by vicman on 10/27/16.
 */
import {module as ngMogule} from 'angular';
import headerComponent from './header.component'

const MODULE_NAME = 'app.header';

ngMogule(MODULE_NAME,[])
    .component('header', headerComponent);

export default MODULE_NAME;
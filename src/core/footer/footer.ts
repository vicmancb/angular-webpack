/**
 * Created by vicman on 10/27/16.
 */
import {module as ngMogule} from 'angular';
import footerComponent from './footer.component'

const MODULE_NAME = 'app.footer';

ngMogule(MODULE_NAME,[])
    .component('footer', footerComponent);

export default MODULE_NAME;
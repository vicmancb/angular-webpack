import * as angular  from 'angular';

import '../style/app.css';

let app = () => {
    return {
        // template: template,
        template: require('./core/app.html'),

        controller: 'VicCtrl',
        controllerAs: 'VicCtrl'
    }
};

class VicCtrl {
    url: string;

    constructor() {
        this.url = 'https://github.com/preboot/angular-webpack';
    }

    myFunction() {
        this.url = 'tal cosa';
        console.log("tatata");
    }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME)
    .controller('VicCtrl', VicCtrl);


export default MODULE_NAME;
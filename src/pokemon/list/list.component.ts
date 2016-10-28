/**
 * Created by vicman on 10/28/16.
 */
import './list.less';
import listService from './list.service'



class controller {
    name : string;
    listService: listService;
    tal : any;
    static $inject = ['listService'];
    constructor(listService:any) {
        this.name = "hola";
        this.tal = listService;
        console.log(this.tal.getPokemonList());
    }
}

const listComponent =  {
    template : require('./list.html'),
    controller
};

export default listComponent;
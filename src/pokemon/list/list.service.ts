/**
 * Created by vicman on 10/28/16.
 */
// import Pokemon from '../models/pokemon'

export default class listService {
    name : string;
    constructor() {
        this.name = "hola";
    }
    public getPokemonList():Array<any> {
        return [
            {
                name: 'pokemom1',
                image: 'pokemom1.img',
            },
            {
                name: 'pokemom2',
                image: 'pokemom2.img',
            },
        ];
    }
}
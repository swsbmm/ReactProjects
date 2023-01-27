import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes1 from "../../src/data/heroes";
describe('Probando exports 08-imp-exp', () => {
  

    test('getHeroeById debe retornar un heroe por id', () => {
        const id = 1;
        const heroe = getHeroeById( id );
        

        expect( heroe ).toEqual( { id: 1, name: 'Batman', owner: 'DC' })

    })

    test('getHeroeById debe retornar undefined si no existe el id', () => {
        const id = 16;
        const heroe = getHeroeById( id );
        

        expect( typeof heroe ).toBe('undefined');
        expect ( heroe ).toBeFalsy();

    })

    test('Debe retornar un arreglo con los heroes de DC', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner( owner );

        expect ( heroes.length ).toBe( 3 );

        expect( heroes ).toEqual( heroes1.filter( (hero) => hero.owner === owner));

    }) 

    test('Debe retornar un arreglo con los heroes de marvel', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner( owner );
        expect ( heroes.length ).toBe( 2 );
    })
})

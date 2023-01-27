import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Prubeas en 08-promesas', () => {
  test('debe retornar un heroe', (done) => {
    const id = 1;
    getHeroeByIdAsync( id ).then(hero => {

        expect( hero ).toEqual( { id: 1, name: 'Batman', owner: 'DC'} );
        done();
    });
  })

  test('debe retornar un error por que el heroe no existe', (done) => {
    const id = 100;
    getHeroeByIdAsync( id )
    .then(hero => {
        expect ( hero ).toBeFalsy();
    })
    .catch(error => {

        expect( error ).toBe( `No se pudo encontrar el héroe ${ id }` );
        done();
    });
  })
})

import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe('Desestructuracion de arreglos', () => {


  test('Debe retornar un arreglo desustructurado', () => {

    const [letters, numbers] = retornaArreglo();
    expect( letters ).toBe( 'ABC' );
    expect( numbers ).toBe( 123 );

    expect ( typeof letters ).toBe( 'string' );
    expect ( typeof numbers ).toBe( 'number' );
  })


})

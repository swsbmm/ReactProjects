import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {
  test('Debe retornar un objeto', () => {
    const testUser = {
      uid: 'ABC123',
      username: 'El_Papi1502',
    };

    const user = getUser();

    expect( testUser ).toEqual( user ); 

  });

  test('Debe retornar un usuario activo', () => {
    const username = 'Bryan';
    const activeUser = 
        {
            uid: 'ABC567',
            username: username,
        }
    
    const user = getUsuarioActivo(username);

    expect ( activeUser ).toEqual( user );


  })
});

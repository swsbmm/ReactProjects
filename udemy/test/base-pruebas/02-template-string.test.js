import { getSaludo } from "../../src/base-pruebas/02-template-string";


describe('Prueba en 02-templeta-string', () => {
  test('Debe retornar el Hola + nombre', () => {
    const name = 'Bryan';
    const message = getSaludo(name);
    expect(message).toBe(`Hola ${name}`);
  })
})

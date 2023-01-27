
describe('Prubas en <DemoComponent/>', () => {
    
    test('primera prueba', () => {
        // 1. Arreglar
        const message1 = 'Hola Mundo';
        // 2. Actuar
        const message2 = message1.trim();
        // 3. Afirmar
        expect(message1).toBe(message2);
    })
  
})

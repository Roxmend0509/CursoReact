import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebas en el archvio 02-template-string', () => { 

    test('getSaludo debe retornar "Hola Rox"', () => { 
        
        const name = 'Rox';

        const message = getSaludo ( name );

        expect( message ).toBe(`Hola ${name}`)

    })

 })

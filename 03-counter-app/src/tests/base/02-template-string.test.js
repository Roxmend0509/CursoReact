import '@testing-library/jest-dom'
import { getSaludo } from "../../base/02-template-string"

describe('Pruebas en 02-template-string.test.js',()=>{
    test('getSaludo debe de retornar Hola Nombre', () => { 
        const nombre = 'Roxana'

        const saludo = getSaludo(nombre);
        expect(saludo).toBe('Hola '+ nombre);
    })

    //getSaludo debe retornar Hola Hardy si no se manda datos

    test('getSaludo debe retornar Hola Hardy si no manda datos',()=>{

        const saludo = getSaludo();
        expect(saludo).toBe('Hola Hardy');
    })
})
import '@testing-library/jest-dom'
import { getUser, getUsuarioActivo } from '../../base/05-funciones'

describe('Pruebas en 05-funciones.test.js',()=>{
    test('getUser debe retornar un objeto', () => { 
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(user).toEqual(userTest);
    })

    //getUsuarioActivo debe retornar un objeto
    test('getUsuarioActivo debe retornar un objeto', () => { 
        const nombre = 'Roxana';
        const user2 = getUsuarioActivo(nombre);

        expect(user2).toEqual({
            uid: 'ABC567',
            username: nombre
        });
    })
})
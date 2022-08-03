import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en el archvio 09-promesas', () => { 

    test('getHeroeByIdAsync Debe retornar un heroe por Id', (done) => { 
        
        const id = 1;
        getHeroeByIdAsync(id)
            .then(hero => { 
                expect(hero).toEqual({
                        id: 1,
                        name: 'Batman',
                        owner: 'DC'
                })
                done();
        });
    })

 })
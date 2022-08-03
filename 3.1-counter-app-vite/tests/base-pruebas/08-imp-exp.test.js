import { getHeroeById,getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";


describe('Pruebas en el archvio 08-imp-exp', () => { 

    test('getHeroeById Debe retornar un heroe por Id', () => { 
        
        const id = 1;
        const hero = getHeroeById(id);
        console.log(hero);

        expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
    })

    test('getHeroeById Debe retornar undefined si no existe', () => { 
        
        const id = 100;
        const hero = getHeroeById(id);

        expect( hero ).toBeFalsy();
    })

    test('getHeroesByOwner Debe retornar heroes DC', () => { 
        
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);

        expect( heroes.length ).toBe(3);
        expect( heroes ).toEqual( heroes.filter((heroe) => heroe.owner === owner) );

    })

    test('getHeroesByOwner Debe retornar heroes Marvel', () => { 
        
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        expect( heroes.length ).toBe(2);
        expect( heroes ).toEqual( heroes.filter((heroe) => heroe.owner === owner) );
    })

 })
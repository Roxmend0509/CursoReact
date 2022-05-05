import { retornaArreglo } from "../../base/07-deses-arr";
import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('pruebas en 08-heroes',()=>{
    test('debe retornar un heroe por ID', () => { 
         const id = 2;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find(h => h.id == id)

        expect(heroe).toEqual(heroeData);
        
    })

    test('debe retornar undefined si heroe no Existe', () => { 
        const id = 10;
       const heroe = getHeroeById(id);

       expect(heroe).toBe(undefined);
       
   })

    test('debe retornar heroes de DC', () => { 
         const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        
        const heroesData = heroes.filter(h=>h.owner==owner);

        expect(heroes).toEqual(heroesData);
    })

    test('debe retornar heroes de Marvel', () => { 
        const owner = 'Marvel';
       const heroes = getHeroesByOwner(owner);
       
       expect(heroes.length).toBe(2);
   })
})
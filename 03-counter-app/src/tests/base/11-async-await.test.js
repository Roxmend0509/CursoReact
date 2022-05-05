import { type } from "@testing-library/user-event/dist/type";
import { getImagen } from "../../base/11-async-await";

describe('pruebas en 11-async-await.test.js',()=>{
    test('Debe de retornar el url de la imagen', async () => { 
       const url = await getImagen();
        console.log(url);
       expect(url.includes('https://')).toBe(true);
    });
});
import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Pruebas en el archvio 11-async-await', () => { 

    test('getImagen debe retornar un Url de la imagen', async() => { 
        const url = await getImagen();
        console.log(url)
    })
 })
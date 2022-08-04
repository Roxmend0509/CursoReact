import { render,screen } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"


describe('Pruebas en <FirstApp />', () => {

    const title = 'Hola soy Nene'
    const subTitle = 'Soy Bonito'

    test('Debe de hacer match con el snapshot', () => { 
        const {container} = render( <FirstApp title={ title }/> )
        expect( container ).toMatchSnapshot();
    })

    test('Debe de mostrar el mensaje "Hola soy Nene"', () => { 
        render( <FirstApp title={ title }/> )
        expect( screen.getByText(title) ).toBeTruthy();
    })

    test('Debe de mostrar el titulo en un h1', () => { 
        render( <FirstApp title={ title }/> )
        expect( screen.getByRole('heading',{ level: 1 }) ).toBeTruthy();
    })

    test('Debe de mostrar el subtitulo', () => { 
        render( <FirstApp title={ title } subTitle={subTitle} /> )
        expect( screen.getByText(subTitle) ).toBeTruthy();
    })
 })

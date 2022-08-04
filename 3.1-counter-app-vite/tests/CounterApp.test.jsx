import { CounterApp } from "../src/CounterApp"
import { render,screen,fireEvent } from "@testing-library/react"


describe('Pruebas en <CounterApp />',()=>{ 

        const value = 20;

        test('debe de hacer match correctamente', () => { 
            const {container} = render( <CounterApp value={value} /> )
            expect(container).toMatchSnapshot();
        })

        test('debe de mostrar el valor inicial de 100', () => { 
            render( <CounterApp value={ 100 } /> )
            expect(screen.getByText(100) ).toBeTruthy();
        })

        test('debe de incrementar con el boton +1', () => { 
            render( <CounterApp value={ value } /> )
            fireEvent.click( screen.getByText('+1') )
            expect( screen.getByText(value + 1)).toBeTruthy();
        })

        test('debe de restar con el boton -1', () => { 
            render( <CounterApp value={ value } /> )
            fireEvent.click( screen.getByText('-1') )
            expect( screen.getByText(value - 1)).toBeTruthy();
        })

        test('debe de reset con el boton Reset', () => { 
            render( <CounterApp value={ value } /> )
            fireEvent.click( screen.getByText('Reset') )
            expect( screen.getByText(value)).toBeTruthy();
        })


})
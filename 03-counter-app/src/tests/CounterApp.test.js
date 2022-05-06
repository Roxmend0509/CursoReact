import CounterApp from "../CounterApp";
import React from 'react';

import '@testing-library/jest-dom';

import {shallow} from 'enzyme';


describe('Pruebas en <CounterApp />',()=>{
//     test('Debe de mostrar el mensaje "Hola soy nene"',()=>{
//         const saludo = "Hola soy nene";

//         const {getByText} = render(<PrimeraApp saludo={ saludo }/>);

//         expect(getByText(saludo)).toBeInTheDocument();
//     })
    let wrapper = shallow(<CounterApp />) ;

    beforeEach(()=>{
        wrapper = shallow(<CounterApp />);
    })

    test('debe mostrar <CounterApp /> correctamente', () => { 
        expect(wrapper).toMatchSnapshot();
    })

    test('debe mostrar el valor por defecto de 100 <CounterApp /> correctamente', () => { 
        const wrapper = shallow(<CounterApp value={ 100 } />);
        const txtH2 = wrapper.find('h2').text().trim();

        expect(txtH2).toBe('100');
    })

    test('debe de incrementar con el boton +1', () => { 
        wrapper.find('button').at(0).simulate('click');
        const txtH2 = wrapper.find('h2').text().trim();

        expect(txtH2).toBe('11');
    })

    test('debe de decrementar con el boton -1', () => { 
        wrapper.find('button').at(2).simulate('click');
        const txtH2 = wrapper.find('h2').text().trim();

        expect(txtH2).toBe('9');
    })

    test('debe de resetear con el boton Reset', () => { 

        const wrapper = shallow(<CounterApp value={ 105 } />);
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const txtH2 = wrapper.find('h2').text().trim();

        console.log(txtH2)

        expect(txtH2).toBe('105');
    })

    })
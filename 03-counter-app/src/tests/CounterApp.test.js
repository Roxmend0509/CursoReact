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

    test('debe mostrar <CounterApp /> correctamente', () => { 
        const value = 10;
        const wrapper = shallow(<CounterApp value={ value }/>);
        expect(wrapper).toMatchSnapshot();
    })

    test('debe mostrar el valor por defecto de 100 <CounterApp /> correctamente', () => { 
        const wrapper = shallow(<CounterApp value={ 100 } />);
        const txtH2 = wrapper.find('h2').text().trim();

        expect(txtH2).toBe('100');
    })

    })
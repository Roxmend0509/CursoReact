import PrimeraApp from "../PrimeraApp";
import React from 'react';

import '@testing-library/jest-dom';

import {shallow} from 'enzyme';


describe('Pruebas en <PrimeraApp />',()=>{
//     test('Debe de mostrar el mensaje "Hola soy nene"',()=>{
//         const saludo = "Hola soy nene";

//         const {getByText} = render(<PrimeraApp saludo={ saludo }/>);

//         expect(getByText(saludo)).toBeInTheDocument();
//     })

    test('debe mostrar <Primera /> correctamente', () => { 
        const saludo = "Hola soy nene";
        const wrapper = shallow(<PrimeraApp saludo={ saludo }/>);
        expect(wrapper).toMatchSnapshot();
    })
    })
import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";
import React from 'react';


describe('Pruebas en <PrimeraApp />',()=>{
    test('Debe de mostrar el mensaje "Hola soy nene"',()=>{
        const saludo = "Hola soy nene";

        const {getByText} = render(<PrimeraApp saludo={ saludo }/>);

        expect(getByText(saludo)).toBeInTheDocument();
    })
})
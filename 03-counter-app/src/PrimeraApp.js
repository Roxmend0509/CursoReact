import React from 'react';
// import React, { Fragment } from 'react';


const PrimeraApp = ({ saludo = 'Hola Nene' }) =>{

    return (
        <>
            <h1>{ saludo }</h1>
            <p>Mi primera app</p>
        </>
    );
}

export default PrimeraApp;
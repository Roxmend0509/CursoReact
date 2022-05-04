import React from 'react';
import PropTypes from 'prop-types';
// import React, { Fragment } from 'react';


const PrimeraApp = ({ value }) =>{

    //handleAdd
    const handleAdd = (e) =>{
         console.log(e)

        // return () => console.log('Hola Mundo');
    }

    return (
        <>
            <h1> CounterApp </h1>
            <p>{ value }</p>

            <button onClick={ handleAdd }>+1</button>
        </>
    );
}

PrimeraApp.propTypes = {
    saludo:PropTypes.number
}

export default PrimeraApp;
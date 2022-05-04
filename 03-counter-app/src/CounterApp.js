import React, {useState} from 'react';
import PropTypes from 'prop-types';
// import React, { Fragment } from 'react';


const PrimeraApp = ({ value = 10 }) =>{

    const [counter,setCounter] = useState(value)

    //handleAdd
    const handleAdd = () =>{
        setCounter ( counter + 1);

        //setCounter ( (c) => c+1)
        // return () => console.log('Hola Mundo');
    }

    const handleSubstract = () =>{
        setCounter ( counter - 1);

        //setCounter ( (c) => c+1)
        // return () => console.log('Hola Mundo');
    }

    const handleReset = () =>{
        setCounter ( value );

        //setCounter ( (c) => c+1)
        // return () => console.log('Hola Mundo');
    }

    return (
        <>
            <h1> CounterApp </h1>
            <p>{ counter }</p>

            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleSubstract }>-1</button>
        </>
    );
}

PrimeraApp.propTypes = {
    saludo:PropTypes.number
}

export default PrimeraApp;
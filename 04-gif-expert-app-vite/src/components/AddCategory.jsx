import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('');

    const onInputChage = (event) =>{
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const trimInputValue= inputValue.trim();
        if(trimInputValue.length <= 1) return;
        //onAddCategory((categories) => [ inputValue, ...categories ])
        setInputValue('');
        onNewCategory(trimInputValue)
    }

  return (
    <form onSubmit={ onSubmit }>
    <input 
        type="text"
        placeholder="Buscar GIF's"
        value={ inputValue }
        onChange={ (event) => onInputChage(event) }
    />
    </form>
  )
}

import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const GiftExpertApp = () => {

    // const categories = ['Demon Slayer','Jeff Hardy','Puca'];

    const [categories,setCategories] = useState(['Demon Slayer','Jeff Hardy','Puca']);

    // const handleAdd = () =>{
    //     setCategories( cat => [...cat,'Olaf']);
    // }

  return (
    <>
        <h2>GiftExpertApp</h2>
        <AddCategory setCategories={setCategories}/>
        <hr />
        <ol>
            {
                categories.map( (category) => {
                    return <li key = {category}>{category}</li>
                } )
            }
        </ol>
    </>
  )
}

import { useState } from 'react'
import { AddCategory,GifGrid } from './components/index';

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['Rick and Morty']);

    const onAddCategory = ( onNewCategory ) => {
      if( categories.includes(onNewCategory) ) return;


      setCategories( [onNewCategory,...categories]);
    }
    
  return (
    <>
        <h1>GiftExpertApp</h1>

        <AddCategory 
          onNewCategory = { event => onAddCategory(event)}
        />

          { categories.map( (category) => ( 
            <GifGrid 
              key={category} 
              category={category} />
          ))}
    </>
  )
}

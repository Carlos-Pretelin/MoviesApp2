import React, { useState } from 'react'
import useData from '../hooks/useData';


const SearchBar = () => {

  

    const {
        searchValue, 
        setSearchValue, 
        onSearchValueChange, 
        handleClick} = useData();
    

    

  return (
    <div className='SearchBar'>
         <input 
            className="search-input" 
            placeholder='¿Que estas buscando?' 
            value={searchValue}
            onChange={onSearchValueChange}
        />

        

    </div>
  )
}

export default SearchBar
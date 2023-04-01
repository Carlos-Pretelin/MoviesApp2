import React, { useState } from 'react'
import useSearchValue from '../hooks/useSearchValue'


const SearchBar = () => {

    // const [searchValue, setSearchValue] = useState("")


    // const onSearchValueChange = (e)=> {
    //     setSearchValue(e.target.value)
    //     console.log(searchValue)

        
    // }

    const {
        searchValue, 
        setSearchValue, 
        onSearchValueChange, 
        handleClick} = useSearchValue();
    

    

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
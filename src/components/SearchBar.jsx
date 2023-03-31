import React, { useState } from 'react'

const SearchBar = () => {

    const [searchValue, setSearchValue] = useState("")

    const onSearchValueChange = (e)=> {
        setSearchValue(e.target.value)
        console.log(searchValue)

        
    }

    

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
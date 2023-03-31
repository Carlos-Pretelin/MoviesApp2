import React, { useState } from 'react'

import { Link } from 'react-router-dom'

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

        <button> <Link to={"/profile"}>Buscar</Link></button>

    </div>
  )
}

export default SearchBar
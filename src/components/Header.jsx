import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'




const Header = () => {
  return (
    <div>
      <h1>Header</h1>

      <Link to={"/"}>Home</Link>
      <Link to={"/profile"}>Profile</Link>

      <SearchBar/>

      <button> <Link to={"/profile"}>Buscar</Link></button>
      
    </div>
  )
}

export default Header
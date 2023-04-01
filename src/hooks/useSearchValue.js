import React, {useState} from 'react'



//custom hook that handles with the searchBar
const useSearchValue = () => {

    //state of the value of the input
    const [searchValue, setSearchValue] = useState("")

    //function that updates the state on every change applied to the input
    const onSearchValueChange = (e)=> {
        setSearchValue(e.target.value)
        console.log(searchValue)

        
    }

    //Search button function
    const handleClick = ()=> {
        let filteredMedia = movies.filter( movie.name === searchValue)
    }
    
  return {
    searchValue, 
    setSearchValue,
    onSearchValueChange,
    handleClick,
    }
}

export default useSearchValue
import React, {useState} from 'react'
import initialState from '../initialState'




const useData = () => {

    //movies with the initial state
const [movieList, setMovieList] = useState(initialState.movies)
    //The value of the input
const [searchValue, setSearchValue] = useState("")

//function that updates the value of the input 
const onSearchValueChange = (e)=> {
    setSearchValue(e.target.value)
    console.log(e.target.value)

    
}

let searchedMedia = [];

if(!searchValue.length >= 1){
    searchedMedia = movieList;

} else {

    searchedMedia = movieList.filter( movie => {
        const movieName = movie.name.toLowerCase();
        const searchText = searchValue.toLowerCase();
        

       return movieName.includes(searchText)
    })
}



  return {
    movieList,
    setMovieList,
    searchValue, 
    setSearchValue,
    onSearchValueChange,
    searchedMedia,
    
  }
}

export default useData
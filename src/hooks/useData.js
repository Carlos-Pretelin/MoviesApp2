import React, {useState} from 'react'
import initialState from '../initialState'
import useSearchValue from './useSearchValue'




const useData = () => {

const [movieList, setMovieList] = useState(initialState.movies)

const {searchValue, 
    setSearchValue,
    onSearchValueChange,
    handleClick,} = useSearchValue();

  return {
    movieList,
    setMovieList,
    searchValue, 
    setSearchValue,
    onSearchValueChange,
    handleClick,
  }
}

export default useData
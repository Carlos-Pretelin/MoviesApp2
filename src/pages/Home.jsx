import React, { useState } from 'react'
import Slider from '../components/Slider'
import initialState from '../initialState'



const Home = () => {

    //const {movies} = initialState
    const [movieList, setMovieList] = useState(initialState.movies)

  return (
    <div>
        <h1>Home</h1>


        <Slider media={movieList} />

    </div>
  )
}

export default Home
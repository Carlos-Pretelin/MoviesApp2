import React, { useState } from 'react'
import Slider from '../components/Slider'
import useData from '../hooks/useData'



const Home = () => {

    const {movieList, setMovieList} = useData();
    

  return (
    <div>
        <h1>Home</h1>


        <Slider media={movieList} />

    </div>
  )
}

export default Home
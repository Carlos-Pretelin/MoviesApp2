import React from 'react'
import Slider from '../components/Slider'
import initialState from '../initialState'



const Home = () => {

    const {movies} = initialState

  return (
    <div>
        <h1>Home</h1>


        <Slider media={movies} />

    </div>
  )
}

export default Home
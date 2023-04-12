import React from 'react'
import useData from '../hooks/useData'

import "../styles/Slider.scss"

const Slider = () => {


  const {searchedMedia} = useData();


  return (
    <div className='Slider'>

        {searchedMedia.map( item => (
          <div key={item.name}>
                <h1>{item.name}</h1>
                <h2>{item.description}</h2>
                <img src={item.poster} alt="movie poster" />
          </div>
        ))}

    </div>
  )
}

export default Slider
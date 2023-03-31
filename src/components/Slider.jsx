import React from 'react'

import "../styles/Slider.scss"

const Slider = ({media}) => {



  return (
    <div className='Slider'>

        {media.map( item => (
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
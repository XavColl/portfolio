import React from 'react'

function Card({title, text}) {
  return (
    <>
        <div className='title-carrousel'>
            <h1>{title}</h1>
        </div>
        <div className='content-carrousel'>
            <p>{text}</p>
        </div>
    </>
  )
}

export default Card
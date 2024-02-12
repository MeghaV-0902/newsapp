import React from 'react'
import loading from '../spinnerGIF.svg'
export default function Loading() {

    return (
      <div className='text-center'>
        <img src={loading} alt="loading" />
      </div>
    )
}




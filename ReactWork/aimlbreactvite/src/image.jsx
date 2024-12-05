import React from 'react'
import logo from './logo.png';
import './image.css';

function Image() {
  return (
    <div className='imageCard'>
        Image
        <div className='logoDiv'>
            <img src="logo" alt="logo" height={100} width={100} />
        </div>
        <div className='button'>
            <button>Enhance height</button>
            &nbsp; &nbsp; <br />
            <button>Enhance width</button>
            <br /><br />
            <button>Rotate</button>
            &nbsp;
            <button>Color Change</button>

        </div>
    </div>

  )
}

export default Image
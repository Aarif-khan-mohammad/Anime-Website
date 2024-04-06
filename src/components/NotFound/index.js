import React from 'react'
import './index.css'
import Header from '../Header'

const NotFound = () => {
  return (
    <div className='notfound'>
        <Header/>
        <div className='pagenotfound'>
            <h1 className='four'>404</h1>
            <h2 className='page'>Page Not Found !!!</h2>
        </div>
        
    </div>
  )
}

export default NotFound

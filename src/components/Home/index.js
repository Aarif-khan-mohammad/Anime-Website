import React from 'react'
import './index.css'
import Header from '../Header'


const Home = () => (
    <div className='home'>
        <video src='anime360p.mp4' autoPlay loop muted className='video-bg'></video>
        <Header />
        <div className='mini-container'>
            <h1 className='explore'>Explore The More Animes</h1>
            <p className='para'>
            Anime can provide a wide range of perspectives on life, culture, and other topics. It can also help young people find social support and a sense of identity. Anime often has complex backstories and motivations that make the characters relatable and believable. Anime can also portray gender fluidity and female superheroes.
            </p>
            <a href='https://hianime.to/' target='__blank' className='more'><button className='moree'>Explore Now</button></a>
        </div>
    </div>
)

export default Home

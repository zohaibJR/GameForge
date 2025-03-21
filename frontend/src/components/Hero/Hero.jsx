import React from 'react'
import "../Hero/Hero.css"
import hand_icon from "../Assets/hand_icon.png"
import ArrowIcon from "../Assets/arrow.png"
import HeroImage from "../Assets/hero_Image.png"

const Hero = () => {
  return (
    <div className='hero'>
        <div className="heroLeft">
            <h2>New Games Only</h2>
            <div>
                <div className='hero-hand-icon'>
                    <p>new</p>
                    <img src={hand_icon} alt="" />
                </div>
                <p>Games</p>
                <p>For Everyone</p>
            </div>
            <div className='hero-latest-btn'>
                <div>Latest Collection</div>
                <img src={ArrowIcon} alt="" />
            </div>

        </div>
        <div className="heroRight">
            <img src={HeroImage} alt="" />

        </div>
    </div>
  )
}

export default Hero
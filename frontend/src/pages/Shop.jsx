import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/Popular/popular'
import Offers from '../components/Offers/offers'
import NewCollection from '../components/NewCollection/NewCollection'
import NewsLetter from '../components/NewsLetter/NewsLetter'
const Shop = () => {
  return (
    <div>
        <Hero/>
        <Popular />
        <Offers />
        <NewCollection />
        {/* <NewsLetter /> */}
    </div>
  )
}

export default Shop
import React from 'react'
import './item.css'
import { Link } from 'react-router-dom'


const item = (props) => {
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}><img src={props.image} alt="" /></Link>
        {/* <img src={props.image} alt="" /> */}
        <p>{props.name}</p>
        <div className='item-prices'>
            <div className='item-prices-new'>
                RS={props.new_price}
            </div>

            {/* <div className='item-prices-old'>
            RS={props.old_price}
            </div> */}

        </div>
    </div>
  )
}

export default item
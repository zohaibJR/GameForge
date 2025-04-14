import React from 'react'
import "../ProductDisplay/ProductDisplay.css"
import Star_Icon from "../Assets/star_icon.png"
import Star_dull_icon from "../Assets/star_dull_icon.png"


const ProductDisplay = (props) => {
  const {product} = props;
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        {/* <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div> */}
        <div className="productdisplay-img">
          <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>

      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={Star_Icon} alt="" />
          <img src={Star_Icon} alt="" />
          <img src={Star_Icon} alt="" />
          <img src={Star_Icon} alt="" />
          <img src={Star_dull_icon} alt="" />
          <p>(100)</p>
        </div>

        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">RS{product.old_price}</div>
          <div className="productdisplay-right-price-new">RS{product.new_price}</div>
        </div>

        <div className="productdisplay-right-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptates alias incidunt dolores nostrum quasi perferendis accusantium dicta et? Dicta nostrum debitis ullam eligendi tempora sit, quam accusamus, libero cum alias vitae.
        </div>

        <div className="productdisplay-right-Category">
          <h1>Select Edition</h1>
          <div className='productdisplay-right-Categories'>
            <div>Standard</div>
            <div>Deluxe</div>
            <div>Ultimate</div>
          </div>
        </div>
        <button>ADD TO CART</button>
        <p className="productdisplay-right-category"><span>Category:</span> PS4 Game</p>
        <p className="productdisplay-right-category"><span>Tags:</span> Games</p>
      </div>
    </div>
  )
}

export default ProductDisplay
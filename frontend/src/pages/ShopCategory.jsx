import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import dropdownIcon from '../components/Assets/dropdown_icon.png'
import Item from '../components/Items/item';
import './CSS/ShopCategory.css'

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className='Shopcategory-indexSort'>
        <p>
          <span>
            Showing 1-12</span> out of 36 produtcs
        </p>
        <div className='shopcategory-sort'>
          Sort by <img src={dropdownIcon} />
        </div>
      </div>

      <div className="shopcategory-products">
          {all_product.map((item, i) => {
            if (props.category === item.category) {
              return (
                <Item
                  key={i}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              );
            } else {
              <p>Kuch nhe ha</p>
              return null; // optional: skip items not in category
            }
          })}
</div>
    </div>
  )
}

export default ShopCategory
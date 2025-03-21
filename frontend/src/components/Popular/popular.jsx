import React from 'react';
import './popular.css';
import games from "../Assets/popluarGames";
import Item from '../Items/item';

const Popular = () => {
  return (
    <div className='popular'>
        <h1>Popular Games</h1>
        <hr />
        <div className='popular-item'>
            {games.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  );
};

export default Popular;

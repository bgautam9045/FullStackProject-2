import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import {HomeData1} from '../data/homeData1';
import {HomeData2} from '../data/homeData2';

function Cards() {
  return (
    <div className='cards'>
      <h1>Our hawkers!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            {HomeData1.map((data, key) => {
              return(
                <CardItem
                src={data.image}
                text={data.text}
                path=''
              />
              );
            })}
          </ul>
          <ul className='cards__items'>
            {HomeData2.map((data, key) => {
                return(
                  <CardItem
                    src={data.image}
                    text={data.text}
                    label={data.label}
                    path=''
                  />
                );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

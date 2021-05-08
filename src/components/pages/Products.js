import React from 'react';
import '../../App.css';
import {Link} from 'react-router-dom';
import {ProductData1} from '../../data/productData1';
import {ProductData2} from '../../data/productData2';

const cardItem=(
  <div class="card-deck">
    {ProductData1.map((data, key) => {
        return(
          <div class="card">
            <img src={data.image} class="card-img-top h-50" alt="..."/>
            <div class="card-body">
                <h5 class="card-title"><u>{data.heading}</u></h5>
                <p class="card-text">{data.description}</p>
                <Link to="/Details" class="btn btn-primary">Place Order</Link>
            </div>
          </div>
        );
    })}
  </div>
);

const cardItem1=(
  <div class="card-deck">
    {ProductData2.map((data, key) => {
        return(
          <div class="card">
            <img src={data.image} class="card-img-top h-50" alt="..."/>
            <div class="card-body">
                <h5 class="card-title"><u>{data.heading}</u></h5>
                <p class="card-text">{data.description}</p>
                <Link to="/Details" class="btn btn-primary">Place Order</Link>
            </div>
          </div>
        );
    })}
  </div>
);

export default function Products() {
  return(
    <>
     <h1 className='products'>VENDORS</h1>;
     <div className="container">
       <div className="row">
           {cardItem}
           <br></br>
           {cardItem1}
       </div>
       
     </div>
     
     </>
  );
  
}

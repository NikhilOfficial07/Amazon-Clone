import React from 'react'
import { useStateValue } from './StateProvider'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct';
// import CurrencyFormat from 'react-currency-format';
import Subtotal from './Subtotal';
function Checkout() {
    const [{basket}] =useStateValue();

  return (
    <div className='checkout'>
        <div className="checkout__left">
        <img src="https://cdn.zouton.com/images/originals/blog/AmazonWarehouseDeals03_1625232738.png" alt="" className="checkout__ad" />
        
        {basket?.length===0?(
            <div>
                <h2>Your Shopping Basket is empty</h2>
                <p>
                    You have no items in your basket.To buy one or more item, click "Add to basket" next to the item
                </p>
            </div>
        ): (
            <div>
                <h2 className='checkout__title'>Your Shopping Basket</h2>

                {/* List out all of the Checkout Products */}
                {basket?.map(item =>(
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />
                ))}

            </div>
        )}
        </div>
        {basket.length>0 && (
            <div className="checkout__right">
                {/* <h1>subtotal</h1> */}
                <Subtotal />
            </div>
        )}
    </div>
  );
}

export default Checkout
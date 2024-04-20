import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import CartItem from '../Component/CartItem';
import { NavLink } from 'react-router-dom';

const Cart = () => {
    const [total, setTotal] = useState(0);
    const  {ShoppingCart}  = useSelector((state) => state);

    useEffect(()=>{
        setTotal(ShoppingCart.reduce((accumulator , currentVal)=> accumulator + currentVal.price , 0));
    },[ShoppingCart]);

    return (
        <div>
            {
                ShoppingCart.length > 0  ?
                    (
                    <div>
                        <div>
                            {
                                ShoppingCart.map((cartitem)=> (
                                     <CartItem cartitem={cartitem} key={cartitem.id} />
                                ))
                            }
                        </div>
                        <div>
                            <div>
                                <p>YOUR CART</p>
                                <p>SUMMARY</p>
                                <p>
                                    Total Items :
                                    <span>{ShoppingCart.length}</span>
                                </p>
                            </div>
                            <div>
                                <div>
                                    <p>Total Amount:
                                        <span>
                                            ${total}
                                        </span>
                                    </p>
                                </div>
                                <div>
                                    <button>
                                        Checkout Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                     :
                    (
                        <div>
                            <h1>Cart Empty</h1>
                            <NavLink to="/">
                                <button>
                                    Shop Now
                                </button>
                            </NavLink>
                        </div>
                    )
        }
        </div>
    )
}

export default Cart
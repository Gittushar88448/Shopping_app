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
        <div className=' select-none mx-auto'>
            {
                ShoppingCart.length > 0  ?
                    (
                    <div className="max-w-[1150px] flex justify-center mx-auto mt-10 gap-x-10">
                        <div className='w-full flex flex-col gap-8 items-center p-2 mb-2 '>
                            {
                                ShoppingCart.map((cartitem)=> (
                                     <CartItem cartitem={cartitem} key={cartitem.id} />
                                ))
                            }
                        </div>
                        <div className='w-[100%] mt-5 flex flex-col justify-between mb-6'>
                            <div className='flex flex-col  my-14 h-[100%] gap-y-5'>
                                <p className='font-semibold text-xl text-green-600'>YOUR CART</p>
                                <p className='font-semibold text-5xl text-green-700 '>SUMMARY</p>
                                <p className='text-xl text-slate-700'>
                                    Total Items : {ShoppingCart.length}
                                </p>
                            </div>
                            <div className='flex flex-col'>
                                <div>
                                    <p className='text-xl text-slate-700'>Total Amount:
                                        <span className='font-semibold px-3'>
                                            ${total}
                                        </span>
                                    </p>
                                </div>
                                <div>
                                <button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2
                                 border-green-600 font-bold hover:text-green-700 p-3 text-xl w-full">
                                    Checkout Now
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                     :
                    (
                        <div className=' h-screen w-[100%] flex flex-col justify-center items-center overflow-x-hidden'>
                            <h1 className='text-xl text-slate-700'>Your Cart is Empty!</h1>
                            <NavLink to="/">
                                <button
                                className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2
                                border-green-600 font-bold hover:text-green-700 p-3 text-xl"
                                >
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
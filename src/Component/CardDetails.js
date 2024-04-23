import React from 'react'
import {useDispatch,  useSelector } from 'react-redux';
import { add, remove } from '../redux/Slice/CartSlice';
import toast from 'react-hot-toast';

const CardDetails = ({ post }) => {


    const dispatch = useDispatch();

    // Fetch shopping cart from the redux store

    const { ShoppingCart } = useSelector((state) => state);
    
    // Remove cart item function 

    function removeCartItem() {
        dispatch(remove(post.id))
        toast.error("Item removed from cart!")
    }

    // add to cart item

    function addCartItem() {
        dispatch(add(post))
        toast.success("Item added to cart!");
    }


    return (
        <div className="flex flex-col items-center justify-between 
           hover:scale-105 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl border hover:shadow-2xl">
            <div>
                <h2 className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{post.title}</h2>
            </div>
            <div>
                <h2 className="w-40 text-gray-400 font-normal text-[10px] text-left">{post.description.split(" ").slice(0, 10).join(" ") + "..."}</h2>
            </div>
            <div className="h-[180px]">
                <img src={post.image} alt='post img' className='h-full w-full'></img>
            </div>

            <div  className="flex justify-between gap-12 items-center w-full mt-5">
                <div>
                    <p className="text-green-600 font-semibold">${post.price}</p>
                </div>
                <div>
                    {/* Show add to cart and remove from cart button on the basis of some condition  */}
                    {
                        ShoppingCart.some((p) => p.id === post.id) ?
                            (
                                <button 
                                
                                    onClick={removeCartItem}  
                                    className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
                                        text-[12px] p-1 px-3 uppercase 
                                        hover:bg-gray-700
                                        hover:text-white transition duration-300 ease-in"
                                >
                                    REMOVE ITEM
                                </button>
                            )
                            :
                            (
                                <button onClick={addCartItem}
                                    className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
                                        text-[12px] p-1 px-3 uppercase 
                                        hover:bg-gray-700
                                        hover:text-white transition duration-300 ease-in"
                                >
                                    ADD TO CART
                                </button>
                            )
                    }
                </div>
            </div>

        </div>
    )
}

export default CardDetails
import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux'
import { remove } from '../redux/Slice/CartSlice'
import toast from 'react-hot-toast'
const CartItem = ({ cartitem }) => {

    const dispatch = useDispatch();

    // Function to remove items from cartitem using dispatch hook

    function removeFromCart() {
        dispatch(remove(cartitem.id))
        toast.error("Item removed from cart!")

    }

    return (
        <div className='flex w-full h-auto gap-x-8 border-b-2 border-slate-500 mt-2 mb-2 py-7 items-center rounded-md hover:shadow-lg'>
            <div className='w-[40%]'>
                <img src={cartitem.image} alt='cart item img'></img>
            </div>
            <div className=' self-start space-y-5 w-[100%]'>
                <div>
                    <p className='text-xl text-slate-700 font-semibold'>{cartitem.title}</p>
                </div>
                <div>
                    <p className='text-base text-slate-700 font-medium'>{cartitem.description.slice(0, 90) + "..."}</p>
                </div>
                <div className='flex items-center justify-between'>
                    <p className='font-semibold text-green-700'>${cartitem.price}</p>

                    {/* when you triggered button then function call wake up */}

                    <button onClick={removeFromCart}
                        className='w-[40px] h-[40px] bg-red-200 rounded-full flex items-center justify-center 
                        transition-all duration-200 hover:bg-red-400 group'>

                            {/* Delete icon */}

                        <MdDelete className='text-red-700 text-lg group-hover:text-white ' />
                    </button>

                </div>
            </div>
        </div>
    )
}

export default CartItem
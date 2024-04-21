import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux'
import { remove } from '../redux/Slice/CartSlice'
import toast from 'react-hot-toast'
const CartItem = ({cartitem}) => {
    const dispatch = useDispatch();

    function removeFromCart(){
        dispatch( remove(cartitem.id))
            toast.error("Item removed from cart!")
        
    }

  return (
    <div >
        <div>
            <img src={cartitem.image} alt='cart item img'></img>
        </div>
        <div >
            <div> -
                <p >{cartitem.title}</p>
            </div>
            <div>
                <p >{cartitem.description.slice(0 , 90) +"..."}</p>
            </div>
            <div>
                <p>${cartitem.price}</p>

                <button onClick={removeFromCart} 
                
                >
                    <MdDelete />
                </button>

            </div>
        </div>
    </div>
  )
}

export default CartItem
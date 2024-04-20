import React from 'react'

const CardDetails = ({post}) => {
  return (
    <div>
        <div>
            <h2>{post.title}</h2>
        </div>
        <div>
            <h2>{post.description}</h2>
        </div>
        <div>
            <img src={post.image}></img>
        </div>

        <div>
            <div>
                <p>{post.price}</p>
            </div>
            <div>
                <button>
                    ADD TO CART
                </button>
            </div>
        </div>

    </div>
  )
}

export default CardDetails
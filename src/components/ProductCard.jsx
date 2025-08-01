import React from 'react'
import star from "../assets/star.svg"


function ProductCard({

    image,
    name,
    price,
    category,

}) {
  return (
        <div className="rounded-2xl pb-2 bg-white hover:scale-102 hover:-translate-y-1 transition-transform duration-200 ">
          {/* img container */}
          <div className=" aspect-square overflow-hidden rounded-t-2xl bg-gray-50 flex justify-center ">
            {/* offcial img  */}
            <img 
            className='h-full w-full object-cover '
            src={image} 
            alt={name} />
          </div>
          {/* info container */}
          <div className=" flex justify-center flex-col items-center border-violet-700 mt-2">
            <p className="">{category}</p>
            <h2 className="text-lg">{name}</h2>
            {/* stars icons */}
            <div className="flex gap-0.5 ">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
          </div>

          {/* buying options container */}
          <div className="border mx-2 font-sans border-neutral-800 rounded-lg mt-8 flex items-center justify-between px-2 py-1">
            <p className=" ">${price} </p>

            {/* add to cart iccon/ */}
            <button 
            className="cursor-pointer ">
              <svg
              className='hover:fill-neutral-800 transition-colors duration-200'
              xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50">
                  <path d="M25,2C12.317,2,2,12.317,2,25s10.317,23,23,23s23-10.317,23-23S37.683,2,25,2z M37,26H26v11h-2V26H13v-2h11V13h2v11h11V26z"></path>
              </svg>
            </button>
          </div>

        </div>

  )
}

export default ProductCard
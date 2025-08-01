import React from 'react'
import star from '../assets/star.svg'

function ReviewCard({
    bgImage,
    profileImg,
    name,
    title,
    reviewMsg,
    rating
}) {

    
  return (
    <>
    {/* main card 1  */}
        <div className=" relative rounded-2xl overflow-hidden hover:scale-102 hover:-translate-y-1 transition-transform duration-200 bg-purple-400">
                {/* bg img */}
                <img src={bgImage} alt="room1" className="w-full h-[450px] object-cover rounded-2xl" />

                {/* white card */}
                <div className="absolute bottom-0 bg-white m-4 inset-x-0 rounded-2xl px-6 py-6 ">

                  {/* popped out profile pic */}
                  <img src={profileImg} alt="" className="absolute -top-10 left-1/2 -translate-x-1/2 h-20 w-20 rounded-full border-4 border-white " />

                  {/* main names nd info */}
                  <div className="text-center px-6 py-4">
                    <h2 className="text-lg font-bold "> {name} </h2>
                    <p className="text-sm font-semibold border-b mt-2 text-gray-800">{title} </p>
                    <p className="text-sm text-neutral-800 mt-4">{reviewMsg} </p>
                  </div>

                  {/* for stars */}
                  <div className="flex gap-0.5 justify-center items-center ">
                    {Array.from({length:rating},(_,index) => (
                        <img 
                        src={star} 
                        alt="star-icon" 
                        className="w-4 h-4" />
                    ) )}

                  </div>

                </div>




        </div>
    
    </>

  )
}

export default ReviewCard
import React from 'react'

function Hero() {
  return (
    // main div
    <div className='py-2 px-4 mt-20 font-raleway'>

      {/* div for text ig its better idk  */}
      <div className="max-w-[794px] mx-auto text-center py-2 px-4 font-raleway">

      {/* main headline */}
      <h1 className="text-6xl text-gray-100 mb-5 leading-[1.3] ">Make your Interior more Realiistc & Modern </h1>
      <p className="text-2xl text-gray-100 leading-[1.6] ">Turn your room with Panto into a lot more minimalistic and modern with ease and speed</p>

      {/* searchbox div */}
        <div className="mt-12 flex justify-center items-center">

          <div className="border border-[#b8bec7]  bg-black/20 backdrop-blur-sm overflow-hidden rounded-full flex">

            <input  
            className='outline-none pl-5 py-2 bg-transparent text-gray-300 placeholder-white/60  '
            placeholder='search anything'
            type="text" />
            
            {/* icon svg */}
                  <div className=" p-3 flex items-center rounded-full bg-[#E58411] cursor-pointer ">
                    <svg 
                    className=''
                    xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18" viewBox="0 0 50 50">
          <path d="M 21 3 C 11.622998 3 4 10.623005 4 20 C 4 29.376995 11.622998 37 21 37 C 24.712383 37 28.139151 35.791079 30.9375 33.765625 L 44.085938 46.914062 L 46.914062 44.085938 L 33.886719 31.058594 C 36.443536 28.083 38 24.223631 38 20 C 38 10.623005 30.377002 3 21 3 z M 21 5 C 29.296122 5 36 11.703883 36 20 C 36 28.296117 29.296122 35 21 35 C 12.703878 35 6 28.296117 6 20 C 6 11.703883 12.703878 5 21 5 z"></path>
                    </svg>
                  </div>
            
          </div>

        </div>

      </div>
    </div>
  )
}

export default Hero
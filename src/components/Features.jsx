import React from 'react'
import arrow from "../assets/arrow.svg"

function Features() {
  return (
    // feature section 
    <section className=' bg-gradient-to-b from-white to-gray-100 gap-28 flex py-24 px-24'>
      {/*countainer 1 idk xd */}
      <div className="shrink-0 w-1/4 flex flex-col justify-center items-start ">
        <h1 className="text-[40px] font-black leading-relaxed ">Why </h1>
        <h1 className="text-[40px] font-black leading-relaxed ">Choose Us ?</h1>
      </div>

      {/* container 2 */}
        {/* parent */}
      <div className=" grow-0 flex items-center justify-between px-2">

        {/* card 1 */}
        <div className=" py-2 flex flex-col ">
          <h1 className="text-xl font-bold mb-5">Luxury Facilities</h1>
          <p className="text-lg leading-snug">Experience premium quality furniture with exceptional craftsmanship and attention to detail in every piece.</p>

          {/* one more div for arrow lmao */}
          <a 
          href = ""
          className="mt-3.5 flex gap-4">
            <p className='hover:font-black transition-all duration-200 text-[#E58411]'>More Info</p>
            <img src={arrow} className='fill-black' alt="arrow" />
          </a>
        </div>

        {/* card 2 */}
        <div className=" py-2 flex flex-col">
          <h1 className="text-xl font-bold mb-5">Affordable Price</h1>
          <p className="text-lg leading-snug ">Get the best value for your money with our competitive pricing and flexible payment options.</p>

          {/* one more div for arrow lmao */}
          <a
          href='#'
          className="mt-3.5 flex gap-4 ">
            <p className='hover:font-black transition-all duration-200 text-[#E58411] '>More Info</p>
            <img src={arrow} alt="" />
          </a>
        </div>

        {/* card 3 */}
        <div className=" py-2 ">
          <h1 className="text-xl font-bold mb-5">Many Choices</h1>
<p className="text-lg leading-snug">Explore our extensive collection of furniture styles, from modern minimalist to classic traditional designs.</p>

          {/* one more div for arrow lmao */}
          <a
          href='#'
          className="mt-3.5 flex gap-4">
            <p className='text-[#E58411] hover:font-bold transition-all duration-200'>More Info</p>
            <img src={arrow} alt="arrow" />
          </a>
        </div>

      </div>

    
      
      </section>
  )
}

export default Features
import React from 'react'
import Bag from "../assets/Bag.png"

function Navbar() {
  return (
    // main div for hedaer
      <nav className=" text-white bg-transparent flex justify-between px-20 py-10 items-center">
        {/* div for logo */}
        <div className="">
          <a href="" className="font-bold text-[32px] font-julius tracking-wide">Dacia</a>
        </div>

        {/* div for links */}
        <div className="px-2">
          <ul className="flex text-white gap-16 font-raleway items-center ">
            <li className="hover:text-[#E58411] transition-colors duration-200 "><a href="#features">Features</a></li>
            <li className="hover:text-[#E58411] transition-colors duration-200"><a href="#products">Shop</a></li>
            <li className="hover:text-[#E58411] transition-colors duration-200"><a href="#experience">About Us</a></li>
            <li className="hover:text-[#E58411] transition-colors duration-200"><a href="#reviews">Testimonials</a></li>
          </ul>
        </div>

        {/* div for the shop button ig ? idk lets see */}
        <div className="">
          <a href=""
           className="">
            <span>
              <img src={Bag} alt="bag" className='h-9 w-9' />
            </span>
          </a>
          
        </div>

      </nav>

  )
}


export default Navbar
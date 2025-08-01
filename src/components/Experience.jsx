import React from 'react'
import arrow from "../assets/arrow.svg"
import room from '../assets/room.png'

function Experience() {
  return (
    <section className="pt-[150px] font-raleway pb-[50px] mb-4 p-4">
        {/* felx container */}
        <div className=" max-w-7xl bg-neutral-100 rounded-2xl mx-auto py-15 px-5 flex gap-35">
            {/* col 1 */}
            <div className="overflow-hidden aspect-[17/12] flex-1/2">
                <img src={room} alt="" className="h-full w-full rounded-2xl" />
            </div>

            {/* col 2 */}
            <div className="space-y-4 flex-1/2">
                <h3 className="text-lg mt-4 mb-2 font-bold text-red-900">EXPERIENCE</h3>
                <h1 className="text-[38px] leading-snug">We Provide You the Best Experience</h1>
                <p className="text-[18px]">Discover the perfect blend of style, comfort, and functionality with our curated furniture collection. Our expert team ensures every piece meets the highest standards of quality and design, creating spaces that truly reflect your personality and lifestyle.</p>

                {/* more info link  */}
                <a href="#" className="flex gap-4 mt-2">
                    <p className="text-lg text-amber-800 font-bold">More Info.</p>

                    <img src={arrow} alt="arrow" />
                </a>
            </div>
        </div>
    </section>
  )
}

export default Experience
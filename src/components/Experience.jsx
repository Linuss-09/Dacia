import React from 'react'
import arrow from "../assets/arrow.svg"
import room from '../assets/room.png'

function Experience() {
  return (
    <section className="pt-[150px] font-raleway pb-[50px] border p-4">
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
                <p className="text-[18px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni porro, aspernatur atque sit tenetur maiores Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto repudiandae placeat, saepe ullam esse inventore?</p>

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
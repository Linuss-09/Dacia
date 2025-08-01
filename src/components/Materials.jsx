import React from 'react'
import arrow from "../assets/arrow.svg"
import room1 from "../assets/room1.png"
import room2 from "../assets/room2.png"
import room3 from "../assets/room3.png"

function Materials() {
  return (
    <section className="my-20 p-4 ">
        {/* flex container  */}
        <div className=" rounded-2xl bg-gray-100 flex max-w-7xl mx-auto gap-35 p-5">
            {/* col 1 */}
            <div className=" space-y-4 flex flex-col justify-center w-1/2">
                <h3 className="text-lg mt-6 text-red-800 font-bold">MATERIALS</h3>
                <h1 className="text-[36px] leading-snug ">High Quality Materials for Making Furniture</h1>
                <p className="text-lg"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem soluta amet alias dolorum voluptate iusto consequatur earum laudantium provident velit praesentium, molestias reprehenderit voluptatem expedita eveniet beatae saepe?</p>

                <a href="" className="flex gap-4 font-bold text-lg text-[#9d3c00] ">
                    <p className="">More Info.</p>
                    <img src={arrow} alt="" />
                </a>
            </div>

            {/* col 2 */}
            <div className=" w-1/2  h-[616px]  grid grid-cols-2 gap-2 grid-rows-2">
                <div className="">
                    <img src={room3} alt="" className="h-full w-full object-cover rounded-lg" />
                </div>

                <div className=" row-span-2 ">
                    <img src={room1} alt="" className=" h-full w-full object-cover object-centerr rounded-lg" />
                </div>

                <div className=" ">
                    <img src={room2} alt="" className="h-full w-full object-cover rounded-lg" />
                </div>


            </div>
        </div>
    </section>
  )
}

export default Materials
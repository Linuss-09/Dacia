import {useState} from 'react'
import i1 from "../assets/i1.png"
import r1 from "../assets/r1.png"
import i2 from "../assets/i2.png"
import r2 from "../assets/r2.png"
import i3 from "../assets/i3.png"
import r3 from "../assets/r3.png"
import jamie from "../assets/jamie.webp"
import cer from "../assets/cer.jpeg"
import tyr from "../assets/t1.webp"

import dany from "../assets/dany.avif"
import jon from "../assets/jon.avif"
import yg from "../assets/yg.jpeg"
import sansa from "../assets/sansa.webp"
import jorah from '../assets/j.jpeg'

import caty from "../assets/caty.jpg"

import arrow from "../assets/arrow-2.png"
import star from "../assets/star.svg"
import ReviewCard from './ReviewCard'

function Reviews() {

  const reviewData = [
    {
      id: 1,
      bgImage: r3,
      profileImg: jon,
      name: "Jon Snow",
      title: "King in the North",
      reviewMsg: "Incredibly comfortable bed. Best sleep I've had in years!",
      rating: 4
    },
    {
      id: 2,
      bgImage: r2,
      profileImg: dany,
      name: "Daenerys Targareyen",
      title: "Mother of Dragons",
      reviewMsg: "This sofa is absolutely magnificent. Perfect for royal comfort!",
      rating: 5
    },
    {
      id: 3,
      bgImage: r1,
      profileImg: cer,
      name: "Cersei Lannister",
      title: "Queen ",
      reviewMsg: "Luxurious furniture fit for royalty. Excellent quality and design.",
      rating: 5
    },
    {
      id: 4,
      bgImage: r2,
      profileImg: tyr,
      name: "Tyrion Lannister",
      title: "Hand of the Queen",
      reviewMsg: "The wardrobe is perfectly sized and beautifully crafted. Five stars!",
      rating: 5
    },
    {
      id: 5,
      bgImage: r1,
      profileImg: yg,
      name: "Ygritte",
      title: "Lover Beyond the Wall",
      reviewMsg: "These beds are warmer and cozier than anything beyond the Wall!",
      rating: 4
    },
    {
      id: 6,
      bgImage: r3,
      profileImg: sansa,
      name: "Sansa Stark",
      title: "Lady of Winterfell",
      reviewMsg: "Finally, furniture worthy of the North. Warm and comfortable.",
      rating: 5
    },
    {
      id: 7,
      bgImage: r1,
      profileImg: jamie,
      name: "Jaime Lannister",
      title: "The Kingslayer",
      reviewMsg: "Outstanding craftsmanship and attention to detail. Highly recommend!",
      rating: 4
    },
    {
      id: 8,
      bgImage: r2,
      profileImg: caty,
      name: "Lady Catelyn Stark",
      title: "Lady of Winterfell",
      reviewMsg: "Beautiful dining table perfect for family gatherings and celebrations.",
      rating: 5
    },
    {
      id: 9,
      bgImage: r3,
      profileImg: jorah,
      name: "Ser Jorah",
      title: "Lord of Bear Island",
      reviewMsg: "Exceptional quality sofa. Great investment for any home!",
      rating: 5
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  // handler fucniton for handling this thing idk but imma learn it
  const handleNext = () => {
    console.log("next tbn press")
    if(currentIndex < reviewData.length - 3){
      setCurrentIndex(currentIndex + 1)
    }
  }

  const handlePrev = () => {
    console.log("prev btn ")
    // to check if its possible to go back 
    if(currentIndex > 0) {
      setCurrentIndex(currentIndex -1)
    }
  }

  return (
    <section className=" p-2 my-10">
      {/* main flex kinda container */}
      <div className=" space-y-6 ">

          {/* text wrapper div */}
          <div className="space-y-4">
              <h3 className="text-xl font-bold mt-6 text-red-900 text-center ">TESTIMONIALS</h3>
              <h1 className="text-[36px] font-bold text-center">Our Client Reviews</h1>
          </div>




          {/* MAIN CONTTENT */}
          <div className="bg-gray-100 font-raleway flex justify-center items-center mx-20 rounded-2xl gap-8 mt-12">

            {/* button arro */}
            <button 
            onClick={handlePrev}
            className="p-2 border rounded-full flex justify-center items-center cursor-pointer">
              <img src={arrow} alt="" />
            </button>

            {/* THE WINDOW which hides overflwoiong cards  */}
            <div className="overflow-hidden py-10">
              {/* the FILMSTRIP it will slide horizontally */}
              <div className="flex transition-transform duration-500 ease-in-out "
              style={{
                transform: `translateX(-${currentIndex * 33.33}% )`,
                // width: `${(reviewData.length * 100)/3}% `
              }}
              >
                {/* {map over all reives not gonna just lisce it idk } */}
                {reviewData.map((item) => (
                  <div 
                  key={item.id}
                  className="w-1/3 shrink-0 px-2 "
                  >
                    <ReviewCard
                      key={item.id}
                      bgImage={item.bgImage}
                      profileImg={item.profileImg}
                      name={item.name}
                      title={item.title}
                      reviewMsg={item.reviewMsg}
                      rating={item.rating}
                    />
                  </div>
                ))}

              </div>

            </div>


            {/*GRID conatainer for that card ig */}
            {/* <div className=" grid grid-cols-3 gap-8 py-10 ">
              {displayedReviews.map((item) => (
                <ReviewCard 
                key={item.id}
                bgImage={item.bgImage}
                profileImg={item.profileImg}
                name={item.name}
                title={item.title}
                reviewMsg={item.reviewMsg}
                rating={item.rating}

                />
              ))}
            </div> */}

              {/* button arrow */}
              <button 
              onClick={handleNext}
              className="p-2 border rounded-full flex justify-center items-center cursor-pointer">
                <img src={arrow} alt="" className='rotate-180 ' />
              </button>

          </div>



        </div>

    </section>
  )
}

export default Reviews
import { useState } from "react"
import chair1 from "../assets/chair12.webp"
import chair2 from "../assets/chair.webp"
import chair3 from "../assets/chair2.webp"
import chair4 from "../assets/chai15.webp"

import bed1 from "../assets/bed11.avif"
import bed2 from "../assets/bed12.webp"
import bed3 from "../assets/qbed.webp"
import bed4 from "../assets/bed4.avif"

import sofa1 from "../assets/sofa1.webp"
import sofa2 from "../assets/sofa2.webp"
import sofa3 from "../assets/sofa3.webp"
import sofa4 from "../assets/sofa4.webp"

import war1 from "../assets/war1.avif"
import war2 from "../assets/war2.jpg"
import war3 from "../assets/war3.webp"
import war4 from "../assets/war4.jpg"
import arrow from "../assets/arrow.svg"
import ProductCard from './ProductCard'



function Products() {

  const productsData = [
    {
      id:1,
      image: chair1,
      name: 'Sakarias Armchair',
      price: 392,
      category:"Chair"
    },
    {
      id:2,
      image: chair2,
      name: 'Baltsar Chair',
      price: 299,
      category:"Chair"
    },
    {
      id:3,
      image: chair3,
      name: 'Anjay Chair',
      price: 599,
      category:"Chair"
    },
    {
      id:4,
      image: chair4,
      name: ' Nyantuy Chair',
      price: 451,
      category:"Chair"
    },
    // Bed products
    {
      id:5,
      image: bed1,
      name: 'Royal Comfort Bed',
      price: 899,
      category:"Bed"
    },
    {
      id:6,
      image: bed2,
      name: 'Elegance Platform Bed',
      price: 749,
      category:"Bed"
    },
    {
      id:7,
      image: bed3,
      name: 'Luxura Queen Bed',
      price: 1299,
      category:"Bed"
    },
    {
      id:8,
      image: bed4,
      name: 'Modern Sleep Bed',
      price: 689,
      category:"Bed"
    },
    // Sofa products
    {
      id:9,
      image:sofa1,
      name: 'Comfort Zone Sofa',
      price: 1199,
      category:"Sofa"
    },
    {
      id:10,
      image:sofa2,
      name: 'Luxury Sectional Sofa',
      price: 1899,
      category:"Sofa"
    },
    {
      id:11,
      image:sofa3,
      name: 'Classic Living Sofa',
      price: 999,
      category:"Sofa"
    },
    {
      id:12,
      image:sofa4,
      name: 'Contemporary Sofa',
      price: 1499,
      category:"Sofa"
    },
    // Wardrobe products
    {
      id:13,
      image:war2,
      name: 'Spacious Wardrobe',
      price: 799,
      category:"Wardrobe"
    },
    {
      id:14,
      image:war4,
      name: 'Modern Storage Unit',
      price: 649,
      category:"Wardrobe"
    },
    {
      id:15,
      image:war1,
      name: 'Executive Wardrobe',
      price: 1099,
      category:"Wardrobe"
    },
    {
      id:16,
      image:war3,
      name: 'Designer Closet',
      price: 949,
      category:"Wardrobe"
    }
  ]

  const [activeCategory, setactiveCategory] = useState("Bed")

  const [isFading, setIsFading] = useState(false)
  // filter out the necesorry things from the product data arr
  const filtererdProducts = productsData.filter(
    (product) => product.category === activeCategory
  )

  const filterCategories = ["Chair", "Bed", "Sofa", "Wardrobe"]

  const handleFilterClick = (category) => {

    // start the fade out animation
    setIsFading(true)

    //w8 for fade out to finish 
    setTimeout(() => {
      
      //once invisble change the category 
      setactiveCategory(category) 

      // start the fade in ig?
      setIsFading(false)


    }, 200);
  }

  return (
    // main section
    <section className="font-raleway border p-4 bg-gray-100">
      <h3 className="text-[42px] text-center mb-8">Best Selling</h3>
      <div className="mb-10 p-2 flex  justify-center">
        <ul className="bg-gray-200 flex gap-2 px-3 py-2 rounded-2xl">

          {filterCategories.map((cat) => (
            <button 
            key={cat}
            onClick={() => handleFilterClick(cat)}

            className={
              activeCategory === cat 
              ? "bg-gray-400 px-4 py-2 transition-all duration-200 ease-in-out rounded-2xl cursor-pointer" 
              :"bg-gray-300 px-4 py-2 hover:bg-gray-400 transition-all duration-200 cursor-pointer rounded-2xl "
            }
            
            >
              {cat}
            </button>
          )) }
        </ul>
      </div>

      {/* card container div */}
      <div className= {`p-4 gap-4 grid grid-cols-4 mx-16 transition-opacity ease-in-out
        ${isFading ? 'opacity-0' : "opacity-100"}
        `}>
        { filtererdProducts.map((product) => (
          <ProductCard
          key={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
          category={product.category}
          />
        )) }
      </div>

      <a
      href="#"
      className="flex max-w-[160px] py-1 cursor-pointer border rounded-xl  mt-6 mx-auto justify-center gap-4">
        <p className="text-[#bb892c] font-bold">View All</p>
            <img src={arrow} alt="arrow" />
      </a
      >
    </section>
  )
}

export default Products
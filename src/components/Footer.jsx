import React from 'react'

function Footer() {
  return (
    <footer className="font-raleway p-4">
      {/* grid contaier */}
      <div className=" max-w-6xl mx-auto p-4 gap-8 grid grid-cols-[2fr_1fr_1fr_1fr] ">
        {/* main title */}
        <div className=" py-3 space-y-4">
          
          <h3 className="text-3xl font-bold">

            <a href="" className="text-red-900">
              Dacia
            </a>

            </h3>
          <p className="text-base text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quod aperiam voluptatem laboriosam maxime</p>
        </div>

        {/* servicce ig? */}
        <div className=" space-y-3 py-3">

          <h3 className="text-lg font-bold text-gray-900">Services</h3>

          {/* text wrapper div */}
          <ul className=" space-y-2">
            <li className="text-sm text-gray-700">
              <a href="">
              Interior Decoration
              </a></li>
            <li className="text-sm text-gray-700 ">
              <a href="">
              Furnitures
              </a></li>
            <li className="text-sm text-gray-700">
              <a href="">
              Laptop
              </a></li>
          </ul>
        </div>


        <div className=" space-y-3 py-3">
          <h3 className="text-lg text-gray-900 font-bold">Furniture</h3>
          <ul className="space-y-2">
            <li className="text-sm text-gray-700"><a href="#">Beds</a></li>
            <li className="text-sm text-gray-700"><a href="#">Sofa</a></li>
            <li className="text-sm text-gray-700"><a href="#">Almirah</a></li>
          </ul>
        </div>


        <div className=" space-y-3 py-3">
          <h3 className="text-lg text-gray-900 font-bold">Follow Us</h3>

          <ul className="space-y-2">
            <li className="text-sm text-gray-700">
              <a
              className='flex items-center gap-2 '
              href="">
              <svg 
              className='fill-gray-700'
              xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="25" viewBox="0 0 50 50">
    <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
</svg>
              Facebook
              </a></li>
            <li className="text-sm text-gray-700">
              <a href="#"
              
              className='flex gap-2 items-center'>
              <svg 
              className='fill-gray-700'
              xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="25" viewBox="0 0 50 50">
    <path d="M25,2C12.317,2,2,12.317,2,25s10.317,23,23,23s23-10.317,23-23S37.683,2,25,2z M36.237,20.524 c0.01,0.236,0.016,0.476,0.016,0.717C36.253,28.559,30.68,37,20.491,37c-3.128,0-6.041-0.917-8.491-2.489 c0.433,0.052,0.872,0.077,1.321,0.077c2.596,0,4.985-0.884,6.879-2.37c-2.424-0.044-4.468-1.649-5.175-3.847 c0.339,0.065,0.686,0.1,1.044,0.1c0.505,0,0.995-0.067,1.458-0.195c-2.532-0.511-4.441-2.747-4.441-5.432c0-0.024,0-0.047,0-0.07 c0.747,0.415,1.6,0.665,2.509,0.694c-1.488-0.995-2.464-2.689-2.464-4.611c0-1.015,0.272-1.966,0.749-2.786 c2.733,3.351,6.815,5.556,11.418,5.788c-0.095-0.406-0.145-0.828-0.145-1.262c0-3.059,2.48-5.539,5.54-5.539 c1.593,0,3.032,0.672,4.042,1.749c1.261-0.248,2.448-0.709,3.518-1.343c-0.413,1.292-1.292,2.378-2.437,3.064 c1.122-0.136,2.188-0.432,3.183-0.873C38.257,18.766,37.318,19.743,36.237,20.524z"></path>
</svg>
              Twitter
              </a></li>
            <li className="text-sm text-gray-700"><a
            className='flex items-center gap-2'
            href="">
              <svg
              className='fill-gray-700'
              xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="25" viewBox="0 0 50 50">
<path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
</svg>
              Instagram
              </a></li>
          </ul>
        </div>
      </div>

      {/* flex container  */}
      <div className="border-t border-t-neutral-900 mt-10 mb-4 pt-8 px-4  text-gray-700 flex justify-between max-w-6xl mx-auto">
        <p className="text-sm">Copyright &copy; 2025 Dacia</p>

        <div className="flex gap-10">
          <p className="text-sm">
            <a href="">
            Terms and Condition
            </a>
          </p>

          <p className="text-sm">
            <a href="">
            Privacy Policy
            </a>
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
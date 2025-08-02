import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Products from "./components/Products"
import Reviews from "./components/Reviews"
import Footer from "./components/Footer"
import heroImg from "./assets/hero-img.png"
import Experience from "./components/Experience"
import Materials from './components/Materials'
import DesktopWarning from "./components/DesktopWarning"

function App() {

  return (
    <>
    {/* mobile warning  */}
    <DesktopWarning/>

      <div className="hidden lg:block" >
    {/* body kinda div */}
      <div className="min-h-screen w-full">


        <div className= "bg-cover bg-center bg-no-repeat min-h-[1080px]"
        style={{backgroundImage: `url(${heroImg})` }}
        >
          <Navbar />
          <Hero/>
        </div>

        <section id="features">
          <Features/> 
        </section>
        
        <section id="products">
          <Products/> 
        </section>

        <section id="experience">
        <Experience/>
        </section>
        
        <section id="materials">
          <Materials/>
        </section>

        <section id="reviews">
          <Reviews/>
        </section>


        <Footer/>

      </div>

      </div>
    </>
  )
}

export default App

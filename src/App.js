import OwlCarousel from 'react-owl-carousel'
import React, { useState, useEffect } from 'react'
import axios from 'axios'




function App() {
  const settting = {
    stagePadding: 20,
    margin: -50,

    nav: true,
    dots: false,
    navText: [`<img src="./Icons/icon.png" alt="" style="margin-left:3px; transform:rotate(180deg)"/>`, `<img style="margin-left:3px" src="./Icons/icon.png" alt="" />`],
    responsive: {
      200: {
        items: 1,
        nav: false,
        margin: -320,
        stagePadding: 20,
      },

      1000: {
        items: 2,
        nav: true
      }
    }
  }

  const [testimonial, setTestimonial] = useState([])
  const [help, setHelp] = useState([])

  useEffect(() => {
    axios.get("https://wknd-take-home-challenge-api.herokuapp.com/testimonial").then((data) => {
      setTestimonial(data.data)
    })
  }, [])

  useEffect(() => {
    axios.get("https://wknd-take-home-challenge-api.herokuapp.com/help-tips").then((data) => {
      setHelp(data.data)
    })
  }, [])


  return (
    <>
      {/* Navbar */}
      <header className="text-gray-600 body-font bg-white relative">
        <div className="container mx-auto flex flex-wrap px-5 py-3  flex-col md:flex-row md:items-center">
          <div className="flex title-font font-medium items-center text-gray-900 ">
            <img src="./Bitmap(1).png" alt="" />
            <div className="flex flex-col">
              <span className="ml-3  text-xl">Good Morning</span>
              <span className="text-xl font-bold ml-3">Fellas</span>
            </div>
          </div>

        </div>
      </header>

      {/* Hero */}
      <section className='bg-herro pt-32  bg-primary md:h-110 h-screen -z-10 items-center  -mt-20 bg-center w-full bg-no-repeat bg-cover '>
        <h1 className='text-5xl font-bold  text-white  text-center  mt-10 top-0 mr-auto ml-auto left-0 right-0 '>WEEKEND FROM HOME</h1>
        <h1 className='text-lg font-medium  text-white  text-center  relative   '>Stay active with a little workout</h1>
        <img src="./Bitmap.png" className='w-40 h-72 mr-auto ml-auto mt-24 -z-10' alt="" />
        <h1 className='bg-white px-6 py-3 w-44 text-center rounded-2xl -mt-24  relative z-10 ml-auto mr-auto '>Let's Go</h1>
      </section>


      {/* Testimonial */}
      <section className='bg-primary   h-591'>
        <img src="./Group 4.png" className='float-right w-40 h-40 relative' alt="" />
        <div className="container px-5 mx-auto ">
          <div className='md:w-619 sm:w-full m-auto text-right pt-40'>
            <p className='text-black text-lg font-medium'><span className='text-second font-bold'>Deffinition; </span>a
              practice or exercise
              to test or improve one's fitness
              for athletic
              competition, ability, or
              performance
              to exhaust (something, such as a mine) by working to devise, arrange, or achieve by resolving
              difficulties.
              <br /> Merriam-Webster.com Dictionary.
            </p>
            <p className='mt-7 text-2xl font-semibold text-white'>-weekend team</p>
          </div>
          <img src="./Oval.svg" className="absolute md:mt-24 mt-2 -z-0 md:left-48 left-16 " alt="" />
          <div className="md:mt-36 mt-20 overflow-x-hidden ">
            <h1 className=' md:text-center sm:text-left text-3xl relative font-bold text-white'>Testimonial</h1>

            <div className="w-619 mr-auto   ml-auto md:mt-10 mt-5  ">
              <OwlCarousel className='owl-carousel owl-theme '
                {...settting}
              >
                {testimonial.map((data) => {
                  return (
                    <div className="bg-white h-32 w-60  px-3 py-2" key={data.id}>
                      <h1 className='font-bold text-2xl'>{data.by}</h1>
                      <h1 className='mt-2 text-sm font-normal '>{data.testimony}</h1>
                    </div>
                  )
                })}




              </OwlCarousel>
            </div>
          </div>
        </div>
      </section >

      {/* Main Content */}
      <section className='bg-black lg:h-1473  sm:h-2038 relative'>

        <div className="container px-5   mx-auto flex items-center flex-col">
          <div className='mt-16'>
            <h1 className="pt-32 md:text-center sm:text-left text-white font-bold text-3xl">POV</h1>
            <p className="md:text-center sm:text-left md:w-619 sm:w-full m-auto mt-2 text-white font-semibold text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
          </div>
          <div>
            <h1 className="pt-16 md:text-center sm:text-left text-white font-bold text-3xl">Resource</h1>
            <p className="md:text-center sm:text-left md:w-619 sm:w-full m-auto mt-2 text-white font-semibold text-lg">These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best</p>
          </div>


          <div className='mb-10'>
            <h1 className="px-5 mt-28 md:text-center sm:text-left text-white font-bold text-3xl">Help & Tips</h1>
            <img src="./Path 3.svg" className="right-20 absolute -z-0 md:visible invisible" alt="" />
            <div className="container gap-2  mx-auto w-full flex flex-wrap px-5">
              {help.map((data) => {
                return (
                  <div className=" w-80 h-40 my-3 relative " key={data.id}>
                    <img src={data.image} alt="" />
                    <div className="bg-black opacity-50  -mt-20 h-20 -z-0 "></div>
                    <div className="flex flex-wrap items-center -mt-20 z-10 relative p-3" >
                      <h1 className=" text-white font-bold text-lg "> {data.title}</h1>
                      <img src="./Icons/icon.png" className="bg-white px-1 py-2 right-2 absolute items-center ml-auto rounded-full w-6 h-6" alt="" />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className=" m-auto md:pt-28 sm:pt-0 sm:w-full sm:mb-32 md:w-619 sm:text-left">
            <p className=" md:text-center sm:text-left text-white font-bold text-3xl">You’re all set.</p>
            <h1 className=" mt-2 md:text-center sm:text-left text-white font-semibold md:text-lg sm:text-sm">The wise man therefore always holds in these matters to this principle of selection.</h1>
          </div>
        </div>
        <img src="./Group 3.png" className=" w-72 h-96 md:absolute md:mt-0 mt-20 relative  bottom-0 left-0 -z-0  " alt="" />
      </section>


      {/* Footer */}
      <footer className="text-gray-600 body-font w-full bg-secondary -mb-36  bottom-0 ">
        <div className="container px-5 py-6  flex items-center flex-wrap">
          <div className="flex title-font font-medium   text-gray-900">

            <span className="ml-3 text-xl text-white">wknd@2020</span>
          </div>


          <h1 className="ml-auto border border-white text-white rounded-full px-3 py 2">Alpha Version 0.1</h1>
        </div>
      </footer>


    </>
  );
}

export default App;

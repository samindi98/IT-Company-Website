import { Carousel } from 'flowbite-react'
import React from 'react'
import banner from '../assets/banner1.png'
import banner2 from '../assets/banner3.png'
import banner3 from '../assets/banner4.png'


const Home = () => {
  return (
    <div className='bg-neutralSilver' id='home'>
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen'>
        <Carousel className='w-full mx-auto'>
        <div className=" my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12 ">
          <div>
            <img src={banner} alt=''/>
          </div>

          {/*hero txt */}
          <div className='md:w-1/2'>
            <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>We Build Software That <span className='text-brandPrimary leading-snug'>You Love</span></h1>
            <p className='text-neutralGrey text-base mb-8'>where to grow your business as a photographer: site or social media?</p>
            <button className='btn-primary'>Contact</button>
          </div>

        </div>
        <div className=" my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12 ">
          <div>
            <img src={banner2} alt=''/>
          </div>

          {/*hero txt */}
          <div className='md:w-1/2'>
            <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>We are builiding <span className='text-brandPrimary leading-snug'>Software</span>To help</h1>
            <p className='text-neutralGrey text-base mb-8'>where to grow your business as a photographer: site or social media?</p>
            <button className='btn-primary'>Contact</button>
          </div>

        </div>
        <div className=" my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12 ">
          <div>
            <img src={banner3} alt=''/>
          </div>

          {/*hero txt */}
          <div className='md:w-1/2'>
            <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>Choose a powerful design for your <span className='text-brandPrimary leading-snug'>start-up</span></h1>
            <p className='text-neutralGrey text-base mb-8'>where to grow your business as a photographer: site or social media?</p>
            <button className='btn-primary'>Contact</button>
          </div>

        </div>
      </Carousel>
        </div>
      
    </div>
  )
}

export default Home


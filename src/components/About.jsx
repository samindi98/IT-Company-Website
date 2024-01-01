import React from 'react'
import aboutImg from '../assets/banner2.png'

const About = () => {
  return (
    <div>
      {/*about  text */}
      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8' id='about'>
        <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
            <div>
                <img src={aboutImg} alt='' className='h-80 w-80'/>
            </div>
            <div className='md:w-3/5 mx-auto'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>Who we are?</h2>
                <p className='md:w-3/4 text-sm text-neutralDGrey mb-8'>Welcome to being ahead of what’s next! NEXTGEN has always stood for purpose-driven technology solutions for businesses across the globe. We offer agile, adaptive and rapidly evolving Enterprise Technology Solutions that anticipate and solve both current and future business challenges. We deliver results that accelerate and optimize every aspect of your business, and our solutions can be tailored to your organization’s individual needs. </p>
                <button className='btn-primary'>Learn more</button>
            </div>
        </div>

        {/*company sats */}
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16 mt-10'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                <div className='md:w-1/2'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>Helping a local<br/><span className='text-brandPrimary'>business reinvent itself</span></h2>
                <p>We reached here with our hard work and dedication </p>
                </div>
            

            {/*starts */}
            <div className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12'>
                <div className='space-y-8'>
                    <div className='flex items-center gap-4'>
                        <img src='/src/assets/s1.png' alt=''/>
                        <div>
                            <h4 className='text-2xl text-neutralDGrey font-semibold'>2,256,258</h4>
                            <p>PROFESSIONALS</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <img src='/src/assets/s2.png' alt=''/>
                        <div>
                            <h4 className='text-2xl text-neutralDGrey font-semibold'>56,258</h4>
                            <p>PROJECTS DONE</p>
                        </div>
                    </div>
                    
                </div>
                <div className='space-y-8'>
                    <div className='flex items-center gap-4'>
                        <img src='/src/assets/s3.png' alt=''/>
                        <div>
                            <h4 className='text-2xl text-neutralDGrey font-semibold'>256,258</h4>
                            <p>HAPPY CLIENTS</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <img src='/src/assets/s4.png' alt=''/>
                        <div>
                            <h4 className='text-2xl text-neutralDGrey font-semibold'>6,258</h4>
                            <p>COUNTRIES</p>
                        </div>
                    </div>
                    
                </div>

             </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default About

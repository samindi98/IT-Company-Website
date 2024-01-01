import React from 'react'
import aboutImg from '../assets/banner5.png'
import productImg from '../assets/prod.png'

const Products = () => {
  return (
    <div className='mt-10'>
      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8' id='product'>
        <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12  mb-10'>
            <div>
                <img src={aboutImg} alt='' className='w-100 h-60'/>
            </div>
            <div className='md:w-3/5 mx-auto'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>NEXTGEN Product</h2>
                <p className='md:w-3/4 text-sm text-neutralDGrey mb-8'>Partnering with us allows you to embark on a journey of reimagination, enabling you to redefine your success story in the future. Our satisfied customers from various industries have already chosen us as their trusted partner, and you can join their league. </p>
                <button className='btn-primary'>Learn more</button>
            </div>
        </div>

        {/*company stats */}
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16' id='testimonial '>
            <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                <div className='md:w-1/3'>
                <img src={productImg} alt='' className='w-80 h-80'/>
                </div>
            

            {/*starts */}
            <div className='md:w-2/3 mx-auto'>
                <div>
                    <p className='md:w-4/5 text-sm text-neutralDGrey mb-8 leading-7'>NEXTGEN consistently deliver to us a high quality result from both our development and support tasks. We have had a long term relationship and found that the staff are able to enhance our own skills and to communicate to us the effectiveness of facets of our development tasks, as well as identifying areas where the task needs to strengthened.</p>
                    <h4 className='text-brandPrimary text-xl font-semibold mb-2'>Tim smith</h4>
                    <p className='text-base text-neutralDGrey mb-8'>IT HAS BEEN AN EXCITING JOURNEY WITH</p>
                    <div>
                        <div className='flex items-center gap-8 flex-wrap'>
                        <img src='/src/assets/icon1.png' alt='' className='cursor-pointer w-15 h-15'/>
                        <img src='/src/assets/icon2.png' alt='' className='cursor-pointer w-15 h-15'/>
                        <img src='/src/assets/icon3.png' alt='' className='cursor-pointer w-15 h-15'/>
                        <img src='/src/assets/icon4.png' alt=''className='cursor-pointer w-15 h-15'/>
                        <img src='/src/assets/icon5.png' alt='' className='cursor-pointer w-15 h-15'/>
                        <img src='/src/assets/icon6.png' alt='' className='cursor-pointer w-15 h-15'/>
                        <img src='/src/assets/icon7.png' alt='' className='cursor-pointer w-15 h-15'/>
                        <div >
                            <a href='/' className='font-bold text-brandPrimary hover:text-neutral-700 underline'>Meet all customers</a>
                        </div>
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

export default Products

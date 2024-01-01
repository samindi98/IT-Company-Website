import React from 'react'

const Service = () => {
    const service =[
        {id: 1, title: "Software Development", description: "Building great software backed by modern technology.", image: "/src/assets/m1.png"},
        {id: 2, title: "UI/UX Design", description: "Designing great UX so that your digital products will be adored by users.", image: "/src/assets/m2.png"},
        {id: 3, title: "Data Anlytics", description: "ODo you own a lot of data? Derive output from your insights and optimize your business.", image: "/src/assets/m3.png"}
    ]


  return (
    <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto ' id='service'>
      <div className='text-center my-8'>
        <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>Our Clients</h2>
        <p className='text-neutralDGrey'>We have been working with some fortune 500+ clients</p>

        {/*company logo */}
        <div className='my-12 flex flex-wrap justify-between items-center gap-8'>
            <img src='/src/assets/icon1.png' alt=''/>
            <img src='/src/assets/icon2.png' alt=''/>
            <img src='/src/assets/icon3.png' alt=''/>
            <img src='/src/assets/icon4.png' alt=''/>
            <img src='/src/assets/icon5.png' alt=''/>
            <img src='/src/assets/icon6.png' alt=''/>
            <img src='/src/assets/icon7.png' alt=''/>
        </div>
      </div>

      {/*service card */}
      <div className='mt-20 md:w-1/2 mx-auto text-center'>
      <h2 className='text-4xl text-neutralDGrey font-semibold mb-3'>LET'S MAKE SOMETHING AWESOME TOGETHER</h2>
        <p className='text-neutralDGrey'>Who is NEXTGEN suitable for?</p>
      </div>

      {/*cards */}
      <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12'>
        {
            service.map(service => <div key={service.id} className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300  items-center justify-center h-full'>
                <div className='bg-[#E8F5E9] mb-4 h-12 w-12 mx-auto rounded-tl-3xl rounded-br-3xl'>
                    <img src={service.image} alt="" className='-ml-5'/>
                    </div>
                <h4 className='text-2xl font-bold text-neutralDGrey mb-2 px-2'>{service.title}</h4>
                <p className='text-sm text-neutralDGrey'>{service.description}</p>
            </div>)
        }
      </div>
    </div>
  )
}

export default Service

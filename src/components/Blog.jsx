import React from 'react'

const Blog = () => {
    const blogs = [
        {id:1, title: "Building Embeddable Apps with Web Components", image: "/src/assets/banner8.jpg"},
        {id:2, title: "Testing Narrowband IoT Deployments", image: "/src/assets/banner8.jpg"},
        {id:3, title: "Saving Treasures in Drowning Flash", image: "/src/assets/banner8.jpg"}
    ]
  return (
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-12' id='faq'>
      <div className='text-center md:w-1/2 mx-auto'>
      <h2 className='text-4xl text-neutralDGrey font-semibold mb-4'>NEXTGEN Blog</h2>
        <p className='text-sm text-neutralDGrey mb-8 md:w-3/4 mx-auto'>Read our tech related articles and blog posts.</p>
      </div>

      {/*all blogs */}
      <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between'>
        {
            blogs.map(blog => <div key={blog.id} className='mx-auto relative mb-12 cursor-pointer'>
                <img src={blog.image} alt=''className='hover:scale-95 transition-all duration-300 '/>
                <div className='text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12'>
                    <h3 className='mb-3 text-neutralDGrey font-semibold'>{blog.title}</h3>
                    <div className='justify-center' >
                            <a href='/' className='font-bold text-brandPrimary hover:text-neutral-700 underline'>Read More</a>
                        </div>
                </div>
            </div>)
        }
      </div>
    </div>
  )
}

export default Blog

import React from 'react'
import Header from '../components/aboutus/header'
import dev1 from '../styles/assets/about/dev1.jpeg'
import dev2 from '../styles/assets/about/dev2.jpeg'

function AboutUs() {
  return (
    <div className='bg-dashboard bg-right bg-no-repeat bg-cover bg-fixed 
    w-screen h-screen justify-center align-middle'>
        <Header />
        <div className='w-11/12 mx-auto mt-32 md:-mt-12 flex-col lg:flex-row lg:flex lg:space-x-12'>
            <div className='lg:w-10/12 my-auto'>
                <div className='text-gray-600 mx-10 md:mx-0 font-poppins opacity-40 font-bold text-[80px] md:text-[150px]'>TEAM</div>
                <div className='mx-10 md:mx-0 -mt-5 '>
                    <h2 className='font-playfair text-xl md:text-3xl text-orange-500 pb-6'>Dedicated team for your dedicated goals.</h2>
                    <p className='text-lg md:text-xl pb-2 md:pb-4 text-gray-800'>Goalie is created by a team consisting of two passionate developers who both bring 
                        different set of backgrounds and expertise.</p>
                    <p className='text-lg md:text-xl text-gray-800'>Reason behind creating goalie was to help users achieve their goals in a most friendly and 
                    decluttered way. Goalie has tried to create a community based approach to complete goals. Having a community of like minded
                    people sharing their goals has always proven to be helpful in creating accountability and responsibility towards fullfiling goals.</p>
                    <div className='lg:hidden mt-5'>
                        <h1 className='text-lg md:text-xl pb-2 md:pb-2 text-gray-400'>Our devs:</h1>
                        <div className='flex space-x-10 ml-10 md:ml-20'>
                            <div className='text-center'>
                                <h1 className='font-playfair text-xl md:text-3xl text-orange-500'>Ashirwad Shetye</h1>
                                <p className='text-lg md:text-xl text-gray-800'>Web Developer</p>
                            </div>
                            <div className='text-center'>
                                <h1 className='font-playfair text-xl md:text-3xl text-orange-500'>Dilip Joshi</h1>
                                <p className='text-lg md:text-xl text-gray-800'>Web Developer</p>
                            </div>
                        </div>
                    </div>
                </div>
                <form action="submit" className='mt-10 md:mt-8 lg:mt-5 ml-10 flex space-x-10'>
                        <input 
                            type="text"
                            maxLength={280}
                            placeholder='Enter your feedback here'
                            className='rounded-full resize-none border-orange-500 border-2 focus:ring-0
                            placeholder:text-gray-500 placeholder:text-center w-[250px]' />                    
                        <button 
                            type='submit'
                            className='text-xl my-auto font-lato bg-orange-500 
                            text-white font-bold py-2 px-4 rounded-full hover:bg-transparent 
                            hover:text-orange-500 border-orange-500 duration-200 border-2 hover:shadow-none'>Submit</button>
                </form>
            </div>
            <div className='hidden w-11/12 lg:flex mx-auto lg:space-x-28'>
                <div className='text-center mx-5 my-auto'>
                    <img 
                        className='w-36 lg:w-[240px] lg:mt-56 '
                        src={dev1} alt="developer 1" />
                    <h1 className='text-lg md:text-xl font-semibold'>Ashirwad Shetye</h1>
                    <p className='text-sm md:text-lg font-lato '>Web developer</p>
                </div>
                <div className='text-center mx-5 my-auto'>
                    <img 
                        className='w-36 lg:w-[230px] '
                        src={dev2} alt="developer 2" />
                    <h1 className='text-lg md:text-xl font-semibold'>Dilip Joshi</h1>
                    <p className='text-sm md:text-lg font-lato '>Web developer</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs
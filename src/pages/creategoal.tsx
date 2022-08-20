import React from 'react'
import Header from '../components/creategoal/header'

function CreateGoal() {
  return (
    <div className='bg-dashboard bg-right bg-no-repeat bg-cover bg-fixed 
    w-screen h-screen'>
        <Header />
        <div>
            <div className='mx-12 text-center md:text-left md:ml-28 mt-40 md:mt-10 md:w-3/5 lg:w-2/5'>
                <div
                className='text-3xl font-lato font-semibold text-orange-500 my-6'
                >Let's get started with your goal</div>
                <form 
                className='container flex flex-col md:pl-10'
                action="text">
                        <label className='text-xl my-4 font-lato font-semibold'>I commit to</label>
                        <input
                        className='bg-white bg-opacity-30 mx-auto md:mx-0 mb-2 w-10/12 border-2 text-center border-orange-500 rounded-xl'
                        type="text" name="goal" />
                        <label className='text-xl my-4 font-lato font-semibold'>I want to complete this goal by</label>
                        <input
                        className='bg-white bg-opacity-30 mx-auto md:mx-0  mb-2 w-10/12 border-2 text-center border-orange-500 rounded-xl'
                        type="date" name="date" />
                        <label className='text-xl my-4 font-lato font-semibold'>Describe your goal</label>
                        <textarea
                        className='bg-white bg-opacity-30 mx-auto md:mx-0 mb-2 w-10/12 border-2 text-center border-orange-500 rounded-xl'
                        name="description"></textarea>
                        <label className='text-xl my-4 font-lato font-semibold'>Remind me</label>
                        <div className='container text-center mx-auto md:mx-0  w-10/12 justify-evenly space-x-6 md:space-x-6'>
                            <button className='text-xl h-10 hover:text-white hover:bg-orange-500 duration-200 border-orange-500 rounded-xl border-2 w-24'>Daily</button>
                            <button className='text-xl h-10 hover:text-white hover:bg-orange-500 duration-200 border-orange-500 rounded-xl border-2 w-24'>Weekly</button>
                            <button className='text-xl h-10 hover:text-white hover:bg-orange-500 duration-200 border-orange-500 rounded-xl border-2 w-24'>Monthly</button>
                        </div>
                        <button
                            className='text-xl mx-auto mt-12 font-lato bg-orange-500 
                                text-white w-32 font-bold py-1.5 px-4 rounded-2xl hover:bg-transparent 
                                hover:text-orange-500 duration-200 border-orange-500 border-2 hover:shadow-none'
                        >Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default CreateGoal
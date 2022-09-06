import React from 'react'
import { useRef, useState } from 'react';
import Header from '../components/creategoal/header'
import { toast } from 'react-toastify'
import { setGoal } from './../services/serverCalls'
function CreateGoal() {

    const [formData, setFormData] = useState({
        goal: '',
        date: '',
        description: '',
        remaind: '',
    })

    const textRef = useRef<any>();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        console.log(e.target.name)
        console.log(e.target.value)

        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onRemaindChange = (e: any) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    const onChangeHandler = function(e: React.SyntheticEvent<EventTarget>) {

     const target = e.target as HTMLTextAreaElement;
     textRef.current.style.height = "40px";
     textRef.current.style.height = `${target.scrollHeight}px`;
     setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.value
    }))    };


    const onSubmit = (e: React.SyntheticEvent) =>{

        e.preventDefault()
        setGoal({text:formData.goal, lastDate: new Date(formData.date), description: formData.description, remaindInDays: formData.remaind})

            // } else {
        //     const userData = {
        //     name,
        //     email,
        //     password,
        //     }
        //     register(userData)

            // dispatch(register(userData))
        
    }

  return (
    <div className='bg-dashboard bg-right bg-no-repeat bg-cover bg-fixed 
    w-screen h-screen'>
        <Header />
        <div className='mx-12 text-center md:text-left md:ml-28 mt-40 md:mt-10 md:w-3/5 lg:w-2/5'>
            <div
            className='text-3xl font-poppins text-orange-500 my-6'
            >Let's get started with your goal</div>
            <form onSubmit={onSubmit}
            className='container flex flex-col md:pl-10'>
                    <label className='text-xl text-gray-600 my-4 font-lato font-semibold'>I commit to</label>
                    <input
                        className='bg-white bg-opacity-30 mx-auto md:mx-0 mb-2 w-10/12 border-2 text-center 
                            border-orange-500 rounded-xl'
                        type="text" 
                        name="goal"
                        maxLength={50}
                        onChange={onChange}
                        placeholder='Enter a goal' />
                    <label className='text-xl text-gray-600 my-4 font-lato font-semibold'>I want to complete this goal by</label>
                    <input
                        className='bg-white bg-opacity-30 mx-auto md:mx-0  mb-2 w-10/12 border-2 text-center 
                            border-orange-500 rounded-xl'
                        type="date" 
                        onChange={onChange}

                        name="date" />
                    <label className='text-xl text-gray-600 my-4 font-lato font-semibold'>Describe your goal</label>
                    <textarea
                        className='bg-white bg-opacity-30 mx-auto md:mx-0 mb-2 w-10/12 border-2 text-center 
                            border-orange-500 rounded-xl scrollbar-hide resize-none'
                        name="description"
                        ref={textRef}
                        onChange={onChangeHandler}
                        placeholder='describe your goal'
                        maxLength={280}></textarea>
                    <label className='text-xl text-gray-600  my-4 font-lato font-semibold'>Remind me</label>
                    <div className='container text-center mx-auto md:mx-0  w-10/12 justify-evenly space-x-6 md:space-x-6'>
                        <button type="button" value={1} onClick={onRemaindChange} name="remaind" className='text-xl h-10 hover:text-white hover:bg-orange-500 duration-200 
                            border-orange-500 rounded-xl border-2 w-24'>Daily</button>
                        <button type="button" value={7} onClick={onRemaindChange} name="remaind" className='text-xl h-10 hover:text-white hover:bg-orange-500 duration-200 
                            border-orange-500 rounded-xl border-2 w-24'>Weekly</button>
                        <button type="button" value={30} onClick={onRemaindChange} name="remaind" className='text-xl h-10 hover:text-white hover:bg-orange-500 duration-200 
                            border-orange-500 rounded-xl border-2 w-24'>Monthly</button>
                    </div>
                    <button type="submit"
                        className='text-xl mx-auto mt-12 font-lato bg-orange-500 
                            text-white w-32 font-bold py-1.5 px-4 rounded-2xl hover:bg-transparent 
                            hover:text-orange-500 duration-200 border-orange-500 border-2 hover:shadow-none'
                    >Submit</button>
            </form>
        </div>
    </div>
  )
}

export default CreateGoal
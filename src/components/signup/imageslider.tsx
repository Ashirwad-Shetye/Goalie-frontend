import React from 'react'
import {useState} from 'react'
import {SliderData} from './sliderdata';
import { AiOutlineRight, AiOutlineLeft} from 'react-icons/ai'


function ImageSlider({slides} : any) {

    const [ current, setCurrent ] = useState(0);

    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

  return (
    <section className='w-48 h-28 mx-auto justify-center align-middle'>

        <div className='absolute h-10 mt-10 w-48 flex items-center justify-center space-x-32'>
            <AiOutlineLeft 
                onClick={prevSlide}
                className='z-10 cursor-pointer text-3xl text-slate-700 select-none hover:text-orange-500
                    hover:scale-110 duration-150'
            />

            <AiOutlineRight 
                onClick={nextSlide}
                className='z-10 cursor-pointer text-3xl text-slate-700 select-none hover:text-orange-500
                    hover:scale-110 duration-150'
            />
        </div>

        {SliderData.map((slide, index) => {
            return (
                <div className={index === current ? 'opacity-100 duration-1000 scale-105':'opacity-0 duration-1000'}
                    key={index}>
                    {index === current && (
                        <img 
                            src={slide.image} 
                            alt="avatar slider"
                            className='w-28 h-28 rounded-full mx-auto' 
                        />
                    )}
                    
                </div>
            )
        })}


    </section>
  )
}

export default ImageSlider
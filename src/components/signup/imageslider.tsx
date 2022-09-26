import React from 'react'
import {useState} from 'react'
import {SliderData} from './sliderdata';
import { AiOutlineRight, AiOutlineLeft} from 'react-icons/ai'


function ImageSlider({slides} : any) {

    const [ current, setCurrent ] = useState<any>();

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
    <section className='container w-40 h-28 mx-auto justify-center align-middle flex bg-red-200'>

        <AiOutlineLeft 
            onClick={prevSlide}
            className='absolute z-10 mr-36 mt-10 cursor-pointer text-3xl text-slate-700 select-none'
        />

        {SliderData.map((slide, index) => {
            return (
                <div 
                    className={index === current ? 'opacity-100 duration-1000 scale-105':'opacity-0 duration-1000'}
                    key={index}
                >
                    {index === current && (
                        <img 
                        src={slide.image} 
                        alt="avatar slider"
                        className='w-28 h-28 rounded-full' 
                        />
                    )}
                    
                </div>
                )
        })}

        <AiOutlineRight 
            onClick={nextSlide}
            className='absolute z-10 ml-36 mt-10 cursor-pointer text-3xl text-slate-700 select-none'
        />

    </section>
  )
}

export default ImageSlider
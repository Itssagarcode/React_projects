import React, { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'

const Slider = () => {
    const [slider, setSlider] = useState(0)
    const data = [img1, img2, img3]

    const handlePlus = () => {
        setSlider(slider === data.length - 1 ? 0 : slider + 1)
    }

    const handleMinus = () => {
        setSlider(slider === 0 ? data.length - 1 : slider - 1)
    }

    useEffect(() => {
        const autoSlider = setInterval(() => {
            handlePlus()
        }, 2000)
        return () => clearInterval(autoSlider)
    }, [slider])

    return (
        <div className='w-full h-screen slider'>
            {data.map((img, i) => (
                <div className={`bg-aquamarine w-full h-5/6 mt-20 relative ${slider === i ? "block" : "hidden"}`} key={i}>
                    <img src={img} alt="" className="w-full h-5/6" />

                    <div className='absolute bottom-10 left-0 right-0 flex justify-center'>
                        <button onClick={handleMinus}><FaChevronLeft /></button>
                        <button onClick={handlePlus}><FaChevronRight /></button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Slider

import Typed from 'typed.js';
import { useEffect, useRef } from 'react';
import {AiOutlineArrowDown} from 'react-icons/ai'

export default function Introduction() {
    const el = useRef();

    useEffect(() =>{
        const typed = new Typed(el.current, {
            strings: ["developing Scalable software.", "designing amazing Websites.", "Generating value from data."],

            startDelay: 1000,
            typeSpeed: 150,
            backSpeed: 100,
            backDelay: 100,
            smartBackspace:true,
            loop: true
        });
        return () => {
            typed.destroy();
        };
    }, []);
  return (
    <>
    <div className='flex justify-start items-center  ml-0 md:ml-20 mb-12 md:mb-0 '>
      <span className=' text-md  font-semibold  md:text-l  md:font-md text-white ml-5 md:ml-10'>I Love </span>
      <span ref={el} className='text-[#FF9800] font:semibold  text:xl md:font-semibold sm:text-2xl md:text-2xl ml-2 '></span>
    </div>
    <div className='flex justify-center  '>
      <p className='animate-bounce   rounded-full bg-white fixed'>
        < AiOutlineArrowDown className='text-xl text-red-600 font-bold h-6 w-6'/>
      </p>
    </div>
    </>
  
  )
}

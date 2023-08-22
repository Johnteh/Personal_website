import React from 'react';
import Navbar from '../components/Navbar';
import Particle from './Particle';
import profile from "/home/vagrant/PORTFOLIO/Personal_website/portfolio/src/assets/profile.jpg";
import {FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import {AiFillGithub} from "react-icons/ai";
import Introduction from './Introduction';


export default function Header() {
  return (
    <header className='bg-[rgb(10,10,25)] top-0 left-0 w-[100%] h-[100%] absolute z-1'>
      <div className='relative w-[100%] '>
        <Particle className="z-0 "/>

      </div>
      
     
      
      <Navbar className=""/>
      
      <div className='flex justify-around items-center mb-20 sm:mb-14 md:mb-8'>

        <div className='space-y-3  text-md md:text-2xl text-blue-700 shadow-2xl'>
         <p className='rounded-full border-2 border-gray-700 p-1  cursor-pointer'> <AiFillGithub className="hover:text-blue-400" />
         </p>
         <p  className='rounded-full border-2 border-gray-700 p-1 cursor-pointer'>
          <FaTwitter className="hover:text-blue-400" />
          </p>
          <p className='rounded-full border-2 border-gray-700 p-1 cursor-pointer'>
          <FaLinkedin className="hover:text-blue-400" />
          </p>
          <p className='rounded-full border-2 border-gray-700 p-1 cursor-pointer'>
          <FaInstagram className="hover:text-blue-400" />
          </p>
        </div>
        


        <div>
          <div className=" mt-10 mb-6  rounded-full overflow-hidden flex justify-center items-center">
            <img src={profile} className="h-[180px] w-[180px] sm:h-[250px] sm:w-[250px] md:h-[300px] md:w-[300px] grayscale-0 
            hue-rotate-15 hover:hue-rotate-90 transition ease-in-out duration-500" alt="logo" />
          </div>
          <div className='flex justify-center items-center '>
            <span className='text-white text:md sm:text-l md:text-xl mr-3 font-semibold'>I am </span>
            <p className='text-[#f726a3] text:2xl sm:text-2xl md:text-4xl uppercase font-bold'>John Miiri</p>
          </div>
        </div>


          
        <div className='grid space-y-4'>
          <button className=' text-white font-medium sm:font-semibold md:font-semibold py-1  px-2 md:py-2 md:px-4 rounded-full
          bg-gradient-to-r from-green-400 to-blue-500
          hover:from-pink-500 hover:to-yellow-500'>Resume</button>
          <button className=' text-white font-medium sm:font-semibold md:font-semibold py-1  px-1 md:py-2 md:px-4 rounded-full
          bg-gradient-to-r from-blue-400 to-green-500
          hover:from-yellow-500 hover:to-pink-500'>Contact</button>
        </div>

      </div>

      <Introduction className=" bg-white"/>
      
     
          

       
       
    </header>
     
      
        
          
       
        
        
          

          
         
          
          


   
        
        
        
          

        
          
        
        
        
   
  )
}

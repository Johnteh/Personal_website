import React, { useState } from 'react';
import logo from "/home/vagrant/PORTFOLIO/Personal_website/portfolio/src/assets/logo.png";
import { FaBars } from "react-icons/fa";
import profile from "/home/vagrant/PORTFOLIO/Personal_website/portfolio/src/assets/profile.jpg";

export default function Navbar() {
  const Links = [
    { name: "home", link: "/" },
    { name: "about", link: "/" },
    { name: "portfolio", link: "/" },
    { name: "skills", link: "/" },
    { name: "contact", link: "/" },

  ];
  const [open, setOpen] = useState(false);
  console.log(open);
 
  return (
    <div className="bg-transparent shadow-sm sticky top-0 z-40">
      <div className='flex justify-between items-center lg:items-center max-w-3xl  px-3  mx-auto sm:items-start  sm:justify-betweem'>
        <div className='mt-3 '>
          <img src={logo} className="rounded-full h-[100px] cursor-pointer" alt="logo" />

        </div>
        <>
          <ul className=" hidden md:flex md:space-x-8  lg:flex lg:space-x-10 ">
            {Links.map((link) => (
              <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7 uppercase font-semibold hover:border-b-red-500'>
                <a href={link.link} className='text-[#ffffff] hover:text-[#ffffff]-400 hover:shadow-lg transition ease-in-out duration-500'>{link.name}</a>
              </li>

            ))}

          </ul>
        </>
        
        
        <div className='mr-20 sm:mt-6 relative lg:mr-0 md:mr-0'>
          <div>
            <button
                onClick={() => setOpen(!open)} className='text-3xl   cursor-pointer md:hidden lg:hidden'>
                <p className='bg-[#FF9800] hover:shadow-lg transition-ease-in-out cursor-pointer'>
                  <FaBars className='text-2xl font-semibold rounded-full ' />
                </p>
            </button>

          </div>
          
          <div className='absolute'>
            {open && (
              <ul className="md:hidden lg:hidden  ">
                {Links.map((link) => (
                  <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7 uppercase font-semibold hover:border-b-red-500'>
                    <a href={link.link} className='text-[#ffffff] hover:text-[#ffffff]-400 hover:shadow-lg transition ease-in-out duration-500'>{link.name}</a>
                  </li>

                ))}
                
              </ul>
            )}

          </div>
          
                    

          
          
          

        </div>
        
        

        
        
      </div>
      <div className="object-center">
            <img src={profile} className="rounded-full h-[300px] cursor-pointer" alt="logo" />
        </div>
    </div>




    












        


      )
}

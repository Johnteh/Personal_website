import React, { useState } from 'react';
import logo from "/home/vagrant/PORTFOLIO/Personal_website/portfolio/src/assets/logo.png";
import { FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";


export default function Navbar() {
  const Links = [
    { name: "home", link: "/" },
    { name: "about", link: "/" },
    { name: "portfolio", link: "/" },
    { name: "skills", link: "/" },
   
  ];
  const [open, setOpen] = useState(false);
  console.log(open);
 
  return (
    <>
      <div className=' top-0 z-50  bg-gradient-to-r  to-indigo-500 from-[rgb(10,10,25)]    sticky'>
        <div className='flex justify-between  items-center md:flex  md:justify-between md:items-center lg:justify-between lg:items-center max-w-3xl mx-auto '>
          <div className='mt-3 ml-4 rounded-full overflow-hidden  '>
            <img src={logo} className=" h-[100px] w-[100px] cursor-pointer" alt="logo" />

          </div>
          <>
            <ul className=" hidden md:flex md:space-x-6  lg:flex lg:space-x-8 xl:space-x-10 ">
              {Links.map((link) => (
                <li key={link.name} className='text-xl  uppercase font-semibold text-white 
                border-b-4 border-red-700 hover:text-[#c026d3] hover:font-semibold transition ease-in-out duration-500'>
                  <a href={link.link} className=''>{link.name}</a>
                </li>

              ))}

            </ul>
          </>
          <div  className='mr-10'>
              <button
                  onClick={() => setOpen(!open)} className='cursor-pointer md:hidden lg:hidden'>
                  <>
                  {!open ?
                    <FaBars className='text-3xl text-[#FF9800] font-semibold rounded-2xl ' />
                    :
                    <MdOutlineClose className='text-3xl text-[#FF9800]'/>
                  }
                  </>

                  
              </button>

          </div>
         
          {open && (
            <ul className="md:hidden lg:hidden border-l  border-[#FF9800] duration-500 transition ease-in-out  bg-gradient-to-r from-[rgb(10,10,25)]- to-indigo-500 fixed top-[110px] right-20 ">
              {Links.map((link) => (
                <li key={link.name} className='text-xl uppercase font-semibold text-white hover:text-[#c026d3] transition ease-in-out duration-500
                m-3 border-b-4 border-red-600 '>
                  <a href={link.link} className=''>{link.name}</a>
                </li>

              ))}
              
            </ul>
          )}

        
          
          
          
            
            
            
        </div>
      </div>
      
    </>
  
          
                    

          
          
          

        
        
        

        
        
      
     




    












        


      )
}

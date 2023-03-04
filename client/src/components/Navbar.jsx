import React, {useState} from 'react';
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import If, {Else} from "if-else-react";

import logo from "../assets/logo.png";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className='flex items-center md:justify-evenly justify-between p-4'>
      <div>
        <img src={logo} alt="logo" className='w-32' />
      </div>

      <div className='md:flex items-center justify-between hidden'>
        <p className='text-white text-base mx-4'>Market</p>
        <p className='text-white text-base mx-4'>Exchange</p>
        <p className='text-white text-base mx-4'>Tutorials</p>
        <p className='text-white text-base mx-4'>Wallets</p>
        <button className='flex bg-[#2952e3] rounded-full mx-2'>
          <p className='text-white text-base py-2 px-7'>Login</p>
        </button>

      </div>
        
        <div className='flex flex-col items-end'>

        <If condition={toggle}>
          <AiOutlineClose 
          onClick={()=>setToggle(false)} 
          className='text-white md:hidden' 
          fontSize={30}/>

        <Else/>
           <HiMenuAlt4 onClick={()=>setToggle(true)}
           className='text-white md:hidden'
           fontSize={30}/>
        </If>

        <If condition={toggle}>

          <div className='flex flex-col gap-4 bg h-screen fixed top-0 right-0 blue-glassmorphism w-[70vw] transition duration-500 ease-in-out shadow-2xl p-5 md:hidden animate-slide-in rounded-md'>
          <AiOutlineClose 
          onClick={()=>setToggle(false)} 
          className='text-white md:hidden' 
          fontSize={21}/>
            <p className='text-white text-lg text-right'>Market</p>
            <p className='text-white text-lg text-right'>Exchange</p>
            <p className='text-white text-lg text-right'>Tutorials</p>
            <p className='text-white text-lg text-right'>Wallets</p>
          </div>  
        </If>

        </div>
    </div>
  )
}

export default Navbar;
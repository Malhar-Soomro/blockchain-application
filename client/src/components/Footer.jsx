import React from 'react'
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className='flex flex-col gradient-bg-footer p-10'>
      <div className='flex justify-evenly  items-center'>
        <img className='w-32' src={logo} alt="" />
        <div className='flex justify-between w-full flex-[0.5]'>
          {["Market", "Exchange", "Tutorial", "Wallets"].map((item,index) => (
            <li className='text-white list-none' key={index}>{item}</li>
          ))}
        </div>
      </div>
      <div className='flex flex-col items-center mt-8'>
        <p className='text-white text-sm'>Come join us</p>
        <p className='text-white text-sm'>malharsoomro2@gmail.com</p>
        <div className='bg-gray-500 h-[1px] w-[90%] mt-4'/>
        <div className='flex justify-between w-[90%] mt-3'>
        <p className='text-white text-sm'>@TransferKrypt2023</p>
        <p className='text-white text-sm'>All rights reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;
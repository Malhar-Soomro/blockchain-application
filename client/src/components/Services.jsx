import React from 'react';
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi"; 
import { RiHeart2Fill } from "react-icons/ri";

const ServiceCard = ({icon, color, title}) => (
  <div className='flex justify-between items-center mf:p-4 px-2 py-4 white-glassmorphism rounded-xl gap-4 my-2'>  
    <div className={`flex justify-center items-center ${color} rounded-full w-10 h-10`}>
      {icon}
    </div>

    <div className='flex flex-col items-start flex-1'>
      <h1 className='text-white text-lg'>{title}</h1>
      <p  className='text-white mt-2 mf:w-9/12 sm:w-11/12 w-full text-sm'>Security is guaranteed. We always maintain privacy and maintain the quality of our product.</p>
    </div>
</div>
);

const Services = () => {
  return (
    <div className='flex mf:flex-row flex-col gradient-bg-services justify-around items-center px-4 xl:p-0'>
      <div className='flex justify-center items-center'>
        <h1 className='text-gradient text-white text-3xl sm:text-5xl'>
        Services that we 
        <br />
        continue to improve</h1>
      </div>

      <div className='flex flex-col mt-14 mf:mt-0'>
        <ServiceCard
          icon={<BsShieldFillCheck className='text-white' fontSize={21}/>}
          color="bg-[#2952E3]"
          title="Security Guaranteed"
        />
        <ServiceCard
          icon={<BiSearchAlt className='text-white' fontSize={21}/>}
          color="bg-[#8945F8]"
          title="Best exchange rates"
        />
        <ServiceCard
          icon={<RiHeart2Fill className='text-white' fontSize={21}/>}
          color="bg-[#F84550]"
          title="Fastest transactions"
        />
      </div>

    </div>
  )
}

export default Services;
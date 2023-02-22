import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const ServiceCard = ({color, icon, title, subtitle}) => (
  <div className="flex flex-row justify-center items-center m-2 p-3 white-glassmorphism">
    <div className={`h-10 w-10 flex rounded-full justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="flex flex-1 ml-5 flex-col">
      <h1 className="text-white text-lg mt-2">{title}</h1>
      <p className="text-white text-sm mt-1">{subtitle}</p>
    </div> 
  </div>
)

const Services = () => {
    return(
      <div className="flex w-full justify-center items-center gradient-bg-services">
        <div className="flex mf:flex-row flex-col justify-between items-center md:p-20 py-12 px-4">
          <div className="flex flex-1 justify-start items-start">
            <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient">
              Services that we
              <br />
              continue to improve
            </h1>
          </div>

          <div className="flex flex-1 flex-col items-center">
            <ServiceCard
              color="bg-[#2952E3]"
              icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
              title="Security guarantee"
              subtitle="Security is guaranteed. We always maintain privacy and maintain the quality of our products"
            />
            <ServiceCard
              color="bg-[#8945F8]"
              icon={<BiSearchAlt fontSize={21} className="text-white" />}
              title="Best exchange rates"
              subtitle="Security is guaranteed. We always maintain privacy and maintain the quality of our products"
            />
            <ServiceCard
              color="bg-[#F84550]"
              icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
              title="Fastest transactions"
              subtitle="Security is guaranteed. We always maintain privacy and maintain the quality of our products"
            />
          </div>

        </div>
      </div>
    );
}

export default Services;
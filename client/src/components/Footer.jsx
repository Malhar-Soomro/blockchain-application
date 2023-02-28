import logo from "../assets/logo.png";

const Footer = () => {
    return(
       <div className="flex flex-col md:justify-center justify-between items-center gradient-bg-footer p-4 w-full">
         <div className="flex flex-col sm:flex-row justify-between items-center w-full my-4">
           <div className="flex flex-[0.5] justify-center items-center">
             <img className="w-32" src={logo} alt="logo" />
           </div>

           <div className="flex flex-1 items-center justify-evenly flex-wrap mt-5 sm:mt-0 w-full">
             <p className="text-white text-base mx-2">Market</p>
             <p className="text-white text-base mx-2">Exchange</p>
             <p className="text-white text-base mx-2">Tutorials</p>
             <p className="text-white text-base mx-2">Wallets</p>
           </div>
         </div>

         <div className="text-center mt-6 p-2">
           <p className="text-white text-sm">Come join us</p>
           <p className="text-white text-sm">malharsoomro2@gmail.com</p>
         </div>

           <div className="bg-gray-400 h-[0.25px] w-full sm:w-[90%] mt-4"/>

           <div className="flex justify-between items-center w-full sm:w-[90%] mt-3">
              <p className="text-white text-sm">@TransferKrypt 2022</p>
              <p className="text-white text-sm">All rights reserved</p>
           </div>


       </div> 
    );
}

export default Footer
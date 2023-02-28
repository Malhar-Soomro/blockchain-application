import {useState, useContext} from "react";
import {AiFillPlayCircle} from "react-icons/ai";
import {SiEthereum} from "react-icons/si";
import {BsInfoCircle} from "react-icons/bs";

import { TransactionContext } from "../context/TransactionsContext";
import {Loader} from "./";
import { shortenAddress } from "../utils/shortenAdress";

const commonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({placeholder, name, type, handleChange}) => (
  <input 
  className="w-full outline-none bg-transparent p-2 text-white white-glassmorphism border-none rounded-sm my-2 text-sm"
  placeholder={placeholder}
  name={name}
  type={type}
  step="0.0001"
  onChange={(e)=>{handleChange(e,name)}}
  />
);

const Welcome = () => {
  const {connectWallet, currentAccount, handleChange, formData, transferAmount} = useContext(TransactionContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const {addressTo, amount, keyword, message} = formData;

    if(!addressTo || !amount || !keyword || !message) return;

    transferAmount();

  }
    return(
       <div className="flex w-full justify-center items-center mt-20">
         <div className="flex mf:flex-row flex-col justify-between items-start">
           <div className="flex flex-1 flex-col md:justify-start md:items-start items-center justify-center mb-5 mr-10 w-full">
             <h1 className="sm:text-5xl text-3xl text-white text-gradient">
              Send Crypto <br /> across the world
             </h1>
             <p className="mt-5 text-center text-gray-300 mf:w-9/12 w-11/12">
              Explore the crypto world. Buy and sell cryptocurrencies easily on Krypto.
             </p>
             {!currentAccount && (
             <button
              className="bg-[#2952e3] cursor-pointer rounded-full hover:bg-[#2546bd] md:w-full w-72 py-3 my-5"
              onClick={connectWallet}
              >
             <p className="text-white font-semibold">
              Connect Wallet
             </p>
             </button>
             )}
             <div className="grid grid-cols-2 md:grid-cols-3 md:w-full w-72 mt-10">
                <div className={`rounded-tl-2xl ${commonStyles}`}>
                Reliability
                </div>
                <div className={`${commonStyles}`}>
                Security
                </div>
                <div className={`rounded-tr-2xl ${commonStyles}`}>
                Ethereum
                </div>
                <div className={`rounded-bl-2xl ${commonStyles}`}>
                Web 3.0
                </div>
                <div className={`${commonStyles}`}>
                Low fees
                </div>
                <div className={`rounded-br-2xl ${commonStyles}`}>
                Blockchain
                </div>
             </div>
           </div>

           <div className="flex flex-1 flex-col justify-center items-center w-full">
             <div className="flex h-40 sm:w-72 w-64 eth-card rounded-xl">
               <div className="flex justify-between items-start w-full">
                 <div className="flex flex-col justify-between p-2 gap-14">
                   <div className="flex justify-center items-center text-white rounded-full w-10 h-10 border-[2px]">
                   <SiEthereum fontSize={21} color="#fff"/>
                   </div>
                   <div>
                    <p className="text-white text-sm">{shortenAddress(currentAccount)}</p>
                    <p className="text-white text-lg font-semibold">Ethereum</p>
                   </div>
                 </div>
                 <BsInfoCircle className="mt-2 mr-2" fontSize={17} color="#fff"/>
               </div>
             </div>

               <div className="mt-5 flex flex-col justify-between blue-glassmorphism p-5 border sm:w-96 w-80">
                 <Input 
                  placeholder="Address To" name="addressTo" type="text" handleChange={handleChange}
               />
                 <Input 
                  placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange}
               />
                 <Input 
                  placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={handleChange}
               />
                 <Input 
                  placeholder="Enter Message" name="message" type="text" handleChange={handleChange}
               />

               <div className='mt-2 border-t border-gray-400' />
               {false ? (
                <Loader/>
               ): (
                <button onClick={(e)=>handleSubmit(e)} className="rounded-full border-[1px] border-[#3d4f7c] mt-5 text-white p-2">
                  Send Now
                </button>
               )}
               </div> 

           </div>
         </div>
       </div>
    );
}

export default Welcome;
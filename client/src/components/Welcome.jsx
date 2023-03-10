import React, { useContext, useState } from 'react'
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import If, {Else} from "if-else-react";

import { TransactionContext } from '../context/TransactionContext';
import { shortenAddress } from '../utils/shortenAddress';
import Loader from './Loader';

const Input = ({name, type, placeholder, onChange}) => (
    <input 
    className='bg-transparent text-white white-glassmorphism outline-none border-none rounded-sm p-2 mt-4 shadow-2xl' name={name}
    type={type} 
    step="0.00001"
    placeholder={placeholder} 
    onChange={(e) => onChange(e, name)}
    />
  );
const Welcome = () => {
  const  { connectWallet, currentAccount, handleOnChange, formData, transferAmount, isLoading } = useContext(TransactionContext);  

  const handleSubmit = () =>  {
    // if none of input is null, call transfer amount function
    const { addressTo, amount, keyword, message } = formData; 
    if(addressTo && amount  && keyword && message){
      transferAmount();
    }
  }

 

  return (
    <div className='flex flex-col mf:flex-row justify-center items-center'>
      <div className='flex mf:flex-row flex-col items-center mf:items-start justify-between md:p-20 py-12 px-4'>
        <div className='flex flex-1 flex-col justify-start items-start'>
            <h1 className='text-white text-3xl md:text-5xl text-gradient py-1 '>
              Send Crypto
              <br />
              across the world
            </h1>
    
            <p className='text-base text-gray-200 mt-4 w-11/12 md:w-9/12'>
            Explore the crypto world. Buy and sell cryptocurrencies easily on Krypto.</p>
  
            <If condition={!currentAccount}>
              <button onClick={connectWallet} className='bg-[#2546bd] flex justify-center items-center w-full rounded-full py-3 px-5 mt-4'>
                <p className='text-white font-semibold'>Connect Wallet</p>
              </button>
            <Else/>
            <div className='w-full flex justify-center mt-7'>
              <p className='text-green-500 font-semibold'>Metamask connected</p>  
            </div>
              
            </If>
  
          <div className='grid grid-cols-2 sm:grid-cols-3 text-white mt-14 w-full'>
            <div className='flex justify-center items-center border-gray-400 border-[1px] rounded-tl-2xl py-6 px-12'>
              <p className='text-white text-sm'>Reliability</p>
            </div>
            <div className='flex justify-center items-center border-gray-400 border-[0.5px]'>
              <p className='text-white text-sm'>Security</p>
            </div>
            <div className='flex justify-center items-center border-gray-400 border-[0.5px] rounded-tr-2xl'>
              <p className='text-white text-sm'>Ethereum</p>
            </div>
            <div className='flex justify-center items-center border-gray-400 border-[1px] rounded-bl-2xl py-6'>
              <p className='text-white text-sm'>Web 3.0</p>
            </div>
            <div className='flex justify-center items-center border-gray-400 border-[0.5px] py-6'>
              <p className='text-white text-sm'>Low fees</p>
            </div>
            <div className='flex justify-center items-center border-gray-400 border-[0.5px] rounded-br-2xl py-6'>
              <p className='text-white text-sm'>Blockchain</p>
            </div>
          </div>
        </div>
  
  
        <div className='flex flex-1 flex-col items-center justify-start mt-14 mf:mt-0 w-full'>
          <div className='flex flex-col justify-between gap-14 eth-card w-full sm:w-72 p-3 rounded-xl'>
            <div className='flex justify-between items-start'>
              <div className='flex justify-center items-center p-2 border-[2px] rounded-full'>
                <SiEthereum fontSize={21} className="text-white"/>
              </div> 
              <BsInfoCircle fontSize={18} className="text-white"/>
            </div>
            
            <div>
              <p className='text-white text-md font-semibold'>{currentAccount ? shortenAddress(currentAccount) : "Address"}</p>
              <p className='text-white text-md font-semibold'>Ethereum</p>
            </div>
  
          </div>
  
          <div className='flex flex-col blue-glassmorphism p-5 w-full sm:w-96 mt-5'> 
            <Input name="addressTo" type="text" placeholder="Address To" onChange={handleOnChange}/>
            <Input name="amount" type="Number" placeholder="Amount (ETH)" onChange={handleOnChange}/>
            <Input name="keyword" type="text" placeholder="Keyword (Gif)" onChange={handleOnChange}/>
            <Input name="message" type="text" placeholder="Enter Message" onChange={handleOnChange}/>
  
            <div className='bg-gray-500 h-[1px] mt-4'/>
            <If condition={isLoading}>
              <Loader/>
              <Else/>
              <button onClick={handleSubmit} className='w-full rounded-full mt-4 border-[#3d4f7c] border-[1.5px] p-2'>
                <p className='text-white'>Send Now</p>
              </button>
            </If>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome;
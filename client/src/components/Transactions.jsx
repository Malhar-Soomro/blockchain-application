import React from 'react';
import If, {Else} from "if-else-react";

import {TransactionContext} from "../context/TransactionContext"; 
import dummyData from "../utils/dummyData";
import {shortenAddress} from "../utils/shortenAddress";

const TransactionCard = ({addressFrom, addressTo, message, amount, url, timestamp}) => {
  return(
    <div className='flex flex-col bg-[#181918] p-5 
    2xl:min-w-[450px]
    2xl:max-w-[500px]
    sm:min-w-[270px]
    sm:max-w-[300px]
    '>
      <div className='flex flex-col mt-4'>
        <p className='text-white text-lg'>From: {shortenAddress(addressFrom)}</p>
        <p className='text-white text-lg'>To: {shortenAddress(addressTo)}</p>
        <p className='text-white text-lg'>Amount:{amount}</p>
      </div>
      
        <img className='object-cover h-64 2xl:h-96 w-full mt-4' src={url} alt="" />

        <div className='flex w-full justify-center -mt-5'>
        <div className='bg-black rounded-full justify-center w-64 flex p-2 text-center'>
        <p className='text-lg text-[#37c7da] font-bold'>{timestamp}</p>
        </div>

        </div>
    </div>
  );
}

const Transactions = () => {

  const {currentAccount} = React.useContext(TransactionContext);
  return (
    <div className='flex flex-col justify-center items-center w-full gradient-bg-transactions p-10'> 

      <div className='flex justify-center items-center w-full'>
        <If condition={currentAccount}>
          <h3 className='text-white  text-3xl'>Latest Transactions</h3>
        <Else/>
          <h3 className='text-white text-3xl'>Connect your wallet to see latest transactions</h3>
        </If>
      </div>

      <div className='flex flex-wrap p-10 mt-5 w-full gap-10 justify-center'>
      {dummyData.reverse().map((transactions) => (
        <TransactionCard {...transactions}/>
      ))}
      </div>
      
    </div>
  )
}

export default Transactions;
import { useContext } from "react";
import If, {Else} from "if-else-react";

import {TransactionContext} from "../context/TransactionsContext";
import dummyData from "../utils/dummyData";
import {shortenAddress} from "../utils/shortenAdress";
import useFetch from "../hooks/useFetch";

const TransactionCard = ({addressFrom, addressTo, amount, message, keyword, timestamp, url}) =>{
  const gifUrl = useFetch({keyword})

  return (
    <div className="flex flex-col bg-[#181918] p-3 m-5
    2xl:min-w-[450px]
    2xl:max-w-[500px]
    sm:min-w-[270px]
    sm:max-w-[300px]
    rounded-md items-center
    ">
      <div className="flex flex-col w-full">
        <a href={`https://goerli.etherscan.io/address/${addressFrom}`} target="_blank" rel="noopener noreferrer">
          <p className="text-white text-base">From: {shortenAddress(addressFrom)}</p>
        </a>
        <a href={`https://goerli.etherscan.io/address/${addressFrom}`} target="_blank" rel="noopener noreferrer">
          <p className="text-white text-base">To: {shortenAddress(addressTo)}</p>
        </a>
        <p className="text-white text-base">Amount: {amount}ETH</p>

        <If condition={message}>
          <>
            <br />
            <p className="text-white text-base">Message: {message}</p>
          </>
        </If>

      </div>
      
        <img src={gifUrl || url} alt="gifUrl" className="h-64 2x:h-96 object-cover mt-5" />

      <div className="bg-black rounded-3xl -mt-5 p-3 px-5 w-max">
        <p className="text-[#37c7da] font-bold">Timestamp{timestamp}</p>
      </div>

    </div>
  )
}
const Transactions = () => {
    const {currentAccount, transactions} = useContext(TransactionContext);
    console.log(transactions)

    return(
        <div className="flex flex-col gradient-bg-transactions items-center p-10">
        
          <If condition={currentAccount}>
            <h3 className="text-white sm:text-3xl text-5xl">
                   Latest Transactions 
            </h3>

            <div className="flex flex-wrap justify-center items-center flex-col sm:flex-row mt-10">
            {transactions.reverse().map((transaction, index) => (
                <TransactionCard key={index} {...transaction}/>
            ))}
          </div>

          <Else/>
            <h3 className="text-white sm:text-3xl text-5xl">
                  Connect your account to see the latest transactions

            </h3>
          </If>
        </div>
    );
}

export default Transactions;
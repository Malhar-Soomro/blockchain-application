import React, {useEffect, useState} from "react";
import {ethers} from "ethers";

import {contractABI, contractAddress} from "../utils/constants";

export const TransactionContext = React.createContext();

const {ethereum} = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);

  const signer = provider.getSigner();

  const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);

  return transactionContract;
};


export const TransactionProvider = ({children}) => {
 
  const [currentAccount, setCurrentAccount] = useState("");


  const [formData, setFormData] = useState({
    addressTo:"",
    amount:"",
    keyword:"",
    message:""
  });

  const [isLoading, setIsLoading] = useState(false);

  const [transactionCount, setTransactionCount] = useState(localStorage.getItem("transactionCount"));

  const [transactions, setTransactions] = useState([]);

  const handleChange = (e, name) => {
    setFormData((prev) => ({...prev, [name]:e.target.value}))
  }

  const getAllTransactions = async() => {
    if(!ethereum) return alert("Please install metamask");

    const transactionContract =  getEthereumContract();

    const availableTransactions = await transactionContract.getAllTransactions();
    const structuredTransactions = availableTransactions.map((transaction) =>({
      addressTo: transaction.receiver,
      addressFrom: transaction.sender,
      timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
      message: transaction.message,
      keyword: transaction.keyword,
      amount: parseInt(transaction.amount._hex) / (10 ** 18),
    }));

    setTransactions(structuredTransactions);

    return structuredTransactions;
  }

  const checkIfWalletIsConnected = async () => {

    try{
      if(!ethereum) return alert("Please install metamask");

      const accounts = await ethereum.request({method:"eth_accounts"});

      if(accounts.length){
        setCurrentAccount(accounts[0])
          getAllTransactions();
        }
        else {
          console.log("no accounts found");
        }   
    }
    catch (error){
      console.log(error);
      throw new Error("No ethereum object.")
}
  }

  const checkIfTransactionsExist = async () => {
    try {
      const transactionContract =  getEthereumContract();

      const transactionCount = await transactionContract.getTransactionCount();

      window.localStorage.setItem("transactionCount", transactionCount)

    } catch (error) {
      throw new Error("No ethereum object.")
      
    }

  }

  const connectWallet = async() => {
      try{
          if(!ethereum) return alert("Please install metamask");

          const accounts = await ethereum.request({method:"eth_requestAccounts"});

          setCurrentAccount(accounts[0])
      }
      catch (error) {
        console.log(error);

        throw new Error("No ethereum object.")
      }
  }

  const sendTransaction = async () => {
    try{
      if(!ethereum) return alert("Please install metamask");

      // get the data from the form
      const {addressTo, amount, keyword, message} = formData;
      const transactionContract =  getEthereumContract();
      // dec to hex(Gwei)
      const parsedAmount = ethers.utils.parseEther(amount);


      await ethereum.request({
        method:"eth_sendTransaction",
        params: [{
          from: currentAccount,
          to: addressTo,
          // hex 0x5208
          // dec 21000 Gwei
          // 0.000021 Ether
          gas: "0x5208",
          value: parsedAmount._hex, // 0.000001
        }]
      });

     const transactionHash = await transactionContract.addToBlockchain(addressTo, parsedAmount, message, keyword);

     setIsLoading(true);
     console.log(`Loading - ${transactionHash.hash}`);
     await transactionHash.wait();
     setIsLoading(false);
     console.log(`Success - ${transactionHash.hash}`)

     const transactionCount = await transactionContract.getTransactionCount();

     
     setTransactionCount(transactionCount.toNumber());
     
     window.reload();
 
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    checkIfWalletIsConnected();
    checkIfTransactionsExist();
  },[]);

  return(
      <TransactionContext.Provider value={{connectWallet, currentAccount, formData, setFormData, handleChange, sendTransaction, transactions, isLoading, transactionCount}}>
        {children}
      </TransactionContext.Provider>
  )
}
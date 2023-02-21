import React, { useState, useEffect } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../utils/constants";

export const TransactionContext = React.createContext();

export const TransactionProvider = ({children}) => {
  
  const [currentAccount, setCurrentAccount] = useState("");
  const {ethereum} = window;
  
  const [formData, setFormData] = useState({addressTo:"", amount:"", keyword:"", message:""});
  const [isLoading, setIsLoading] = useState(false);
  const [transactionCount, setTransactionCount] = useState(localStorage.getItem("transactionCount"));

  const handleChange = (e,name) => {
    setFormData((prev) => ({...prev,[name]:e.target.value }));
  }


  const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);

    const signer = provider.getSigner();

    const transactionContract = new ethers.Contract(
      contractAddress,
      contractABI,
      signer
    );
    return transactionContract;
  }

  const checkIfWalletConnected = async () => {
    try {
      if(!ethereum) return alert("Please install metamask");

      const accounts = await ethereum.request({method:"eth_accounts"});

      if(accounts.length) {
        setCurrentAccount(accounts[0]);
      } else {
        console.log("no accounts found");
      }
    } catch (error) {
      console.error(error);
      throw new Error("No ethereum object.")
    }
  }

  const connectWallet = async() => {
    try {
      if(!ethereum) return alert("Please install metamask");

      const accounts = await ethereum.request({method:"eth_requestAccounts"});

      setCurrentAccount(accounts[0]);
      console.log(accounts[0])
    } catch (error) {
      console.error(error);
      throw new Error("No ethereum object.")
    }
  }

  const transferAmount = async () => {
    try {
      if(!ethereum) return alert("Please install metamask");

      const {addressTo, amount, keyword, message} = formData;

      const parsedAmount = ethers.utils.parseEther(amount); // dec to hex(Gwei)

      await ethereum.request({
        method:"eth_sendTransaction",
        params:[{
          from:currentAccount,
          to:addressTo,
          gas:"0x5208",
          value:parsedAmount._hex,
        }]
      });
      const transactionContract = getEthereumContract();

      const transactionHash = await transactionContract.addToBlockchain(addressTo, amount, keyword, message);

      setIsLoading(true);
      console.log(`Loading - ${transactionHash.hash}`);
      await transactionHash.wait();
      setIsLoading(false);
      console.log(`Success - ${transactionHash.hash}`);

      const transactionCount = await transactionContract.getTransactionCount();

      setTransactionCount(transactionCount.toNumber())

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    checkIfWalletConnected();
  }, [])
  

  return(
    <TransactionContext.Provider value={{connectWallet, currentAccount, handleChange, transferAmount, formData}}>
      {children}
    </TransactionContext.Provider>
  )
}
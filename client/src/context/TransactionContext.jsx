import React from "react";
import {ethers} from "ethers";

import {contractAddress, contractABI} from "../utils/constants";

export const TransactionContext  = React.createContext();

export const TransactionProvider = ({children}) => {

    const [currentAccount, setCurrentAccount] = React.useState();

    const [formData, setFormData] = React.useState({addressTo:"",amount:"",keyword:"",message:""});

    const [transactionCount, setTransactionCount] = React.useState(localStorage.getItem("transactionCount"))

    const [isLoading, setIsLoading] = React.useState(false);

    const {ethereum} = window;

    const handleOnChange = (e, name) => {
    e.preventDefault();
    setFormData({...formData, [name]:e.target.value})
  }

      
    const getEthereumContract = () => {
        const provider = new ethers.providers.Web3Provider(ethereum);
        
        const signer = provider.getSigner();
    
        const transactionContract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
        );
    
        console.log(transactionContract)
        return transactionContract;
    }



    const connectWallet = async () => {
        if(!ethereum) return alert("Plz install metamask");
        try {
            const accounts = await ethereum.request({
                method:"eth_requestAccounts"
            });
    
            setCurrentAccount(accounts[0]);
            
        } catch (error) {
            console.log(error)
            throw new Error(error);
        }
    }

    const checkIfWalletConnected = async () => {
        if(!ethereum) return alert("Plz install metamask");
        try {
            const accounts = await ethereum.request({
                method:"eth_accounts"
            });
            if(accounts.length){
                setCurrentAccount(accounts[0])
                console.log(accounts[0]);
            }
            else console.log("no account found")
            
        } catch (error) {
            console.log(error)
            throw new Error(error);
        }

    }

    const transferAmount = async () => {
        if(!ethereum) return alert("Plz install metamask");
        try {
            const { addressTo, amount, keyword, message } = formData; 

            const parsedAmount = ethers.utils.parseEther(amount);

                await ethereum.request({
                    method:"eth_sendTransaction",
                    params:[{
                            from:currentAccount,
                            to:addressTo,
                            gas: '0x5208',
                            value:parsedAmount._hex
                        }]
            });

            const transactionContract = getEthereumContract();

            const transactionHash = await transactionContract.addToBlockchain(addressTo, parsedAmount, keyword , message);

            setIsLoading(true);
            console.log(`Loading - ${transactionHash.hash}`);
            await transactionHash.wait();
            setIsLoading(true);
            console.log(`Success - ${transactionHash.hash}`);

            const transactionCount = await transactionContract.getTransactionCount();

            setTransactionCount(transactionCount.toNumber());


            
            
        } catch (error) {
            console.log(error)
            throw new Error(error);
        }
    }

    React.useEffect(() => {
        checkIfWalletConnected();
    },[])

    return(
    <TransactionContext.Provider value={{connectWallet, currentAccount, handleOnChange, formData, transferAmount}}>
      {children}
    </TransactionContext.Provider>
    );
}
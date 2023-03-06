import React from "react";

export const TransactionContext  = React.createContext();

export const TransactionProvider = ({children}) => {

    const [currentAccount, setCurrentAccount] = React.useState();

    const [formData, setFormData] = React.useState({addressTo:"",amount:"",keyword:"",message:""});

    const {ethereum} = window;

    const handleOnChange = (e, name) => {
    e.preventDefault();
    setFormData({...formData, [name]:e.target.value})
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
            setCurrentAccount(accounts[0])
            
        } catch (error) {
            console.log(error)
            throw new Error(error);
        }

    }

    React.useEffect(() => {
        checkIfWalletConnected();
    },[])

    return(
    <TransactionContext.Provider value={{connectWallet, currentAccount, handleOnChange, formData}}>
      {children}
    </TransactionContext.Provider>
    );
}
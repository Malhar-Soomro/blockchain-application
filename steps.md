<!-- client -->
# Initialize React app
## type "npm init vite@latest"
## type "npm run dev" to run the vite application

# Setup tailwind css in react app
## type "npm install -D tailwindcss postcss autoprefixer"
## type "npx tailwindcss init -p"
## copy the below text and paste in the tailwind.config.
```js
 /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
## copy and paste the below text into index.css
```js
@tailwind base;
@tailwind components;
@tailwind utilities;
```
## for last time copy this text and paste in app.jsx to check if the tailwind installed successfully or not
```js
export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}
```
## create components and make a separate index.js file for exporting all components
## for importing icons first type "npm install react-icons ethers"



<!-- smart contract -->
# initialize the empty package json
## type "npm init -y"

# Install these packages
## npm install --save-dev hardhat @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers

# to create a basic hardhat project structure
## type "npx hardhat"

## type "npx hardhat test" to make sure everthing working correctly --> getting error? type "npm install @nomicfoundation/hardhat-toolbox"

## Install solidity extension

## delete the contract in the contracts folder and create your own 

## type "pragma solidity ^0.8.0"
## create contract(event, struct and functions)

## send some test ethereum to your account

## create an app on alchemy and copy the http key

## right after copying the key open the hardhat.config.js, url is copied just now and accounts key from metamask --> account details --> export private key

## update deploy.js code

## type "npx hardhat run scripts/deploy.js --network goerli"

## getting error --> Error HH100: Network goerli doesn't exist ? do this : leave
## there was typo, wrote network instead of networks
### 0xa4482dBc9d5004548d7D6A7e270d5603af8B5f66(practise)
 
## copy the address from the command line "0x269225dFD1921Ae8fDDB54e6b0067c38034D2614"(master)

## 0x9d189FC7bB7baa4312899ab8A963fbD937835a95(malhar)

<!-- client -->
## create utils folder in the src(client), in utils create constants.js

## export the address from constants.js 

## copy the transaction ABI from artifacts --> contracts --> Transactions.sol --> Transactions.json, create a new file in utils named Transactions.json and paste there

## create context folder in src
## create TransactionContext.jsx in context

## let's talk about context
## Its built-in state management tool or feature in React
# File: TransactionContext
## Setup
## step 1 
```js
export const TransactionContext = React.createContext();
```
## step 2
```js
export const TransactionProvider = ({children}) => {
  return(
    <TransactionContext.Provider value={{isNumber:flase, firstName:"abc"}}>
      {children}
    </TransactionContext.Provider>
  )
}
```
# File: main.js or index.js, root directory of react app
## step 3: import the provider
```js
import {TransactionProvider} from "./context/TransactionContext.jsx";
```
## step 4: wrap the App.jsx into TransactionProvider so that All components of react have access of it
## just like this
```js
ReactDOM.createRoot(document.getElementById('root')).render(
  <TransactionProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </TransactionProvider>
)
```
# setup completed

# To access the context values in the component
## import TransactionContext and useContext in a component
```js
import TransactionContext from "./src/context/TransactionContext.jsx";
import useContext from "react";
```
## get the value
```js
import value = useContext(TransactionContext);
console.log(value)
```
## implement connect wallet functionality
## connectWallet(), "eth_requestAccounts"
## checkIfWalletConnected(), "eth_accounts"

## formData, handleChange(), handleSubmit(),

## getEthereumContract(), to access addToBlockchain() and getTransactionCount(), smart contract functions
<!-- I found no use of transactionCount in practice and right now I am in malhar, let's see for what use it is, but after the completion of project(malhar)   -->
## transferAmount()

## getting error --> Cannot read properties of undefined (reading 'Web3Provider').
## First of all uninstall the latest ethers package
## type "npm uninstall ethers"
## and then install this version "npm install ethers@5.5.1" 

## got an Error something like bigNumber while calling addToBlockchain function ? make sure to pass parsedAmount as an argument instead of amount : leave

## services section

## transactions section
## created dummyData.js in utils and added some data
## get currentAccount from context and display two h3
## We missed to add address on the card in welcome section
## address is too long, so that's why we are creating a new function in utils(shortenAddress)
## render dummy transactions on <TransactionCard/>, parent div bg-[#181918], 2:35:00
## to fetch gifs use developers.giphy.com, create account and copy api key
## create .env, VITE_GIPHY_API
## create hooks inside src and create custom hook(useFetch)
## url in fetch() ? go to GIF & sticker endpoints and then search endpoint
## render url first and then later gifUrl
## lets develop footer
## TransactionContext , below chechIfWalletConnected create function checkIfTransactionExit
<!-- checkIfTransactionExit -->
## retreive contract and count and set count in localstorage
## create another function below handleChange, getAllTransactions
## pass transactions and isLoading state in the context



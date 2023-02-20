// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Transactions {
  uint256 transactionCount;
  
  // function for transfering the amount
  event Transfer(address from, address receiver, uint amount, string message, uint256 timestamp, string keyword);
  
  // structure of the transaction
  struct TransferStruct {
      address sender;
      address receiver;
      uint amount;
      string message;
      uint256 timestamp;
      string keyword;
  }

  // transactions array to store all the transactions
  TransferStruct[] transactions;
  
  function addToBlockchain(address payable receiver, uint amount, string memory message, string memory keyword) public {
    // increasing count with increment in transactions
    transactionCount++;

    // adding one more transaction in the array
    transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword));

    emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
  }

  function getAllTransactions() public view returns (TransferStruct[] memory) {
    return transactions;
  }
 
  function getTransactionCount() public view returns(uint256) {
    return transactionCount;
  }
  
}

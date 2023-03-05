// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Transactions {
    uint256 transactionCount;

    event Transfer(address from, address receiver, uint amount, uint256 timestamp, string keyword, string message);

    struct transferStruct {
        address sender;
        address receiver;
        uint amount;
        uint256 timestamp;
        string keyword;
        string message;
    }

    transferStruct[] transactions;

    function addToBlockchain(address payable receiver, uint amount, string memory keyword, string memory message) public {
        transactionCount ++;

        transactions.push(transferStruct(msg.sender, receiver, amount, block.timestamp, keyword, message));

        emit Transfer(msg.sender, receiver, amount, block.timestamp, keyword, message);
    }

    function getAllTransactions() public view returns(transferStruct[] memory){
        return transactions;
    }

    function getTransactionCount() public view returns(uint256) {
        return transactionCount;
    }
}
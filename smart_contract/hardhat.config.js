require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/o3t4f0YZ3sMl3jJ5iAVun0AiPqnYt40n",
      accounts: ["0715f6cf595867f84faf1ff751f76829ce9e55d003ebc5537a8b5ce8803e919e"]
    }
  }

}
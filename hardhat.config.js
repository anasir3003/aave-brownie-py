require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.10",
  networks: {
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/jQBuyIljmN-7JHkcY18nP0kY_Ys8lyMF",
      accounts: ["#Private Key"],
    }
  }
};

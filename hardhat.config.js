require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.10",
  networks: {
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/jQBuyIljmN-7JHkcY18nP0kY_Ys8lyMF",
      accounts: ["999e9465bf2d580282e0519481caca479a7c353e6e316a60ae656e1c3f32dd31"],
    }
  }
};
const { ethers } = require("hardhat");

 require("dotenv").config();
 require("@nomiclabs/hardhat-waffle");
 
 module.exports = {
   solidity: "0.8.10",
   defaultNetwork: "ropsten",
   networks: {
     hardhat: {},
     ropsten: {
       url: process.env.DEV_API_URL,
       accounts: [`0x${process.env.PRIVATE_KEY}`],
     },
   },
 };

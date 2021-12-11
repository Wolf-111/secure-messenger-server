const Web3 = require("web3");
const rpcURL = "https://mainnet.infura.io/v3/0961637b7e1d45318fb107b0a7eac39a"; // Your RPC URL goes here
const web3 = new Web3(rpcURL);

// Is there is an injected web3 instance?
if (typeof web3 !== 'undefined') {
    App.web3Provider = web3.currentProvider;
    web3 = new Web3(web3.currentProvider);
  } else {
    // If no injected web3 instance is detected, fallback to Ganache.
    App.web3Provider = new web3.providers.HttpProvider('http://127.0.0.1:7545');
    web3 = new Web3(App.web3Provider);
  }

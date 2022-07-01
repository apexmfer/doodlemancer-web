

/*

  WEB3PLUG.js  --  By InfernalToast
  A mini connector in order to abstract the metamask/web3 API into a custom event emitter that is simpler and more predictable



 >>> HOW TO USE

  let web3Plug = new Web3Plug()

  this.web3Plug.getPlugEventEmitter().on('stateChanged', function(connectionState) {
        console.log('stateChanged',connectionState);

        // CUSTOM CODE HERE
        this.activeAccountAddress = connectionState.activeAccountAddress
        this.activeNetworkId = connectionState.activeNetworkId
        // END CUSTOM CODE

      }.bind(this));

   this.web3Plug.getPlugEventEmitter().on('error', function(errormessage) {
        console.error('error',errormessage);

        //CUSTOM CODE HERE
        this.web3error = errormessage
        // END CUSTOM CODE
      }.bind(this));


  this.web3Plug.connectWeb3( )


  let networkName = this.web3Plug.getWeb3NetworkName(this.activeNetworkId)

  let contractData = this.web3Plug.getContractDataForNetworkID(this.activeNetworkId)

  let myTokenContract = this.web3Plug.getTokenContract(window.web3, contractData['weth'].address)

  myTokenContract.methods.transferFrom( {...} ).send( {from: ....} )
        .on('receipt', function(){
            ...
        });



*/






const Web3 = require('web3');
const web3utils = Web3.utils;
 
import BigNumber from 'bignumber.js'

const contractData = require('../../shared/contractdata.json')
const tokenContractABI = require('../contracts/ERC20ABI')
const nftContractABI = require('../contracts/ERC721ABI')

const EventEmitter = require('events');
class Web3PlugEmitter extends EventEmitter {}

const web3PlugEmitter = new Web3PlugEmitter();

var web3Instance = null 
 
  let networkIds = {
    'mainnet':1,
    'rinkeby':4,
    'goerli':5,
    'kovan':42, 
    'matic':137,
  }


export default class Web3Plug {

  async reconnectWeb(){
    if (window.ethereum  ) {

     

      window.web3 = new Web3(window.ethereum);
      web3Instance = window.web3

      window.ethereum.on('accountsChanged', (accounts) => {
            web3PlugEmitter.emit('stateChanged', this.getConnectionState() )
      });

      window.ethereum.on('chainChanged', (chainId) => {
              web3PlugEmitter.emit('stateChanged', this.getConnectionState() )
      });

      web3PlugEmitter.emit('stateChanged', this.getConnectionState() )
    }

  }

  async connectWeb3(   ){

    console.log('connectWeb3')

    if (window.ethereum) {

 

         window.web3 = new Web3(window.ethereum);

         web3Instance = window.web3 


        
         window.ethereum.enable();
         console.log('meep', window.web3.currentProvider.host )

         window.ethereum.on('accountsChanged', (accounts) => {
                  web3PlugEmitter.emit('stateChanged', this.getConnectionState() )
          });

         window.ethereum.on('chainChanged', (chainId) => {
                  web3PlugEmitter.emit('stateChanged', this.getConnectionState() )
           });


        web3PlugEmitter.emit('stateChanged', this.getConnectionState() )

      }else{
        web3PlugEmitter.emit('error', "No web3 provider found." )
      }
  }

  async requestAddMaticNetwork(){

    
    let req = await window.ethereum.request({ 
      method: 'wallet_addEthereumChain',
      params:[ {
        "chainId": "0x89",
      "chainName": "Matic Mainnet",
      "rpcUrls":["https://rpc-mainnet.maticvigil.com"]
    
    } ] }); 
    console.log('req',req)
    
  }


  connectedToWeb3(){

    return  this.getActiveAccountAddress() != null
  } 


  getWeb3Instance(){
    return  web3Instance
  }

  getPlugEventEmitter(){
    return web3PlugEmitter
  }

  clearEventEmitter(){
    this.getPlugEventEmitter().removeAllListeners();
  }

 
  getConnectionState(){
    return {
      activeAccountAddress: window.ethereum.selectedAddress,
      activeNetworkId: window.ethereum.chainId
    }
  }

  getActiveAccountAddress(){
    if(!window.ethereum){
      return null
    }
    return window.ethereum.selectedAddress

  }
  getActiveNetId(){
    if(!window.ethereum){
      return null
    }
    return window.ethereum.chainId

  }

    getWeb3NetworkName(networkId){
      console.log('net id', networkId)

      for (const [key, value] of Object.entries(networkIds)) {
        if(value == networkId){
          return key 
        }
      }

  
     console.error('Invalid network Id: ',networkId)
    return null
  }


  getExplorerLinkForAddress(address){
    let chainId = this.getActiveNetId()
    
    return this.getChainExplorerURL(chainId).concat('/address/').concat(address)

  }


  getExplorerLinkForTxHash(txhash,chainId){
     
    
    return this.getChainExplorerURL(chainId).concat('/tx/').concat(txhash)

  }


  getChainExplorerURL(networkId){ 

    if(networkId == 4){
      return 'https://rinkeby.etherscan.io'
    }

    if(networkId == 5){
      return 'https://goerli.etherscan.io'
    }
    
  return 'https://etherscan.io'
}


  getContractDataForActiveNetwork( ){
    let netName = this.getWeb3NetworkName(this.getActiveNetId())

    if(netName){
        return contractData[netName].contracts
    }

    return undefined
  }

  getContractDataForNetworkID(networkId){
    let netName = this.getWeb3NetworkName(networkId)

    if(netName){
        return contractData[netName].contracts
    }

    return undefined
  }



  async getConnectedAccounts()
  {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    return accounts;
  }


  async getBlockNumber()
  {
    return await web3Instance.eth.getBlockNumber( )
    
  }


  getTokenContract(   contractAddress)
  { 
 
    var tokenContract = new web3Instance.eth.Contract(tokenContractABI,contractAddress)

    return tokenContract;
  }

  getNFTContract(   contractAddress)
  { 
 
    var nftContract = new web3Instance.eth.Contract(nftContractABI,contractAddress)

    return nftContract;
  }


  getCustomContract(   contractABI, contractAddress)
  { 
    var contract = new web3Instance.eth.Contract(contractABI,contractAddress)

    return contract;
  }

  async getETHBalance(ownerAddress)
  {
    var web3 = new Web3(Web3.givenProvider);

    return web3.eth.getBalance(ownerAddress);
  }

  async getTokenBalance(contractAddress, ownerAddress)
  {
    var web3 = new Web3(Web3.givenProvider);

    var tokenContract = new web3.eth.Contract(tokenContractABI, contractAddress, {});


    var balance = await tokenContract.methods.balanceOf(ownerAddress).call();

    return balance;
  }

  async getTokenAllowance(tokenAddress, spenderAddress, ownerAddress)
  {
    var web3 = new Web3(Web3.givenProvider);

    var tokenContract = new web3.eth.Contract(tokenContractABI, tokenAddress, {});


    var allowance = await tokenContract.methods.allowance(ownerAddress, spenderAddress).call();

    return allowance;
  }

  async getNFTAllowance(tokenAddress, spenderAddress, ownerAddress)
  {
    var web3 = new Web3(Web3.givenProvider);

    if(!tokenAddress){
      console.error('getNFTAllowance: no token address ')
      return 0
    }

    var tokenContract = new web3.eth.Contract(nftContractABI, tokenAddress, {});
 
    var allowance = await tokenContract.methods.isApprovedForAll(ownerAddress, spenderAddress).call();

    return allowance;
  }



  rawAmountToFormatted(amount,decimals)
  {
    return (amount / Math.pow(10,1 * decimals))//.toFixed(decimals);
  }

  formattedAmountToRaw(amountFormatted,decimals)
  { 
    console.log(new BigNumber( 10 ))

    if(isNaN(amountFormatted)) amountFormatted = 0
     

    var multiplier = new BigNumber( 10 ).exponentiatedBy( decimals ) ;


    return multiplier.multipliedBy(amountFormatted).toFixed() ;
  }

/*
  async connect()
  {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    return accounts
  },

  async disconnect()
  {
    console.log('disconnecting')
    const accounts = await window.ethereum.request({
     method: "eth_requestAccounts",
     params: [
       {
         eth_accounts: {}
       }
     ]
   });
   window.location.reload();
 }*/



}
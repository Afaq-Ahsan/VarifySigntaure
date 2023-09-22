const {ethers} = require('ethers');
require('dotenv').config();

const{abi} = require('./artifacts/contracts/VerifySignature.sol/VerifySignature.json');


const API_URL = process.env.API_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

 
const Provider = new ethers.providers.JsonRpcProvider(API_URL); 
const signer = new ethers.Wallet(PRIVATE_KEY,Provider);

const contractInstance = new ethers.Contract(CONTRACT_ADDRESS,abi,signer);


const message = "AfaqAhsan";

let hash = ethers.utils.keccak256(ethers.utils.solidityPack(["string"],[message]));

 console.log("@@@@@@",ethers.utils.solidityPack(["string"],[message]));

console.log("hash : ",hash);


console.log("arrayfying ::::::",ethers.utils.arrayify(hash))
console.log("valueeeeeeeeee : ",ethers.utils.keccak256(ethers.utils.solidityPack(["string","bytes32"],["\x19Ethereum Signed Message:\n32",hash])));

const signMessage =async ()=>{
  const sig =await signer.signMessage(ethers.utils.arrayify(hash));
  const ethHash = ethers.utils.keccak256(ethers.utils.solidityPack(["string","bytes32"],["\x19Ethereum Signed Message:\n32",hash]));
  console.log("signer Address is ",signer.address);

  const {v,r,s} = ethers.utils.splitSignature(sig);

  console.log("splittttttt",ethers.utils.splitSignature(sig))
  
  let bool = await contractInstance.verify(signer.address,ethHash,r,s,v);

  console.log("Sign matched = ", bool);

  
}

signMessage();










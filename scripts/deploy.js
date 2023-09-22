
const hre = require("hardhat");

async function main() {

  const VerifySignature = await hre.ethers.deployContract("VerifySignature");

  await VerifySignature.waitForDeployment();

  console.log(`Deployed to ${VerifySignature.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

const main = async () => {
  //every 'await' needs an argument to be passed
  const [owner, randomPerson] = await hre.ethers.getSigners();
  //added the WavePortal contract as this needs to be deployed
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
  const waveContract = await waveContractFactory.deploy("WavePortal");
  await waveContract.deployed();

  console.log("Contract deployed to:", waveContract.address);
  console.log("Contract deployed by:", owner.address);
 //added instead the  waveContract.address for getting the # of waves and owner.address for signing the txns
  let waveCount;
  waveCount = await waveContract.getTotalWaves(waveContract.address);

  let waveTxn = await waveContract.wave(owner.address);
  await waveTxn.wait();

  waveCount = await waveContract.getTotalWaves(waveContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
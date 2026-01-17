const MediVault = artifacts.require("Cruds");

module.exports = function(deployer) {
  deployer.deploy(MediVault, {
    gas: 6721975,  // Set a specific gas limit for this contract deployment
    gasPrice: 20000000000
  });
};

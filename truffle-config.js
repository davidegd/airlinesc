const HDWalletProvider = require('truffle-hdwallet-provider');

const mnemonic = 'someone orbit dwarf pass street cake slice final disorder mansion vicious hotel';
module.exports = {
  networks: {
    development: {      
      host: 'localhost',
      port: 7545,
      network_id: '*',
      gas: 5000000
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/43c5e47ceab04381b1bdd9909460c72d"),
      network_id:4
    }
  }
}
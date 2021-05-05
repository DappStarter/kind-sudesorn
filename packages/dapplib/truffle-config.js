require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hidden enter october foot dance rate noise hospital include immense army giant'; 
let testAccounts = [
"0xb61190a5d99a9946d3dca5a3aaf1da3eb5eaa3599230b88af26b3d5907001abd",
"0x494c2dd40d205e112b7e6174941a43da19462e6b04f0b3ddb6efacff5567ade9",
"0xb175baf70c53fa47ae9b218b28a1f64fd14d42bb7b9139ea39d215948f134bc4",
"0x24c26b4964556127bfc726fc2d7c89e5ccde44cf61c15ad065d6f9fe5efcfc05",
"0xd3bca085225c0deca7a9d963463efe09b15ba68afef9ad8a07560a0e6b1f0ae9",
"0x9ddebe3f09b63d92c268a8d6094be56f71d42115cb6433af12f809d2e86beb90",
"0x760d576247691f1408f645e8d0bf382ecc374b7714b21106a7ee56c37624ab91",
"0x7fe808c6792953d0235059ae62b36a04d44b0539e8a2ff65cdffeeef86a7bde0",
"0xd5029c0c8beb20ff33f91bee18b7b9e01b3af96aa2ce75b9adad92d2f738e9e1",
"0xf7731027118db969046ade9e3e00d51c0d7ac3a94ec84220bc7cd19715e956e9"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


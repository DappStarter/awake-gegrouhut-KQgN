require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture roast food ski stool razor oven evil install dry fringe gate'; 
let testAccounts = [
"0x69a91d21227c11419fee44cb55ed04d1641d492f99d13bb3e9b20a2bce9ac8aa",
"0xbe590981206daddb6708cc1763b0b778fbcb566f96ac7cec567841515be66172",
"0x3f15aafef589380799f34953ae19dd540f68ed6a87dd1fb18cd05f82a7f3f611",
"0x1e5663a1e297dea8f75e45400a297b0edd106ca06b097b935457bbbf59d4cf8e",
"0x4dcfe3e727b4ce373bfd303339c92d5d3ada7ce51ea5fddf62cc9cc3e0408bff",
"0x9897c1eec632d585f98fe6858ea2103329119efc26db07fc28b7e0c7ace1d884",
"0x1a7e8131223f48b65d9f5610b15a6e90b0cd9c26e8fe3e847f71c5c9f3ecca69",
"0x6f47cbd65de16e0ba1d22c68ae8e85a765ecb1ab349c16ead8a5037088687101",
"0x52973f586157bd5adf41ce19ebb378226e2a5fb1020d3143317b2b4d04cacadd",
"0x564bf4c8882efd8218297a0469c06f8aaf95533b18db2f6df954268e3598c803"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


# AddChain - chains

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Contribution

Thank you for considering to help out with the source code! We welcome contributions from anyone on the internet, and are grateful for even the smallest of fixes!

The source data is in universal chain. Each chain has its own file with the filename 'chain name' and `.json` ans extension.
The source data is in data/ethereum. Each chain has its own file with the filename being the [CAIP-2](https://github.com/ChainAgnostic/CAIPs/blob/master/CAIPs/caip-2.md) representation as name and `.json` ans extension.  
The source data is in data/cosmos. Each chain has its own file with the filename 'chain name' and `.json` ans extension.

When you add `.json`, It will be automatically reflected on the [our AddChain Site](https://addchain.welldonestake.io).

### Universal Chain File Sample

#### TypeScript

```Typescript

interface Currency {
	name: string;
  symbol: string;
  decimals: number;
	address?: string;
}

interface RpcUrl {
	providerName: string;
	url: string;
}

interface ExplorerUrl {
	name: string;
	url: string;
	standard?: string;
}

interface AddChainParameter {
  chainId: string;
  chainName?: string;
  rpcUrls?: RpcUrl[];
  nativeCurrencies?: Currency[];
	feeCurrencies?: Currency[];
  blockExplorerUrls?: ExplorerUrl[];
  iconUrls?: string[];
	slip44?: string;
}
```

#### JSON

```JSON
{
  "chainId": "mainnet",
  "chainName": "Solana Mainnet",
  "rpcUrls": [
    {
      "providerName": "All That Node",
      "url": "https://solana-mainnet-rpc.allthatnode.com/"
    },
    {
      "providerName": "Foundation",
      "url": "https://api.mainnet-beta.solana.com"
    },
    {
      "providerName": "Serum",
      "url": "https://solana-api.projectserum.com"
    }
  ],
  "nativeCurrencies": [
    {
      "name": "Solana",
      "symbol": "SOL",
      "decimals": 9
    }
  ],
  "feeCurrencies": [
    {
      "name": "Solana",
      "symbol": "SOL",
      "decimals": 9
    }
  ],
  "blockExplorerUrls": [
    {
      "name": "Solana Explorer",
      "url": "https://explorer.solana.com/"
    }
  ],
  "iconUrls": [],
  "slip44": "501"
}
```

### Ethereum File Sample

```JSON
{
  "name": "",
  "chain": "",
  "icon": "",
  "rpc": [
    "",
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "",
    "symbol": "",
    "decimals": 18
  },
  "infoURL": "",
  "shortName": "",
  "chainId": 1,
  "networkId": 1,
  "slip44": 60,
  "ens": {
    "registry":""
  },
  "explorers": [{
    "name": "",
    "url": "",
    "standard": ""
  }]
}

```

### Cosmos File Sample

```JSON
{
  "chainId": "",
  "chainName": "",
  "rpc": "",
  "rest": "",
  "bip44": {
    "coinType": 118
  },
  "bech32Config": {
    "bech32PrefixAccAddr": "",
    "bech32PrefixAccPub": "pub",
    "bech32PrefixValAddr": "valoper",
    "bech32PrefixValPub": "valoperpub",
    "bech32PrefixConsAddr": "valcons",
    "bech32PrefixConsPub": "valconspub"
  },
  "stakeCurrency": {
    "coinDenom": "",
    "coinMinimalDenom": "",
    "coinDecimals": 6
  },
  "currencies": [
    {
      "coinDenom": "",
      "coinMinimalDenom": "",
      "coinDecimals": 6
    }
  ],
  "feeCurrencies": [
    {
      "coinDenom": "",
      "coinMinimalDenom": "",
      "coinDecimals": 6
    }
  ],
  "coinType": 118,
  "gasPriceStep": {
    "low": 0.01,
    "average": 0.025,
    "high": 0.03
  }
}
```

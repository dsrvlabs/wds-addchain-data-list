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

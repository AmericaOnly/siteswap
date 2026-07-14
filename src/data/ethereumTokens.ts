import TAOT_LOGO_URI from "../../taot.png";

const LINK_LOGO_DATA_URI =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='32' fill='%232A5ADA'/%3E%3Cpath fill='none' stroke='%23fff' stroke-width='6' stroke-linejoin='round' d='M32 13 48 22v20L32 51 16 42V22z'/%3E%3C/svg%3E";
const CBBTC_LOGO_DATA_URI =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='32' fill='%23f7931a'/%3E%3Cpath fill='%23fff' d='M35.7 13.5l-1.1 4.4c4.5 1.1 7.4 3.6 6.7 7.6-.5 2.9-2.4 4.4-5 5 3.8 1.3 5.7 3.8 4.9 7.9-1 5.2-5.7 7.3-12.2 6.2l-1.1 4.5-2.7-.7 1.1-4.4-2.2-.6-1.1 4.4-2.7-.7 1.1-4.5-5.5-1.4 1.4-3.2 2.9.7c1.1.3 1.5-.3 1.7-.8l3.2-13c.1-.8-.2-1.5-1.8-1.9l-2.9-.7.8-3.2 5.6 1.4 1.1-4.4 2.7.7-1.1 4.3 2.2.6 1.1-4.4 2.9.7zm-6.6 19l-1.5 6.2c2.8.7 7 .9 7.6-1.9.7-2.9-3.4-3.7-6.1-4.3zm2.2-8.7l-1.4 5.6c2.4.6 5.9.7 6.5-1.8.6-2.5-2.8-3.2-5.1-3.8z'/%3E%3C/svg%3E";

export type TokenOption = {
  address: string;
  chainId: number;
  decimals: number;
  logoURI?: string;
  name: string;
  symbol: string;
};

export const ETHEREUM_TOKENS: TokenOption[] = [
  {
    address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    chainId: 8453,
    decimals: 18,
    name: "ETH on Base",
    symbol: "ETH"
  },
  {
    address: "0xC02aaA39b223FE8D0A0E5C4F27eAD9083C756Cc2",
    chainId: 1,
    decimals: 18,
    name: "Wrapped Ether",
    symbol: "WETH"
  },
  {
    address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    chainId: 1,
    decimals: 6,
    name: "USDT on ETH",
    symbol: "USDT"
  },
  {
    address: "0x8d0D000Ee44948FC98c9B98A4FA4921476f08B0d",
    chainId: 1,
    decimals: 18,
    name: "USD1 on ETH",
    symbol: "USD1"
  },
  {
    address: "0x833589fCD6EDb6E08f4c7C32D4f71b54bdA02913",
    chainId: 8453,
    decimals: 6,
    name: "USDC on Base",
    symbol: "USDC"
  },
  {
    address: "0xfde4C96c8593536E31F229EA8f37b2ADa2699bb2",
    chainId: 8453,
    decimals: 6,
    name: "USDT on Base",
    symbol: "USDT"
  },
  {
    address: "0x88Fb150BDc53A65fe94Dea0c9BA0a6dAf8C6e196",
    chainId: 8453,
    decimals: 18,
    logoURI: LINK_LOGO_DATA_URI,
    name: "Chainlink on Base",
    symbol: "LINK"
  },
  {
    address: "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
    chainId: 8453,
    decimals: 8,
    logoURI: CBBTC_LOGO_DATA_URI,
    name: "Coinbase Wrapped BTC",
    symbol: "cbBTC"
  },
  {
    address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
    chainId: 1,
    decimals: 18,
    name: "Dai Stablecoin",
    symbol: "DAI"
  },
  {
    address: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
    chainId: 1,
    decimals: 8,
    name: "Wrapped BTC",
    symbol: "WBTC"
  },
  {
    address: "0x7f2f00e54dcaa8b248bdfd75da2ae859d4d8ff3e",
    chainId: 8453,
    decimals: 18,
    logoURI: TAOT_LOGO_URI,
    name: "TAOT on Base",
    symbol: "TAOT"
  },
  {
    address: "0x514910771AF9Ca656af840dff83E8264EcF986CA",
    chainId: 1,
    decimals: 18,
    name: "Chainlink",
    symbol: "LINK"
  },
  {
    address: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
    chainId: 1,
    decimals: 18,
    name: "Uniswap",
    symbol: "UNI"
  },
  {
    address: "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDAE9",
    chainId: 1,
    decimals: 18,
    name: "Aave",
    symbol: "AAVE"
  },
  {
    address: "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2",
    chainId: 1,
    decimals: 18,
    name: "Maker",
    symbol: "MKR"
  },
  {
    address: "0xc00e94Cb662C3520282E6f5717214004A7f26888",
    chainId: 1,
    decimals: 18,
    name: "Compound",
    symbol: "COMP"
  },
  {
    address: "0xD533a949740bb3306d119CC777fa900bA034cd52",
    chainId: 1,
    decimals: 18,
    name: "Curve DAO Token",
    symbol: "CRV"
  },
  {
    address: "0x5A98FcBEA516Cf06857215779Fd812CA3beF1B32",
    chainId: 1,
    decimals: 18,
    name: "Lido DAO",
    symbol: "LDO"
  },
  {
    address: "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84",
    chainId: 1,
    decimals: 18,
    name: "Lido Staked Ether",
    symbol: "stETH"
  },
  {
    address: "0xae78736Cd615f374D3085123A210448E74Fc6393",
    chainId: 1,
    decimals: 18,
    name: "Rocket Pool ETH",
    symbol: "rETH"
  },
  {
    address: "0x853d955aCEf822Db058eb8505911ED77F175b99e",
    chainId: 1,
    decimals: 18,
    name: "Frax",
    symbol: "FRAX"
  },
  {
    address: "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE",
    chainId: 1,
    decimals: 18,
    name: "Shiba Inu",
    symbol: "SHIB"
  },
  {
    address: "0x6982508145454Ce325dDbE47a25d4ec3d2311933",
    chainId: 1,
    decimals: 18,
    name: "Pepe",
    symbol: "PEPE"
  },
  {
    address: "0x4d224452801ACEd8B2F0aebE155379bb5D594381",
    chainId: 1,
    decimals: 18,
    name: "ApeCoin",
    symbol: "APE"
  },
  {
    address: "0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72",
    chainId: 1,
    decimals: 18,
    name: "Ethereum Name Service",
    symbol: "ENS"
  },
  {
    address: "0x0D8775F648430679A709E98d2b0Cb6250d2887EF",
    chainId: 1,
    decimals: 18,
    name: "Basic Attention Token",
    symbol: "BAT"
  },
  {
    address: "0x111111111117dC0aa78b770fA6A738034120C302",
    chainId: 1,
    decimals: 18,
    name: "1inch",
    symbol: "1INCH"
  },
  {
    address: "0xC011A73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F",
    chainId: 1,
    decimals: 18,
    name: "Synthetix",
    symbol: "SNX"
  },
  {
    address: "0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e",
    chainId: 1,
    decimals: 18,
    name: "yearn.finance",
    symbol: "YFI"
  },
  {
    address: "0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD",
    chainId: 1,
    decimals: 18,
    name: "Loopring",
    symbol: "LRC"
  },
  {
    address: "0x0F5D2fB29fb7d3CFeE444a200298f468908cC942",
    chainId: 1,
    decimals: 18,
    name: "Decentraland",
    symbol: "MANA"
  },
  {
    address: "0x3845badAde8e6dFF049820680d1F14bD3903a5d0",
    chainId: 1,
    decimals: 18,
    name: "The Sandbox",
    symbol: "SAND"
  }
];

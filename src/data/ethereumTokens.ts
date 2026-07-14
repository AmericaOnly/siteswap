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
    address: "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
    chainId: 8453,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/34104.png",
    name: "Morpho on Base",
    symbol: "MORPHO"
  },
  {
    address: "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
    chainId: 8453,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/29270.png",
    name: "Aerodrome Finance",
    symbol: "AERO"
  },
  {
    address: "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
    chainId: 8453,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/29420.png",
    name: "Virtuals Protocol",
    symbol: "VIRTUAL"
  },
  {
    address: "0x688aee022AA544f150678B8E5720b6b96a9E9a2F",
    chainId: 8453,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/33824.png",
    name: "Maple Finance",
    symbol: "SYRUP"
  },
  {
    address: "0x6985884C4392D348587B19cb9eAAf157F13271cd",
    chainId: 8453,
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/26997.png",
    name: "LayerZero",
    symbol: "ZRO"
  },
  {
    address: "0x7f2f00e54dcaa8b248bdfd75da2ae859d4d8ff3e",
    chainId: 8453,
    decimals: 18,
    logoURI: TAOT_LOGO_URI,
    name: "TAOT on Base",
    symbol: "TAOT"
  }
];

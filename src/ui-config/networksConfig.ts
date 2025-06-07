import { ChainId } from '@aave/contract-helpers';
import { defineChain } from 'viem';
import { Chain, exsat, sepolia } from 'wagmi/chains';

export type ExplorerLinkBuilderProps = {
  tx?: string;
  address?: string;
};

export type ExplorerLinkBuilderConfig = {
  baseUrl: string;
  addressPrefix?: string;
  txPrefix?: string;
};

export const EXSAT_TEST2 = /*#__PURE__*/ defineChain({
  id: 840000,
  name: 'exSat Test2',
  network: 'exSatTest2',
  nativeCurrency: {
    name: 'BTC',
    symbol: 'BTC',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['https://evm2.exactsat.io'],
    },
  },
  blockExplorers: {
    default: {
      name: 'exSat explorer',
      url: 'https://scan2.exactsat.io',
    },
  },
  testnet: true,
});

export type NetworkConfig = {
  name: string;
  displayName?: string;
  publicJsonRPCUrl: readonly string[]; // public rpc used if not private found
  // https://github.com/aave/aave-api
  ratesHistoryApiUrl?: string;
  baseUniswapAdapter?: string;
  /**
   * When this is set withdrawals will automatically be unwrapped
   */
  wrappedBaseAssetSymbol: string;
  baseAssetSymbol: string;
  // needed for configuring the chain on metemask when it doesn't exist yet
  baseAssetDecimals: number;
  // usdMarket?: boolean;
  // function returning a link to etherscan et al
  explorerLink: string;
  explorerLinkBuilder: (props: ExplorerLinkBuilderProps) => string;
  // set this to show faucets and similar
  isTestnet?: boolean;
  // get's automatically populated on fork networks
  isFork?: boolean;
  networkLogoPath: string;
  // contains the forked off chainId
  underlyingChainId?: number;
  bridge?: {
    icon: string;
    name: string;
    url: string;
  };
  wagmiChain: Chain;
};

export type BaseNetworkConfig = Omit<NetworkConfig, 'explorerLinkBuilder'>;

// const ratesHistoryApiUrl = `${process.env.NEXT_PUBLIC_API_BASEURL}/data/rates-history`;

export const testnetConfig: Record<string, BaseNetworkConfig> = {
  [ChainId.sepolia]: {
    name: 'Ethereum Sepolia',
    publicJsonRPCUrl: [
      'https://eth-sepolia.public.blastapi.io',
      'https://rpc.sepolia.org',
      'https://rpc2.sepolia.org',
      'https://rpc.sepolia.online',
      'https://www.sepoliarpc.space',
    ],
    baseUniswapAdapter: '0x0',
    baseAssetSymbol: 'ETH',
    wrappedBaseAssetSymbol: 'WETH',
    baseAssetDecimals: 18,
    explorerLink: 'https://sepolia.etherscan.io',
    isTestnet: true,
    networkLogoPath: '/icons/networks/ethereum.svg',
    wagmiChain: sepolia,
  },
};

const exsatConfig: Record<string, BaseNetworkConfig> = {
  [7200]: {
    name: 'EXSAT',
    publicJsonRPCUrl: ['https://evm.exsat.network'],
    baseUniswapAdapter: '0x0',
    baseAssetSymbol: 'BTC',
    wrappedBaseAssetSymbol: 'XBTC',
    baseAssetDecimals: 18,
    explorerLink: 'https://scan.exsat.network',
    isTestnet: false,
    networkLogoPath: '/icons/networks/exsat_icon.png',
    wagmiChain: exsat,
  },
};

const exsatTest2Config: Record<string, BaseNetworkConfig> = {
  [840000]: {
    name: 'EXSAT TEST2',
    publicJsonRPCUrl: ['https://evm2.exactsat.io'],
    baseUniswapAdapter: '0x0',
    baseAssetSymbol: 'BTC',
    wrappedBaseAssetSymbol: 'XBTC',
    baseAssetDecimals: 18,
    explorerLink: 'https://scan2.exactsat.io/',
    isTestnet: false,
    networkLogoPath: '/icons/networks/exsat_icon.png',
    wagmiChain: EXSAT_TEST2,
  },
};

export const prodNetworkConfig =
  process.env.NEXT_PUBLIC_MARKET === 'proto_exsat_v3' ? exsatConfig : exsatTest2Config;

export const networkConfig =
  process.env.NEXT_PUBLIC_MARKET === 'proto_exsat_v3' ? exsatTest2Config : exsatConfig;

export const networkConfigs = {
  ...testnetConfig,
  ...prodNetworkConfig,
  ...networkConfig,
};

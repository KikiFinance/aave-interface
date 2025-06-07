import { ChainId } from '@aave/contract-helpers';
import {
  AaveV3Sepolia,
} from '@bgd-labs/aave-address-book';
import { ReactNode } from 'react';

// Enable for premissioned market
// import { PermissionView } from 'src/components/transactions/FlowCommons/PermissionView';
export type MarketDataType = {
  v3?: boolean;
  marketTitle: string;
  market: CustomMarket;
  // the network the market operates on
  chainId: number;
  enabledFeatures?: {
    liquiditySwap?: boolean;
    staking?: boolean;
    governance?: boolean;
    faucet?: boolean;
    collateralRepay?: boolean;
    incentives?: boolean;
    permissions?: boolean;
    debtSwitch?: boolean;
    withdrawAndSwitch?: boolean;
    switch?: boolean;
  };
  permitDisabled?: boolean; // intended to be used for testnets
  isFork?: boolean;
  permissionComponent?: ReactNode;
  disableCharts?: boolean;
  subgraphUrl?: string;
  logo?: string;
  addresses: {
    LENDING_POOL_ADDRESS_PROVIDER: string;
    LENDING_POOL: string;
    WETH_GATEWAY?: string;
    SWAP_COLLATERAL_ADAPTER?: string;
    REPAY_WITH_COLLATERAL_ADAPTER?: string;
    DEBT_SWITCH_ADAPTER?: string;
    WITHDRAW_SWITCH_ADAPTER?: string;
    FAUCET?: string;
    PERMISSION_MANAGER?: string;
    WALLET_BALANCE_PROVIDER: string;
    L2_ENCODER?: string;
    UI_POOL_DATA_PROVIDER: string;
    UI_INCENTIVE_DATA_PROVIDER?: string;
    COLLECTOR?: string;
    V3_MIGRATOR?: string;
    GHO_TOKEN_ADDRESS?: string;
    GHO_UI_DATA_PROVIDER?: string;
  };
};
export enum CustomMarket {
  proto_sepolia_v3 = 'proto_sepolia_v3',
  // proto_mainnet_v3 = 'proto_mainnet_v3',
  proto_exsat_test2_v3 = 'proto_exsat_test2_v3',
  proto_exsat_v3 = 'proto_exsat_v3',
}

// const apiKey = process.env.NEXT_PUBLIC_SUBGRAPH_API_KEY;

export const marketsData: {
  [key in keyof typeof CustomMarket]: MarketDataType;
} = {
  [CustomMarket.proto_exsat_test2_v3]: {
    marketTitle: 'EXSAT Test2',
    market: CustomMarket.proto_exsat_test2_v3,
    v3: true,
    chainId: 840000,
    enabledFeatures: {
      governance: false,
      staking: false,
      liquiditySwap: false,
      collateralRepay: false,
      incentives: false,
      withdrawAndSwitch: false,
      debtSwitch: false,
      switch: false,
    },
    addresses: {
      LENDING_POOL_ADDRESS_PROVIDER: '0xA068f66d072286f1287DbF6cec92995eb77A30DD',
      LENDING_POOL: '0xD6DFAF9C46e2aBaD132F6AcfA577B3E9D372cf78',
      WETH_GATEWAY: '0x1659c7adAd856CD119c5f454cDD368652Bb8709d',
      WALLET_BALANCE_PROVIDER: '0xF4479c40B66e8A200A0d66f715935A3a97d18A06',
      UI_POOL_DATA_PROVIDER: '0x3C0E3f80088f54FAdD4dCDEE7Bb58dc71579789F',
      UI_INCENTIVE_DATA_PROVIDER: '0xA75017dD4a698D09f49c6596a61bE1C504dF254B',
      COLLECTOR: '0x5b08DC1562f7eF7495A010b13eF249022f16BD7e',
    },
  },
  [CustomMarket.proto_exsat_v3]: {
    marketTitle: 'stXSAT Market',
    market: CustomMarket.proto_exsat_v3,
    v3: true,
    chainId: 7200,
    enabledFeatures: {
      governance: false,
      staking: false,
      liquiditySwap: false,
      collateralRepay: false,
      incentives: false,
      withdrawAndSwitch: false,
      debtSwitch: false,
      switch: false,
    },
    addresses: {
      LENDING_POOL_ADDRESS_PROVIDER: '0x55796a5057D045725D2F8386b141726aFCD60bCA',
      LENDING_POOL: '0x2695dDfB9c4c91d12b0DE46BBD85A1C2190eEd08',
      WETH_GATEWAY: '0xa3a59B6248D93139bc0781765ED616129a8Ed884',
      WALLET_BALANCE_PROVIDER: '0xC2a81362b6eC1476C9d90DF9D23CFF1c1dfa1b2b',
      UI_POOL_DATA_PROVIDER: '0x62bA6E464Cc924eA6Ff18664BE1FC972d3BD5258',
      UI_INCENTIVE_DATA_PROVIDER: '0x37e0e21a03eadEc483E32C8a2fD911E2Ba192CFe',
      COLLECTOR: '0xC3cAFa969297eca8F47d1EFeE3e5a0eB56716234',
    },
  },
  [CustomMarket.proto_sepolia_v3]: {
    marketTitle: 'Ethereum Sepolia',
    market: CustomMarket.proto_sepolia_v3,
    v3: true,
    chainId: ChainId.sepolia,
    enabledFeatures: {
      faucet: true,
    },
    addresses: {
      LENDING_POOL_ADDRESS_PROVIDER: AaveV3Sepolia.POOL_ADDRESSES_PROVIDER,
      LENDING_POOL: AaveV3Sepolia.POOL,
      WETH_GATEWAY: AaveV3Sepolia.WETH_GATEWAY,
      FAUCET: AaveV3Sepolia.FAUCET,
      WALLET_BALANCE_PROVIDER: AaveV3Sepolia.WALLET_BALANCE_PROVIDER,
      UI_POOL_DATA_PROVIDER: AaveV3Sepolia.UI_POOL_DATA_PROVIDER,
      UI_INCENTIVE_DATA_PROVIDER: AaveV3Sepolia.UI_INCENTIVE_DATA_PROVIDER,
      GHO_TOKEN_ADDRESS: '0xc4bF5CbDaBE595361438F8c6a187bDc330539c60',
      GHO_UI_DATA_PROVIDER: '0x69B9843A16a6E9933125EBD97659BA3CCbE2Ef8A',
    },
  },
} as const;

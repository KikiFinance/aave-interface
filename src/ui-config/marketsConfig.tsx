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
    marketTitle: 'EXSAT',
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
      LENDING_POOL_ADDRESS_PROVIDER: '0xA068f66d072286f1287DbF6cec92995eb77A30DD',
      LENDING_POOL: '0xD6DFAF9C46e2aBaD132F6AcfA577B3E9D372cf78',
      WETH_GATEWAY: '0x1659c7adAd856CD119c5f454cDD368652Bb8709d',
      WALLET_BALANCE_PROVIDER: '0xF4479c40B66e8A200A0d66f715935A3a97d18A06',
      UI_POOL_DATA_PROVIDER: '0x3C0E3f80088f54FAdD4dCDEE7Bb58dc71579789F',
      UI_INCENTIVE_DATA_PROVIDER: '0xA75017dD4a698D09f49c6596a61bE1C504dF254B',
      COLLECTOR: '0x5b08DC1562f7eF7495A010b13eF249022f16BD7e',
    },
  },
  // [CustomMarket.proto_mainnet_v3]: {
  //   marketTitle: 'Core',
  //   market: CustomMarket.proto_mainnet_v3,
  //   chainId: ChainId.mainnet,
  //   v3: true,
  //   enabledFeatures: {
  //     governance: true,
  //     staking: true,
  //     liquiditySwap: true,
  //     collateralRepay: true,
  //     incentives: true,
  //     withdrawAndSwitch: true,
  //     debtSwitch: true,
  //     switch: true,
  //   },
  //   subgraphUrl: `https://gateway-arbitrum.network.thegraph.com/api/${apiKey}/subgraphs/id/Cd2gEDVeqnjBn1hSeqFMitw8Q1iiyV9FYUZkLNRcL87g`,
  //   addresses: {
  //     LENDING_POOL_ADDRESS_PROVIDER: AaveV3Ethereum.POOL_ADDRESSES_PROVIDER,
  //     LENDING_POOL: AaveV3Ethereum.POOL,
  //     WETH_GATEWAY: AaveV3Ethereum.WETH_GATEWAY,
  //     REPAY_WITH_COLLATERAL_ADAPTER: AaveV3Ethereum.REPAY_WITH_COLLATERAL_ADAPTER,
  //     SWAP_COLLATERAL_ADAPTER: AaveV3Ethereum.SWAP_COLLATERAL_ADAPTER,
  //     WALLET_BALANCE_PROVIDER: AaveV3Ethereum.WALLET_BALANCE_PROVIDER,
  //     UI_POOL_DATA_PROVIDER: AaveV3Ethereum.UI_POOL_DATA_PROVIDER,
  //     UI_INCENTIVE_DATA_PROVIDER: AaveV3Ethereum.UI_INCENTIVE_DATA_PROVIDER,
  //     COLLECTOR: AaveV3Ethereum.COLLECTOR,
  //     GHO_TOKEN_ADDRESS: AaveV3Ethereum.ASSETS.GHO.UNDERLYING,
  //     GHO_UI_DATA_PROVIDER: AaveV3Ethereum.UI_GHO_DATA_PROVIDER,
  //     WITHDRAW_SWITCH_ADAPTER: AaveV3Ethereum.WITHDRAW_SWAP_ADAPTER,
  //     DEBT_SWITCH_ADAPTER: AaveV3Ethereum.DEBT_SWAP_ADAPTER,
  //   },
  // },
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

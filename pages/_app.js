import Head from "next/head";
import { Fragment } from "react";
import "../styles/globals.css";
// import  { AppProps } from 'next/app';
import { WagmiConfig, createConfig } from 'wagmi';
import { mainnet, avalanche, fantom } from 'wagmi/chains';
import { ConnectKitProvider, getDefaultConfig } from 'connectkit';

const config = createConfig(
  getDefaultConfig({
    appName: 'SoulSwap Finance',
    // infuraId: process.env.NEXT_PUBLIC_INFURA_ID ?? '',
    // alchemyId:  process.env.NEXT_PUBLIC_ALCHEMY_ID ?? '',
    chains: [mainnet, avalanche, fantom],
    walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID ?? '',
  })
);

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider debugMode>

        <Fragment>
          {/* <!-- Google Fonts --> */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500;600;700;800;900&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
          {/* <!-- !Google Fonts --> */}

          {/* <!-- Styles --> */}
          <link type="text/css" rel="stylesheet" href="css/plugins.css" />
          <link type="text/css" rel="stylesheet" href="css/style.css?ver=1.1" />
          <link
            rel="icon"
            href="%PUBLIC_URL/favicon.ico"
          />

          <Component {...pageProps} />
        </Fragment>
      </ConnectKitProvider>
    </WagmiConfig>

  );
}

export default MyApp;

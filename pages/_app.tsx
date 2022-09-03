import "../styles/globals.css";
import "../styles/wallet.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import Web3 from "web3";
import { Web3ReactProvider } from "@web3-react/core";
import { MetaMaskProvider } from "../modules/hooks/useMetaMask";

function getLibrary(provider: any, connector: any) {
  return new Web3(provider);
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        /** Put your mantine theme override here */
        colorScheme: "light",
      }}
    >
      <Web3ReactProvider getLibrary={getLibrary}>
        <MetaMaskProvider>
          <Component {...pageProps} />
        </MetaMaskProvider>
      </Web3ReactProvider>
    </MantineProvider>
  );
}

export default MyApp;

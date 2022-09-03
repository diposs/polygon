import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../../Comp/Header/wallet/injected";

interface AppContextInterface {
  isActive: boolean;
  account: string | null | undefined;
  isLoading: boolean;
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
}

export const MetaMaskContext = React.createContext<AppContextInterface | null>(
  null
);

type Props = {
  children: React.ReactNode;
};

export const MetaMaskProvider = ({ children }: Props) => {
  const { activate, account, library, connector, active, deactivate } =
    useWeb3React();

  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Init Loading
  useEffect(() => {
    connect().then((val) => {
      setIsLoading(false);
    });
  }, []);

  const handleIsActive = useCallback(() => {
    setIsActive(active);
  }, [active]);

  useEffect(() => {
    handleIsActive();
  }, [handleIsActive]);

  //   Connect to Metamask wallet
  const connect = async () => {
    console.log("Connecting to MetaMask wallet");

    try {
      await activate(injected);
    } catch (e) {
      console.log("Error on connecting:", e);
    }
  };

  //   Disconnect wallet
  const disconnect = async () => {
    try {
      console.log("Deactivating...");
    } catch (e) {
      console.log("Error on disconnecting:", e);
    }
  };

  const values = useMemo(
    () => ({
      isActive,
      account,
      isLoading,
      connect,
      disconnect,
    }),
    [isActive, isLoading]
  );

  return (
    <MetaMaskContext.Provider value={values}>
      {children}
    </MetaMaskContext.Provider>
  );
};

export default function useMetaMask() {
  const ctx = React.useContext(MetaMaskContext);

  if (ctx === undefined) {
    throw new Error(
      "useMetaMask hook must be used within a MetaMaskProvider component"
    );
  }

  return ctx;
}

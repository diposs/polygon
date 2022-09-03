import { Button } from "@mantine/core";
import {ethers} from "ethers"
import { useState, useEffect} from "react"
import useMetaMask from "../../../modules/hooks/useMetaMask";

export default function Wallet() {
  const {connect, disconnect} = useMetaMask()

    const [address, setAddress] = useState("");

    const [balance, setBalance] = useState("");

    // const connectWallet = async () => {
    //     await window.ethereum.request({ method: "eth_requestAccounts" });
    //     const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    //       const account = provider.getSigner();
    //       const Address = await account.getAddress();
    //       setAddress(Address);
    //       const Balance = ethers.utils.formatEther(await account.getBalance());
    //       setBalance(Balance);
        
    //   };

  return (
    <div onClick={connect} className="wallet"  >
    {!address ? <div>Connect Wallet</div> : <div className="address">Address: {address.slice(0,4)}...{address.slice(36)}</div>}
    {balance && <div className="balance">Balance: {balance.slice(0,4)}</div>}
    <Button onClick={disconnect} >Disconnect</Button>
  </div>
  )
}

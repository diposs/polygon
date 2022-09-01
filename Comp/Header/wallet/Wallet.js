import {ethers} from "ethers"
import { useState, useEffect} from "react"

export default function Wallet() {
    const [address, setAddress] = useState("");

    const [balance, setBalance] = useState("");

    const connectWallet = async () => {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
          const account = provider.getSigner();
          const Address = await account.getAddress();
          setAddress(Address);
          const Balance = ethers.utils.formatEther(await account.getBalance());
          setBalance(Balance);
        
      };

  return (
    <div onClick={connectWallet} className="wallet" >
    {!address ? <div>Connect Wallet</div> : <div className="address">{address.slice(0,4)}...{address.slice(36)}</div>}
    {balance && <div className="balance">{balance.slice(0,4)}</div>}
  </div>
  )
}

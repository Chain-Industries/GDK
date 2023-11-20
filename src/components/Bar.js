import React, { useState, useEffect } from 'react'
import "./Bar.css"

export default function Bar() {
  const [connectedAddress, setConnectedAddress] = useState(false);

  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts'});
        setConnectedAddress(accounts[0]);
      } else {
        alert('Metamask is not installed. Please install it to connect your wallet.');
      }
    } catch (error) {
      console.error('Error connecting wallet:', error);
    }
  };

  useEffect(() => {
    if (window.ethereum && window.ethereum.selectAddress) {
      setConnectedAddress(window.ethereum.selectedAddress);
    }
  }, []);

  return (
    <div className="bar">
      {connectedAddress ? (
        <p>{connectedAddress}</p>
      ): (
    <button className="top-right-button" onClick={connectWallet}>Connect Wallet</button>
      )}
  </div>
  )
}

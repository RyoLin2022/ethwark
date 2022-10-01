/*!

=========================================================
* Paper Kit React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React, { useState } from "react";
import { ethers } from "ethers";

// reactstrap components
import { Container, Button } from "reactstrap";
import "./IndexHeader.css";

// core components

let currentAccount

function IndexHeader() {
  function MakeMint() {
    alert("Minted!!");
  }

  async function connectWallet() {
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount()
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      alert('Wallet connected successfully!')
    } else {
      alert('Please install an injected Web3 wallet')
    }
  }

  const [WalletAddress, setWalletAddress] = useState(null)

  async function requestAccount() {
    console.log('Requesting account...')
    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      })
      currentAccount = accounts[0]
      setWalletAddress(accounts[0])
      sessionStorage.setItem('Account', currentAccount)
      console.log("current account " + currentAccount)
      var btnConnect = document.getElementById('connect-btn')
      let lengthAcc = currentAccount.length
      btnConnect.value = currentAccount
      btnConnect.innerText =
        currentAccount.substring(0, 4) + '...' + currentAccount.substring(lengthAcc - 4, lengthAcc)
    } catch (error) {
      console.log('error connecting')
    }
    //Check if Metamask Exist
    if (window.ethereum) {
      console.log('detected')
    } else {
      console.log('not detected')
    }
  }

  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/ark5.png") + ")"
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              {/* <h4 className="presentation-title">ETHW ARK</h4> */}
              <h1>ETHW ARK</h1>
              <h4>Through the ark, we arrive at ETHW wonderland</h4>
            </div>
          </Container>
        </div>
        <h6 className="category category-absolute">
          2022 ETHW ARK
        </h6>
          <Button
            color="primary"
            id="mint-btn"
            onClick={MakeMint}
          >
            MINT
          </Button>
          <Button
            color="primary"
            id="connect-btn"
            onClick={connectWallet}
          >
            Connect
          </Button>
          <Button href="/">
            <img src={require("assets/img/ark.png")} id="siteIMG" />
          </Button>
      </div>
    </>
  );
}

export default IndexHeader;

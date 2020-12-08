import React from 'react';
import {BiRightArrowAlt} from "react-icons/bi"
import Container from "./styles"
import walletDashboard from "../../../assets/Dashboard (Wallet) Buy Bitcoin.png"
import receiveBitCoin from "../../../assets/Receive Bitcoin-1@2x.png"

const BestRate = () => {
    return (
        <Container>
        <div>
            <h3 className = "semi-header">BUYING</h3>
            <h1 className = "title">Buy at the best rates.</h1>
            <p>Buy BTC,USDT,ETH and LTC in seconds, we have the best rates in Africa.</p>
            <a href = "/" className = "link--arrow">See how <BiRightArrowAlt /></a>
        </div>
        <div className = "img--container__desktop">
            <img src = {walletDashboard} alt = {"Wallet dashboard"} />
        </div>
        <div className = "img--container__mobile">
            <img src = {receiveBitCoin} alt = {"Recieve BitCoin"} />
        </div>
        </Container>
    );
};

export default BestRate;
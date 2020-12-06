import React from 'react';
import Container from "./styles"
import Binance from "../../../assets/hiclipart.com.png"
import quidax from "../../../assets/d489e1b35289ba85877ad4858662471a78fdffdb.svg"
import hustle from "../../../assets/NoPath - Copy (2).png"
import glade from "../../../assets/glade.png"
import wallet from "../../../assets/Dashboard (Wallet) – Crypto – Receive.png"
import Bitcoin from "../../../assets/Receive Bitcoin.png";
import {BiRightArrowAlt} from "react-icons/bi"
import {FiArrowDownLeft} from "react-icons/fi"

const ReceiveMoney = () => {
    return (
        <Container>
            <div className = "imgs-container">
            <img src = {Binance} alt = "Binance" />
            <img src = {quidax} alt = "quidax" />
            <img src = {hustle} alt = "hustle" />
            <img src = {glade} alt = "glade" />
            </div>
            <div className = "row">
                <div className = "col">
                    <div>
                        <img src = {wallet} alt = {"flux wallet"} />
                    </div>
                    <div>
                        <img src = {Bitcoin} alt = {"bitcoin wallet"} />
                    </div>
                    <div className = "dropDown--label">
                        <FiArrowDownLeft />
                    </div>
                </div>
                <div className = "col">
                    <h3 className = "semi-header">RECEIVING</h3>
                    <h1 className = "headline">Receive money from anywhere.</h1>
                    <p>With Flux you can instantly receive money from anywhere using Bitcoin or USDT. We have the best exchange rates for your cash, spend exactly what you receive.</p>
                    <a href = "/" className = "link--arrow">See how <BiRightArrowAlt /></a>
                </div>
            </div>
        </Container>
    );
};

export default ReceiveMoney;
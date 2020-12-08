import React, {useState} from 'react';
import Container from "./styles"
import coinBaseLogo from "../../../assets/NoPath - Copy (3).png"
import coinBaseTxt from "../../../assets/NoPath - Copy (5).png"
import cryptoWallet1 from "../../../assets/CryptoWallet Dashboard – 2.png"
import cryptoWallet2 from "../../../assets/Crypto  Wallet Dashboard – 2-1.png"
import transactionDisplay from "../../../assets/Coin card options – 1.png"
import transactionTwo from "../../../assets/Coincardoptions– 1-1.png"
import receiveBtn1 from "../../../assets/Receive Bitcoin.png"
import receiveBtn2 from "../../../assets/Receive Bitcoin-2.png"


const HowToTransact = () => {
    const [activeTab, setState] = useState("receiveMoney")
    return (
        <Container>
            <ol className = "tabs" role = "tablist" aria-label = "How to transact">
                <li className = {`semi-header ${activeTab === "receiveMoney" ? "active" : ""}`} role = "tab" aria-selected={activeTab === "receiveMoney" ? "true" : "false"} tabIndex = "0" onClick = {() => setState("receiveMoney")}>HOW TO RECEIVE MONEY</li>
                <li className = {`semi-header ${activeTab !== "receiveMoney" ? "active" : ""}`} role = "tab" aria-selected={activeTab !== "receiveMoney" ? "true" : "false"} tabIndex = "1" onClick = {() => setState("sendMoney")}>HOW TO SEND MONEY</li>
            </ol>
            <div className = "content--header">
                {activeTab === "receiveMoney" ? <p>You can receive money from Cashapp, Coinbase, or any other Crypto wallet.</p>
                : <p>Send funds on flux in just three simple steps. It really is that easy.</p>}
                {activeTab === "receiveMoney" && <div className = {`img--container`}>
                    <img src = {coinBaseLogo} alt = {"coin base"} />
                    <img src = {coinBaseTxt} alt = {"Coin base text"} />
                </div>}
            </div>
            <div className = "row">
                <div className = "col">
                    <p className = "semi-header">STEP 1</p>
                    <p className = "small--body">Navigate to Crypto Wallet, click the options button of which ever crypto you want to receive funds from.</p>
                    <div>
                        <img src = {cryptoWallet1} alt = "mobile wallet dashboard" />
                        <img src = {cryptoWallet2} className = "crypto2" alt = "crypto wallet dashboard" />
                    </div>
                </div>
                <div className = "col">
                    <p className = "semi-header">STEP 2</p>
                    <p className = "small--body">Click Receive.</p>
                    <div>
                        <img src = {transactionDisplay} alt = "transaction display" />
                        <img src = {transactionTwo} alt = "transaction display" />
                    </div>
                </div>
                <div className = "col">
                    <p className = "semi-header">STEP 3</p>
                    <p className = "small--body">Copy and share the address displayed to you. Transfer funds and spend your cash instantly!</p>
                    <div>
                        <img src = {receiveBtn1} alt = "BTC dashboard" />
                        <img src = {receiveBtn2} alt = "Receive BTC" />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default HowToTransact;
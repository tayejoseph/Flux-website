import React from 'react';
import {BiRightArrowAlt} from "react-icons/bi"
import {FiArrowUpRight, FiArrowDownLeft} from "react-icons/fi"
import {HiCreditCard} from "react-icons/hi"
import Container from "./styles"
import walletDashboard from "../../../assets/Dashboard (Wallet) Buy Bitcoin.png"

const AlreadyHaveBTC = () => {
    return (
        <Container>
                <div>
                    <h1>Already have BTC, USDT, <br /> ETH?</h1>
                    <p className = "large--body">No worries, we’ve got you.</p>
                </div>
                <div className = "row">
                    <div className = "col">
                        <div>
                            <FiArrowDownLeft />
                        </div>
                        <div>
                            <h3>THROW IT IN</h3>
                            <p>Deposit your Crypto and spend instantly using flux.</p>
                        </div>
                    </div>
                    <div className = "col">
                        <div>
                            <FiArrowUpRight />
                        </div>
                        <div>
                            <h3>TAKE IT OUT</h3>
                            <p>Withdraw funds directly into your bank account.</p>
                        </div>
                    </div>
                    <div className = "col">
                        <div>
                            <HiCreditCard />
                        </div>
                        <div>
                            <h3>BUY SOMETHING</h3>
                            <p>Make payments, easily and fast.</p>
                        </div>
                    </div>
                </div>
        </Container>
    );
};

export default AlreadyHaveBTC;
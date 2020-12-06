import React, {useState} from 'react';
import {Button} from "../../../UI"
import fluxLogo from "../../../assets/icon.png"
import {MdMenu, MdClose} from "react-icons/md"
import Container from "./styles"

const Menu = () => (
    <React.Fragment>
        <li>About Us</li>
        <li>Flux Gift</li>
        <li>Flux Store</li>
        <li>FAQS</li>
        <li>Contact Us</li>
        <li><Button primary>Download Now</Button></li>
    </React.Fragment>
)

const Navigation = () => {
    const [displayMenu, setState] = useState(false)
    return (
        <Container>
            <div className = "nav--desktop">
                <img src = {fluxLogo} alt = "Flux logo" />
                <ol>
                    <Menu />
                </ol>
            </div>
            <div className = "nav--mobile">
                <img src = {fluxLogo} alt = "Flux logo" />
                <div onClick = {() => setState(!displayMenu)}>
                    {displayMenu ? <MdClose /> : <MdMenu />}
                </div>
            </div>
            {displayMenu && (
                <ol className = "menu--mobile">
                    <Menu />
                </ol>
            )}
        </Container>
    );
};

export default Navigation;
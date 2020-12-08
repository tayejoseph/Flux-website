import Styled from "styled-components"


export default Styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    padding-top: 2.5em;
    ${({theme}) => theme.maxQuery("md")} {
        min-height: 60vh;
    }
    ${({theme}) => theme.minQuery("md")} {
        display: flex;
        flex-direction: row;
        height: calc(100vh - 87.5px);   
    }
    div.col {
        &:first-child {
            width: 100%;
            ${({theme}) => theme.minQuery("md")} {
                width: 50%;
            }
            ${({theme}) => theme.minMaxQuery("462px", "752px")} {
                width: 70%;
            } 
            ${({theme}) => theme.minQuery("md")} {
                display: flex;
                padding-bottom: 200px;
                flex-direction: column;
                justify-content: center;
            }
            * {
                z-index: 1;
                position: relative;
            }
            ${({theme}) => theme.maxQuery("md")} {
                position: relative;
                &:before {
                    content: "";
                    position: absolute;
                    display: block;
                    top: -70%;
                    left: 70%;
                    border-radius: 50%;
                    width: 300px;
                    height: 300px;
                    background: transparent linear-gradient(153deg, #F9F6FB 0%, #F2DFFF 100%) 0% 0% no-repeat padding-box;        opacity: 1;
                }
                &:after {
                    content: "";
                    position: absolute;
                    display: block;
                    top: -60%;
                    left: 60%;
                    border-radius: 50%;
                    width: 300px;
                    z-index: -1;
                    height: 300px;
                    background: transparent linear-gradient(27deg, #F9F6FB 0%, #F2DFFF 100%) 0% 0% no-repeat padding-box;
                }
            }
            ${({theme}) => theme.minMaxQuery("462px", "752px")} {
                position: relative;
                &:before {
                    content: "";
                    position: absolute;
                    display: block;
                    top: -80%;
                    left: 90%;
                    z-index: -1;
                    border-radius: 50%;
                    width: 300px;
                    height: 300px;
                    background: transparent linear-gradient(153deg, #F9F6FB 0%, #F2DFFF 100%) 0% 0% no-repeat padding-box;        opacity: 1;
                }
                &:after {
                    content: "";
                    position: absolute;
                    display: block;
                    top: -70%;
                    left: 100%;
                    border-radius: 50%;
                    width: 300px;
                    z-index: -1;
                    height: 300px;
                    background: transparent linear-gradient(27deg, #F9F6FB 0%, #F2DFFF 100%) 0% 0% no-repeat padding-box;
                }
            } 
            h1 {
                margin-bottom: 0.5em;
                ${({theme}) => theme.minQuery("md")} {
                    width: 628px;
                }
            }
            .btn-group {
                margin-top: 2em;
                button:first-child {
                    margin-right: 0.5em;
                }
            }
        } 
        &:last-child {
            display: none;
            ${({theme}) => theme.minQuery("lg")} {
                display: block;
            }
            &:before {
                content: "";
                position: absolute;
                display: block;
                top: -200px;
                border-radius: 50%;
                left: 820px;
                width: 900px;
                z-index: 0;
                height: 900px;
                background: transparent linear-gradient(153deg, #F9F6FB 0%, #F2DFFF 100%) 0% 0% no-repeat padding-box;        opacity: 1;
            }
            &:after {
                content: "";
                position: absolute;
                display: block;
                top: -100px;
                border-radius: 50%;
                left: 750px;
                width: 900px;
                z-index: -1;
                height: 900px;
                background: transparent linear-gradient(27deg, #F9F6FB 0%, #F2DFFF 100%) 0% 0% no-repeat padding-box;
            }
            div.lg-wallet {
                position: absolute;
                top: 58px;
                z-index: 3;
                left: 890px;   
                &:before {
                    content: "";
                    display: block;
                    position: absolute;
                    z-index: -1;
                    top: 12px;
                    left: 12px;
                    width: 44px;
                    height: 44px;
                    border: 4px solid #855AAF;
                };
            }
            div.sm-wallet {
                position: absolute;
                top: 164px;
                left: 776px;
                width: 249px;
                z-index: 4;
                height: 490px;
            }
        }  
    }
    hr {
        ${({theme}) => theme.maxQuery("md")} {
            /* display: none; */
        }
        background-color: #D4D4D4;
        width: 100%;  
        position: absolute;
        bottom: 0px;
    }
`
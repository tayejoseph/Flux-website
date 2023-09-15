import Styled from "styled-components";

export default Styled.div`
    ${({ theme }) => theme.minQuery("lg")} {
        height: 80vh;
    }
    
    div.row {
        display: flex;
        margin: 5em 0px;
        ${({ theme }) => theme.minQuery("lg")} {
        margin-top: 20vh;
        }
        div.col {
            ${({ theme }) => theme.minQuery("lg")} {
                width: 50%;
            }
            &:first-child {
                position: relative;
                padding-right: 10%;
                h1  {
                    margin: 0px;
                }
                &:after {
                    position: relative;
                    content: "Send";
                    position: absolute;
                    bottom: -40%;
                    left: 40%;
                    width: 329px;
                    z-index: -1;
                    height: 159px;
                    font-size: 132px;
                    font-weight: 800;
                    letter-spacing: 0px;
                    color: #F9F6FB;
                    opacity: 1;
                }
            }
            &:last-child { 
                div {
                    margin: 0px;
                    padding: 0px;
                } 
                display: none;
                ${({ theme }) => theme.minQuery("lg")} {
                    display: block;
                }
                position: relative;
                 &:before {
                    content: "";
                    position: absolute;
                    display: block;
                    top: -300px;
                    left: 30%;
                    width: 940px;
                    height: 940px;
                    border-radius: 50%;
                    background: transparent linear-gradient(153deg, #F9F6FB 0%, #F2DFFF 100%) 0% 0% no-repeat padding-box;
                }
                &:after {
                    content: "";
                    position: absolute;
                    display: block;
                    top: -250px;
                    z-index: -1;
                    left: 14%;
                    width: 940px;
                    height: 940px;
                    border-radius: 50%;
                    background: transparent linear-gradient(27deg, #F9F6FB 0%, #F2DFFF 100%) 0% 0% no-repeat padding-box;
                }
                div:first-child {
                    position: absolute;
                    top: -100px;
                    left: 20%;
                    &:before {
                        content: "";
                        top: -8px;
                        position: absolute;
                        left: 40%;
                        width: 107px;
                        height: 44px;
                        border: 4px solid #855AAF;
                        border-radius: 22px;
                        opacity: 1;
                    }
                }
                div:last-child {
                    position: absolute;
                    top: 15px;
                    left: 8%;
                    &:before {
                        content: "";
                        top: 52%;
                        position: absolute;
                        left: -14px;
                        width: 44px;
                        height: 71px;
                        border: 4px solid #855AAF;
                        opacity: 1;
                    }
                }
            }
        }
    }

`;

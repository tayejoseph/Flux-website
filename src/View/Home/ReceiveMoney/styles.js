import Styled from "styled-components"

export default Styled.div`
    position: relative;
    div.imgs-container {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        padding: 3em 0px;
        padding-top: 1em;
        ${({theme}) => theme.minQuery("md")} {
            &:after {
                content: "";
                position: absolute;
                z-index: 1;
                top: 230px;
                width: 44px;
                height: 44px;
                border: 4px solid #855AAF;
                opacity: 1;
            }
        }
        ${({theme}) => theme.maxQuery("md")} {
            position: relative;
            display: grid;
            margin: 3em 0px;
            grid-row-gap: 5em;
            justify-items: center;
            grid-template-columns: 1fr 1fr;
        }
        img {
            display: block;
            ${({theme}) => theme.maxQuery("md")} {
                width: 124px;
                height: 27px;
            }
        }
    }
    div.row {
        align-items: center;
        display: flex;
        ${({theme}) => theme.minQuery("1050px")} {
            height: 90vh;
        }
        div.col {
            ${({theme}) => theme.minQuery("1050px")} {
                width: 50%;
            }
            &:first-child {
                display: none;
                ${({theme}) => theme.minQuery("1050px")} {
                    display: block;
                }
                &:before {
                    content: "";
                    display: block;
                    position: absolute;
                    border-radius: 50%;
                    top: 12%;
                    left: -36%;
                    width: 840px;
                    height: 840px;
                    background: transparent linear-gradient(153deg, #F9F6FB 0%, #F2DFFF 100%) 0% 0% no-repeat padding-box;
                }
                &:after {
                    content: "";
                    display: block;
                    position: absolute;
                    border-radius: 50%;
                    top: 15%;
                    left: -32%;
                    z-index: -1;
                    width: 840px;
                    height: 840px;
                    background: transparent linear-gradient(27deg, #F9F6FB 0%, #F2DFFF 100%) 0% 0% no-repeat padding-box;
                }
                div:first-child {
                    top: 50%;
                    position: absolute;
                    left: -50%;
                    z-index: 2;
                    transform: translateY(-50%);
                }
                div:nth-child(2) {
                    position: absolute;
                    top: 60%;
                    z-index: 3;
                    transform: translateY(-50%);
                    left: 5%;
                    &:after {
                        content: "";
                        position: absolute;
                        z-index: 4;
                        top: 45%;
                        left: 100%;
                        width: 44px;
                        height: 44px;
                        border: 4px solid #855AAF;
                        border-radius: 50%;
                        opacity: 1;
                    }
                }
                .dropDown--label {
                    display: none;
                    ${({theme}) => theme.minQuery("1050px")} {
                        display: block;
                        position: absolute;
                        z-index: 4;
                        top: 76%;
                        left: 5%;
                        background: transparent linear-gradient(161deg, #7F55ED 0%, #855AAF 100%) 0% 0% no-repeat padding-box;
                        border-radius: 5px;
                        padding: 0.2em;
                        color: #fff;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        .icon {
                            font-size: 1.2em;
                        }
                    }
                }
            }
            &:last-child {
                position: relative;
                &:after {
                    content: "Receive";
                    position: absolute;
                    bottom: -18%;
                    left: 300px;
                    z-index: -1;
                    width: 511px;
                    height: 159px;
                    text-align: left;
                    font-size: 132px;
                    font-weight: 800;
                    /* font: normal normal 800 132px/123px; */
                    letter-spacing: 0px;
                    color: #F9F6FB;
                    opacity: 1;
                }
            }
        }
    }

`
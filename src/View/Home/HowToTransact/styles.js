import Styled from "styled-components"



export default Styled.div`
    padding-top: 7em;
    ol.tabs {
        text-align: center;
        margin: 0px auto;
        padding: 0px;
        margin-bottom: 3em;
        border-bottom: 2px solid #D4D4D4;
        width: fit-content;
        li {
            display: inline-block;
            cursor: pointer;
            position: relative;
            padding: 0px 1em 1em;
            color: #D4D4D4;
            white-space: nowrap;
            
            ${({theme}) => theme.maxQuery("sm")} {
                font-size: 0.5em;
                width: 50%;
                padding: 0 1.5em;
            }
        }
        li.active {
            color: #855AAF;
            &:after {
                content: "";
                position: absolute;
                bottom: -2px;
                display: inline-block;
                width: 100%;
                left: 50%;
                transform: translateX(-50%);
                border-bottom: 2px solid #855AAF;
            }
        }
    }
    div.content--header {
        text-align: center;
        ${({theme}) => theme.minQuery("lg")} {
            p {
                width: 80%;
                margin: auto;
            }
        }
        .img--container {
            display: flex;
            justify-content: center;
            align-items: center;
            img:first-child {
                margin-right: 2em;
            }
        }
        .hide {
            opacity: 0;
        }
    }
    div.row {
        display: flex;
        margin-top: 2em;
        justify-content: space-between;
        ${({theme}) => theme.maxQuery("1050px")} {
            flex-direction: column;
        }
        .col {
            position: relative;
            width: 25%;
            ${({theme}) => theme.maxQuery("1050px")} {
                width: 100%;
                margin-bottom: 3em;
            }
            ${({theme}) => theme.minQuery("1050px")} {
                height: 670px;
            }
            p {
                margin: 0px;
            }
            div {
                ${({theme}) => theme.maxQuery("md")} {
                    padding-left: 10%;
                }
                :after {
                    content: "";
                    position: absolute;
                    border-radius: 50%;
                    top: 30%;
                    left: 10%;
                    ${({theme}) => theme.maxQuery("md")} {
                        left: 20%;
                    }
                    ${({theme}) => theme.minQuery("1050px")} {
                        top: 35%;
                        left: 25%;
                    }
                    z-index: -1;
                    width: 215px;
                    height: 215px;
                    background: transparent linear-gradient(207deg, #F9F6FB 0%, #F2DFFF 100%) 0% 0% no-repeat padding-box;
                    opacity: 1;
                }
                :before { 
                    content: "";
                    position: absolute;
                    top: 38%;
                    left: 15%;
                    ${({theme}) => theme.maxQuery("md")} {
                        left: 25%;
                    }
                    ${({theme}) => theme.minQuery("1050px")} {
                        left: 25%;
                    }
                    z-index: -1;
                    border-radius: 50%;
                    width: 214px;
                    height: 215px;
                    background: transparent linear-gradient(333deg, #F9F6FB 0%, #F2DFFF 100%) 0% 0% no-repeat padding-box;
                    opacity: 1;
                }
            }
            img {
                &:first-child {
                    width: 240px;
                    height: 388px;
                }
                ${({theme}) => theme.minQuery("1050px")} {
                    position: absolute;
                    margin: 0px;
                    left: -20px;
                    top: 6em;
                }
            }
            img:nth-child(2) {
                position: absolute;
                left: 10%;
                top: 60%;
                ${({theme}) => theme.maxQuery("md")} {
                    left: 20%;
                }
                ${({theme}) => theme.minQuery("1050px")} {
                    top: 310px;
                    left: 50px;
                }
            }
        }
    }

`
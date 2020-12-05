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
            position: relative;
            padding: 0px 1em 1em;
            color: #D4D4D4;
            ${({theme}) => theme.maxQuery("md")} {
                width: 40%;
                padding: 0px 0.5em 1em;

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
        .img--container {
            margin-bottom: 2em;
            display: flex;
            justify-content: center;
            align-items: center;
            img:first-child {
                margin-right: 2em;
            }
        }
    }
    div.row {
        display: flex;
        justify-content: space-between;
        ${({theme}) => theme.maxQuery("md")} {
            flex-direction: column;
        }
        .col {
            position: relative;
            width: 25%;
            ${({theme}) => theme.maxQuery("md")} {
                width: 100%;
                margin-bottom: 3em;
            }
            ${({theme}) => theme.minQuery("md")} {
                height: 780px;
            }
            p {
                margin: 0px;
            }
            img {
                ${({theme}) => theme.minQuery("md")} {
                    position: absolute;
                    margin: 0px;
                    left: -20px;
                    top: 6em;
                }
            }
            img:nth-child(2) {
                position: absolute;
                left: 20%;
                top: 310px;
                ${({theme}) => theme.minQuery("md")} {
                    top: 310px;
                    left: 50px;
                }
            }
        }
    }

`
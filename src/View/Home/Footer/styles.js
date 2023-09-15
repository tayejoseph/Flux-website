import Styled from "styled-components";

export default Styled.div`
    position: relative;
    padding: 3em 0px 2em;
    &:before {
        content: "";
        width: 200vw;
        background: #F9F6FB;
        position: absolute;
        display: block;
        top: 0px;
        height: 100%;
        left: -100vw;
        z-index: -1;
    }
    &:after {
        content: "";
        position: absolute;
        top: -7%;
        left: 90%;
        width: 44px;
        height: 114px;
        border: 4px solid #855AAF;
        border-radius: 22px;
        ${({ theme }) => theme.maxQuery("md")} {
            width: 22px;
            top: -4%;
            height: 57px;
        }
        opacity: 1;
    }
    h1.title {
        ${({ theme }) => theme.minQuery("md")} {
            width: 80%;
        }
    }
    div.btn--group {
        button:first-child {
            margin-right: 0.5em;
        }
    }
    ol.nav {
        padding: 0px;
        list-style: none;
        padding-bottom: 1.5em;
        margin-top: 8em;
        border-bottom: 2px solid #222222;
        li {
            display: inline-block;
            ${({ theme }) => theme.maxQuery("md")} {
                display: block;
                margin-bottom: 2em;
                font-weight: bold;
            }
            ${({ theme }) => theme.minQuery("md")} {
                &:not(:last-child) {
                    margin-right: 3em;
                }
            }
        }
    }
    div.row {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

`;

import Styled from "styled-components";

export default Styled.nav`
    position: relative;
    ${({ theme }) => theme.minQuery("1050px")} {
        .menu--mobile {
            display: none;
        }
    }
    ol.menu--mobile {
        list-style: none;
        height: 100%;
        padding: 0px;
        margin: 0px;
        position: fixed;
        height: 100vh;
        width: 100vw;
        background: #fff;
        z-index: 2;
        padding-top: 2em;
        &:before {
            content: "";
            position: absolute;
            display: block;
            top: -20%;
            left: 50%;
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
            top: -20%;
            left: 60%;
            border-radius: 50%;
            width: 300px;
            height: 300px;
            z-index: 1;
            background: transparent linear-gradient(27deg, #F9F6FB 0%, #F2DFFF 100%) 0% 0% no-repeat padding-box;
        }
        li {
            margin-bottom: 1.5em;
            font-weight: bold;
        }

    }
    div.nav--mobile {
            position: relative;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 52px;
            z-index: 999;
            div {
                display: flex;
                flex-direction: column;
                justify-content: center;
                .icon {
                    font-size: 2em;
                }
            }
            img {
                width: 32px;
                height: 32px;
            }
            &:before {
                content: "";
                width: 200vw;
                height: 52px;
                position: absolute;
                box-shadow: 0px 0px 6px #00000029;
                left: -100vw;
                z-index: -1;
            }
        ${({ theme }) => theme.minQuery("1050px")} {
            display: none;
        }
    }
    div.nav--desktop {
        padding: 1em 0px;
        align-items: center;
        display: flex;
        align-items: center;
        z-index: 999;
        position: relative;
        justify-content: space-between;
        ${({ theme }) => theme.maxQuery("1050px")} {
            display: none;
        }
        ol {
            list-style: none;
            margin: 0px;
            font-size: 17px;
            font-weight: bold;
            li {
                display: inline-block;
                &:not(:last-child) {
                    margin-right: 3em;
                }
            }
        }   
    } 

`;

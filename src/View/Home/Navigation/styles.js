import Styled from "styled-components"

export default Styled.nav`
    div.nav--mobile {
            position: relative;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 52px;
            .icon {
                font-size: 2em;
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
        ${({theme}) => theme.minQuery("1050px")} {
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
        ${({theme}) => theme.maxQuery("1050px")} {
            display: none;
        }
        justify-content: space-between;
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

`

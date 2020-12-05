import Styled from "styled-components"

export default Styled.div`
    position: relative;
    div.imgs-container {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        padding: 3em 0px;
        position: absolute;
        ${({theme}) => theme.maxQuery("md")} {
            display: grid;
            grid-row-gap: 2em;
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
        ${({theme}) => theme.minQuery("lg")} {
            height: 120vh;
        }
        align-items: center;
        display: flex;
        div.col {
            ${({theme}) => theme.minQuery("lg")} {
                width: 50%;
            }
            &:first-child {
                display: none;
                ${({theme}) => theme.minQuery("lg")} {
                    display: block;
                }
                &:before {
                    content: "";
                    display: block;
                    position: absolute;
                    border-radius: 50%;
                    top: 15%;
                    left: -40%;
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
                img:first-child {
                    top: 50%;
                    position: absolute;
                    left: -50%;
                    transform: translateY(-50%);
                }
                img:last-child {
                    position: absolute;
                    top: 60%;
                    transform: translateY(-50%);
                    left: 10%;
                }
            }
        }
        a {
            text-decoration: none;
            display: flex;
            align-items: center;
            .icon {
                margin-left: 0.2em;
            } 
        }
    }

`
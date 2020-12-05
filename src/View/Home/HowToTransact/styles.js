import Styled from "styled-components"


export default Styled.div`
    padding-top: 7em;
    ol.tabs {
        text-align: center;
        margin: 0px auto;
        padding: 0px;
        margin-bottom: 3em;
        /* padding: 0px 1.2em; */
        border-bottom: 2px solid #D4D4D4;
        width: fit-content;
        li {
            display: inline-block;
            position: relative;
            padding: 0px 1em 1em;
            color: #D4D4D4;
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
        .col {
            width: 25%;
            height: 780px;
            position: relative;
            p {
                margin: 0px;
            }
            img {
                position: absolute;
                margin: 0px;
                left: -20px;
                top: 120px;
            }
            img:nth-child(2) {
                top: 310px;
                left: 50px;
                position: absolute;
            }
        }
    }

`
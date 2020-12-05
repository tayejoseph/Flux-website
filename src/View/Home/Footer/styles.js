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
    h1.title {
        width: 80%;
    }
    ol.nav {
        padding: 0px;
        list-style: none;
        padding-bottom: 1.5em;
        margin-top: 8em;
        border-bottom: 2px solid #222222;
        li {
            display: inline-block;
            &:not(:last-child) {
                margin-right: 3em;
            }
        }
    }
    div.row {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

`



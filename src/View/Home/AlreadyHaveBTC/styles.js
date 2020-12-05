import Styled from "styled-components"


export default Styled.div`
    height: 100vh;
    background: #fff;
    padding-top: 16em;
     > div:first-child {
        text-align: center;
    }
    h1 {
        font-weight: 800;
        font-size: 45px;
        line-height: 55px;
    }
    div.row {
        display: flex;
        padding-top: 2em;
        flex-wrap: wrap;
        justify-content: space-between;
        .col {
            padding: 30px;
            padding-bottom: 10px;
            left: 105px;
            width: 319px;
            height: 404px;
            color: #fff;
            background: #350068 0% 0% no-repeat padding-box;
            box-shadow: 0px 0px 15px #00000029;
            border-radius: 5px;
            opacity: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            > div:first-child {
                width: 44px;
                height: 44px;
                border-radius: 5px;
                background: #fff;
                display: flex;
                align-items: center;
                justify-content: center;
                .icon {
                    color: #350068;
                    font-weight: bold;
                    font-size: 1.5em;
                }
            }
        }
        .col:nth-child(2) {
            background: #AA0082 0% 0% no-repeat padding-box;
            box-shadow: 0px 0px 15px #00000029;
            .icon {
                color: #AA0082;
                font-weight: bold;
            }
        }
        .col:nth-child(3) {
            background: #855AAF 0% 0% no-repeat padding-box;
            box-shadow: 0px 0px 15px #00000029;
            .icon {
                color: #855AAF;
                font-weight: bold;
            }
        }
    }
`
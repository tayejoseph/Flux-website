import Styled from "styled-components"


export default Styled.div`
    background: #fff;
    padding-top: 10em;
    ${({theme}) => theme.minQuery("md")} {
        padding-top: 12em;
    }
     > div:first-child {
        text-align: center;
    }
    div.row {
        display: flex;
        padding-top: 2em;
        position: relative;
        flex-wrap: wrap;
        justify-content: space-between;
        ${({theme}) => theme.maxQuery("md")} {
            justify-content: center;
        }
        &:before {
            content: "";
            position: absolute;
            top: -50px;
            left: 1152px;
            width: 44px;
            height: 44px;
            border: 4px solid #855AAF;
            border-radius: 50%;
            opacity: 1;
        }
        .col {
            padding: 30px;
            padding-bottom: 10px;
            margin-bottom: 1.2em;
            cursor: pointer;
            ${({theme}) => theme.maxQuery("md")} {
                margin-bottom: 2em;
            }
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
            transition: all ease-in-out 0.2s;
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
            &:hover {
                transform: translateY(-20px);
                > div:first-child {
                    border-radius: 50%;
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
                color: ${({theme}) => theme.primary};
                font-weight: bold;
            }
        }
    }
`
import Styled from "styled-components"

export default Styled.div`
    height: 80vh;
    div.row {
        display: flex;
        div.col {
            width: 50%;
            &:first-child {
                padding-right: 10%;
                h1  {
                    margin: 0px;
                }
            }
            &:last-child {  
                position: relative;
                 &:before {
                    content: "";
                    position: absolute;
                    display: block;
                    top: -300px;
                    left: 30%;
                    width: 940px;
                    height: 940px;
                    border-radius: 50%;
                    background: transparent linear-gradient(153deg, #F9F6FB 0%, #F2DFFF 100%) 0% 0% no-repeat padding-box;
                }
                &:after {
                    content: "";
                    position: absolute;
                    display: block;
                    top: -250px;
                    z-index: -1;
                    left: 14%;
                    width: 940px;
                    height: 940px;
                    border-radius: 50%;
                    background: transparent linear-gradient(27deg, #F9F6FB 0%, #F2DFFF 100%) 0% 0% no-repeat padding-box;
                }
                img:first-child {
                    position: absolute;
                    top: -100px;
                    left: 20%;
                }
                img:last-child {
                    position: absolute;
                    top: 15px;
                    left: 8%;
                }
            }
        }
    }

`
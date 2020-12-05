import Styled from "styled-components";



export default Styled.button`
    background: ${({primary}) => primary ? "#855AAF" : "transparent"};
    color: ${({primary}) => primary ? "#fff" : "#855AAF"};
    padding: 14px 30px;
    border-radius: 5px;
    outline: none;
    font-size: 14px;
    line-height: 16px;
    font-weight: medium;
    box-shadow: none;
    border: none;
    &:hover {
        background: ${({primary}) => primary ? "#350068" : "#fff"};
        color: "#fff";
    }
`
import Styled from "styled-components";

export default Styled.button`
    background: ${({ theme, primary }) =>
      primary ? theme.primary : "transparent"};
    color: ${({ theme, primary }) => (primary ? "#fff" : theme.primary)};
    padding: 14px 30px;
    border-radius: 5px;
    outline: none;
    font-size: 14px;
    line-height: 16px;
    font-weight: medium;
    box-shadow: none;
    border: none;
    &:hover {
        background: ${({ primary }) => (primary ? "#350068" : "transparent")};
        color: "#fff";
    }
`;

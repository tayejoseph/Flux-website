import Styled from "styled-components"


export default Styled.div`
    text-align: center;
    color: #fff;
    position: relative;
    padding-top: 3em;
    height: 671px;
     > div {
        width: 50%;
        margin: 0 auto;
    }
    &:before {
        content: "";
        height: 100%;
        width: 200vw;
        z-index: -1;
        left: -100vw;
        top: 0px;
        position: absolute;
        background: transparent linear-gradient(157deg, #350068 0%, #94009A 100%) 0% 0% no-repeat padding-box;
    }
    p {
        padding: 0 10%;
    }
    .semi-header, a {
        color: #fff;
    }
    a.link--arrow {
        margin: 0 auto;
    }
    p {
        line-height: 28px;
    }

`
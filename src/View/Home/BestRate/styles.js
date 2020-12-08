import Styled from "styled-components"


export default Styled.div`
    text-align: center;
    color: #fff;
    position: relative;
    padding-top: 3em;
    height: 671px;
     > div {
        ${({theme}) => theme.minQuery("lg")} {
            width: 50%;
        }
        margin: 0 auto;
    }
    .link--arrow {
        ${({theme}) => theme.maxQuery("md")} {
            display: none;
        }
        color: #fff;
        .icon {
            color: #fff;
        }
    }
    .img--container__desktop {
        display: none;
    }
    .img--container__mobile {
        position: relative;
        display: inline-block;
        img {
            width: 350px;
            margin-top: -10px;
        }
        &:before {
            content: "";
            position: absolute;
            top: 5px;
            width: 44px;
            height: 95px;
            z-index: -1;
            border: 4px solid #FFFFFF;
            border-radius: 22px;
            opacity: 1;
        }
        &:after {
            content: "";
            position: absolute;
            top: 5px;
            right: 20px;
            z-index: -1;
            width: 44px;
            height: 44px;
            border: 4px solid #FFFFFF;
            opacity: 1;
        }
    }
    ${({theme}) => theme.minQuery("1050px")} {
        .img--container__mobile {
            display: none;
        }
        .img--container__desktop {
            position: relative;
            display: inline-block;
            width: 100%;
            &:before {
                content: "";
                position: absolute;
                top: 5px;
                left: 140px;
                width: 44px;
                z-index: 1;
                height: 95px;
                border: 4px solid #FFFFFF;
                border-radius: 22px;
                opacity: 1;
            }
            &:after {
                content: "";
                position: absolute;
                top: 5px;
                right: 150px;
                width: 44px;
                height: 44px;
                border: 4px solid #FFFFFF;
                opacity: 1;
            }
        }
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
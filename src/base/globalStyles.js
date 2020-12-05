import {createGlobalStyle} from "styled-components"
import {normalize} from "polished"

export default createGlobalStyle`
    ${normalize()};
    * {
        box-sizing: border-box;
        img {
        user-select: none;
        }
    }
    html, body {
        overflow-x: hidden;
        width: 100%;
        height: 100%;
    }
    html {
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        scroll-behavior: smooth;
        ::-webkit-scrollbar {
            display: none;
        }
    }
    body, html {
      font-weight: normal;
      position: relative;
      color: #222222;
      font-family: ${({ theme }) => theme.fontFamily};
      font-size: 16px; 
      line-height: 26px;
      ${({theme}) => theme.minQuery("md")} {
            font-size: 18px;
            line-height: 28px;
      }
    }
    .headline {
        font-size: 60px;
        line-height: 56px;
        font-weight: 800;
        ${({theme}) => theme.maxQuery("md")} {
            font-size: 32px;
            line-height: 35px;
        }
    }
    .title {
        font-size: 45px;
        line-height: 55px;
        font-weight: 800;
    }
    .large--body {
        font-size: 18px;
        line-height: 20px;
    }
    .small--body {
        font-size: 16px;
        line-height: 28px;
    }
    .semi-header {
        font-size: 14px;
        line-height: 28px;
        letter-spacing: 2.8px;
        font-weight: bold;
        color: #855AAF;
    }
    .small--text {
        font-size: 14px;
        line-height: 28px;
    }
    .home {
        width: 90vw;
        max-width: 1200px;
        margin: auto;
    }
    
    a.link--arrow {
        display: flex;
        align-items: center;
        font-size: 14px;
        line-height: 28px;
        width: fit-content;
        text-decoration: none;
        .icon {
            margin-left: 0.5em;
        }
    }
`
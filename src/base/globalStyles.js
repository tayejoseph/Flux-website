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
      font-family: ${({ theme }) => theme.fontFamily};
      font-size: 18px;
      line-height: 28px;
      font-weight: 300;
      ${({theme}) => theme.minQuery("md")} {
          font-size: calc(18px * 1.5);
          line-height: calc(28px * 1.5);
      }
      /* font-weight: normal; */
      position: relative;
      color: #222222;
    }
    
    /* Typography */
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
        ${({theme}) => theme.maxQuery("md")} {
            font-size: 22px;
            line-height: 28px;
        } 
    }
    .large--body {
        font-size: 18px;
        line-height: 20px;
        ${({theme}) => theme.minQuery("md")} {
            font-size: calc(18px * 1.5);
            line-height: calc(20px * 1.5);
        }
    }
    .small--body {
        font-size: 16px;
        line-height: 28px;
        /* ${({theme}) => theme.maxQuery("md")} {
            font-size: calc(16 * 2);
            line-height: calc(16 * 2);
        } */

        ${({theme}) => theme.minQuery("md")} {
            font-size: calc(16px * 1.2);
            line-height: calc(28px * 1.2);

        }

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
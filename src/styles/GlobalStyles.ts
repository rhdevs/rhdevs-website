import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Inter;
    font-weight: 100;
    src: url(../fonts/Inter/static/Inter-Thin.ttf);
  }

  @font-face {
    font-family: Inter;
    font-weight: 200;
    src: url(../fonts/Inter/static/Inter-ExtraLight.ttf);
  }

  @font-face {
    font-family: Inter;
    font-weight: 300;
    src: url(../fonts/Inter/static/Inter-Light.ttf);
  }

  @font-face {
    font-family: Inter;
    font-weight: 400;
    src: url(../fonts/Inter/static/Inter-Regular.ttf);
  }

  @font-face {
    font-family: Inter;
    font-weight: 500;
    src: url(../fonts/Inter/static/Inter-Medium.ttf);
  }

  @font-face {
    font-family: Inter;
    font-weight: 600;
    src: url(../fonts/Inter/static/Inter-SemiBold.ttf);
  }

  @font-face {
    font-family: Inter;
    font-weight: 700;
    src: url(../fonts/Inter/static/Inter-Bold.ttf);
  }

  @font-face {
    font-family: Inter;
    font-weight: 800;
    src: url(../fonts/Inter/static/Inter-ExtraBold.ttf);
  }

  @font-face {
    font-family: Inter;
    font-weight: 900;
    src: url(../fonts/Inter/static/Inter-Black.ttf);
  }

  * {
      font-family: Inter;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
      'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
`

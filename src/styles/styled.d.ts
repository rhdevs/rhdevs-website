import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      common: {
        black: string
        white: string
      }
      primary: string
      secondary: string
    }
    typography: {
      main: string
    }
  }
}

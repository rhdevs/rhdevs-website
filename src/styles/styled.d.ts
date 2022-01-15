import 'styled-components'

declare module 'styled-components' {
  interface FontType {
    min: string
    size: string
    max: string
  }
  export interface DefaultTheme {
    palette: {
      common: {
        black: string
        white: string
        gray: string
      }
      primary: string
      secondary: string
    }
    typography: {
      main: string
      fontSize: {
        main: FontType
        input: FontType
        h2: FontType
        h3: FontType
      }
    }
  }
}

import { createGlobalStyle } from "styled-components"

interface ThemeType {
  primary: string
  secondary: string
  tertiary: string
  fontColor: string
  btnFontColor: string
  accent: string
  light?: string
}

export const lightTheme: ThemeType = {
  primary: "#fff",
  secondary: "#fff",
  tertiary: "#e6e6e6",
  fontColor: "#000",
  btnFontColor: "#000a12",
  accent: "#e6e6e6",
}

export const darkTheme: ThemeType = {
  primary: "#121212",
  secondary: "#181818",
  tertiary: "#282828",
  light: "#939393",
  fontColor: "#d8e1ed",
  btnFontColor: "#282828",
  accent: "#738ADB",
}

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>` 

  * {
    box-sizing: border-box;
    h1 { 
        margin-top: 0;
        margin-bottom: 15px;
    }
  }

  body {
    font-size: 0.9rem;
    font-family: "Montserrat", sans-serif;
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.fontColor};

    @media (max-width: 1000px) {
        font-size: 1.0rem;
    }
  }

  a {
    text-decoration: none;
    color: #000;
  }
`

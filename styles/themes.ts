import { createGlobalStyle } from "styled-components"

interface ThemeType {
  primary: string
  secondary: string
  tertiary: string
  fontColor: string
  secondaryFontColor: string
  btnFontColor: string
  accent: string
  light?: string
  btnHover: string
  hoverFontColor: string
}

export const lightTheme: ThemeType = {
  primary: "#fbfafb",
  secondary: "#f6f6f6",
  tertiary: "#ffffff",
  secondaryFontColor: "#939393",
  fontColor: "#000",
  hoverFontColor: "#ffffff",
  btnFontColor: "#000000",
  btnHover: "#000000",
  accent: "#ff6363",
}

export const darkTheme: ThemeType = {
  primary: "#121212",
  secondary: "#181818",
  tertiary: "#282828",
  light: "#939393",
  fontColor: "#d8e1ed",
  secondaryFontColor: "#d8e1ed",
  btnFontColor: "#fff",
  btnHover: "#ffffff",
  hoverFontColor: "#ffffff",
  accent: "#3dffc5",
}

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>` 

  * {
    box-sizing: border-box;
    h1 { 
        margin-top: 0;
        margin-bottom: 15px;
    }
  }

  article{ flex:1; }
  
  body {
    font-size: 15px;
    font-family: 'Barlow', sans-serif;
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.fontColor};

    @media (max-width: 1000px) {
        font-size: 16px;
    }
  }

  a {
    text-decoration: none;
    color: #000;
  }
`

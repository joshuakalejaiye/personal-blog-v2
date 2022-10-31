import React, { FC } from "react"
import Head from "next/head"
import { ThemeProvider } from "styled-components"
import { useLocalStorage } from "usehooks-ts"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import * as Styled from "./Layout.styles"
import { darkTheme, GlobalStyles, lightTheme } from "../../styles/themes"

interface LayoutProps {
  title: string
  flex?: boolean
  flexDirection?: string
  minHeight?: number
}

const Layout: FC<LayoutProps> = ({
  children,
  title = "Joshua Kalejaiye",
  flex = false,
  flexDirection = "column",
  minHeight,
}) => {
  const [theme, setTheme] = useLocalStorage("dark", false)

  const onChangeTheme = () => {
    // setTheme((currentTheme) => !currentTheme)
    setTheme((currentTheme) => currentTheme)
  }

  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Styled.Layout>
        <Head>
          <title>{title}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header onChangeTheme={onChangeTheme} />
        <Styled.Content
          flex={flex}
          flexDirection={flexDirection}
          minHeight={minHeight}
        >
          {children}
        </Styled.Content>
        <Footer />
      </Styled.Layout>
    </ThemeProvider>
  )
}
export default Layout

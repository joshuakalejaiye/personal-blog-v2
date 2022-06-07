import React, { FC, useState } from "react"
import Head from "next/head"
import { ThemeProvider } from "styled-components"
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
  const [theme, setTheme] = useState<string>("dark")

  const onChangeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="layout">
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
      </div>
    </ThemeProvider>
  )
}
export default Layout

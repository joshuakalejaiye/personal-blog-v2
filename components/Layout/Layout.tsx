import React, { FC } from "react"
import Head from "next/head"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import * as Styled from "./Layout.styles"

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
}) => (
  <div className="layout">
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <Styled.Content
      flex={flex}
      flexDirection={flexDirection}
      minHeight={minHeight}
    >
      {children}
    </Styled.Content>
    <Footer />
  </div>
)

export default Layout

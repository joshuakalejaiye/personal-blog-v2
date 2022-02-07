import React, { FC } from "react"
import Head from "next/head"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import * as Styled from "./Layout.styles"

interface LayoutProps {
  title: string
}

const Layout: FC<LayoutProps> = ({ children, title = "video et games" }) => (
  <div className="layout">
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <Styled.Content>{children}</Styled.Content>
    <Footer />
  </div>
)

export default Layout

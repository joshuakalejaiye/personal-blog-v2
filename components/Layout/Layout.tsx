import React, { FC } from "react"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import * as Styled from "./Layout.styles"

interface LayoutProps {}

const Layout: FC<LayoutProps> = ({ children }) => (
  <div className="layout">
    <Header />
    <Styled.Content>{children}</Styled.Content>
    <Footer />
  </div>
)

export default Layout

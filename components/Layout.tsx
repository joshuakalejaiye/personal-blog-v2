import React, { FC } from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"

interface LayoutProps {}

const Layout: FC<LayoutProps> = ({ children }) => (
  <div className="layout">
    <Navbar />
    <div className="content">{children}</div>
    <Footer />
  </div>
)

export default Layout

import React, { FC } from "react"
import * as Styled from "./Header.styles"

interface NavItemProps {
  route: string
}

const NavItem: FC<NavItemProps> = ({ route }) => {
  if (route === "/") {
    return Styled.Link({
      href: "/",
      name: "Home",
    })
  }

  return Styled.Link({
    href: route,
    name: route[1].toUpperCase() + route.slice(2),
  })
}

const Header: FC = () => {
  const routes = ["/", "/articles", "/contact", "/about"]

  return (
    <Styled.NavBar>
      <Styled.Logo>
        <h1>video et games</h1>
      </Styled.Logo>
      {routes.map((route) => (
        <NavItem key={route} route={route} />
      ))}
    </Styled.NavBar>
  )
}

export default Header

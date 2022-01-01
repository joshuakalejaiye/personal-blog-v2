import React, { FC } from "react"
import * as Styled from "./Header.styles"

interface NavItemProps {
  route: string
}

const NavItem: FC<NavItemProps> = ({ route }) => {
  // eslint-disable-next-line eqeqeq
  if (route == "/") {
    return <Styled.NavItem href="/">Home</Styled.NavItem>
  }

  return (
    <Styled.NavItem href={route}>
      {route[1].toUpperCase() + route.slice(2)}
    </Styled.NavItem>
  )
}

const Header: FC = () => {
  const routes = ["/", "/articles", "/contact", "/about"]

  return (
    <Styled.Header>
      <div className="logo">
        <h1>video et games</h1>
      </div>
      <Styled.NavBar>
        {routes.map((route) => (
          <NavItem key={route} route={route} />
        ))}
      </Styled.NavBar>
    </Styled.Header>
  )
}

export default Header

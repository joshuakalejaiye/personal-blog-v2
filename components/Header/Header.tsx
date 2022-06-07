import React, { FC } from "react"
import { routes } from "../../site-details"
import * as Styled from "./Header.styles"

interface HeaderProps {
  onChangeTheme: () => void
}

interface NavItemProps {
  route: string
}

const NavItem: FC<NavItemProps> = ({ route }) => {
  if (route === "/") {
    return Styled.NavLink({
      href: "/",
      name: "HOME",
    })
  }

  return Styled.NavLink({
    href: route,
    name: route[1].toUpperCase() + route.slice(2).toUpperCase(),
  })
}

const Header: FC<HeaderProps> = ({ onChangeTheme }) => (
  <Styled.NavBar>
    <Styled.DesktopNav>
      <div>
        {Object.values(routes).map((route) => (
          <NavItem key={route} route={route} />
        ))}
      </div>
      <Styled.ThemeToggleButton onClick={onChangeTheme} />
    </Styled.DesktopNav>
    <Styled.MobileNav>
      <div>
        {Object.values(routes).map((route) => (
          <NavItem key={route} route={route} />
        ))}
      </div>
    </Styled.MobileNav>
  </Styled.NavBar>
)

export default Header

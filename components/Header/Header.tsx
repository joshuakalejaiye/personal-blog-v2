import Link from "next/link"
import { useRouter } from "next/router"
import React, { FC } from "react"
import { routes } from "../../site-details"
import * as Styled from "./Header.styles"

interface HeaderProps {
  onChangeTheme: () => void
  shadeOpen: boolean
  toggleShade: () => void
}

interface NavItemProps {
  route: string
  mobile?: boolean
  onClick?: () => void
}

const NavItem: FC<NavItemProps> = ({ route, mobile = false, onClick }) => {
  const { pathname } = useRouter()

  if (route === "/") {
    return Styled.NavLink({
      href: "/",
      name: "Home",
      active: pathname === route,
      mobile,
      onClick,
    })
  }

  return Styled.NavLink({
    href: route,
    name: route[1].toUpperCase() + route.slice(2),
    active: pathname === route,
    mobile,
    onClick,
  })
}

const Header: FC<HeaderProps> = ({ onChangeTheme, shadeOpen, toggleShade }) => (
  <Styled.NavBar>
    <Styled.DesktopNav>
      <div>
        {Object.values(routes).map((route) => (
          <NavItem key={route} route={route} />
        ))}
        <a
          href="http://www.github.com/joshuakalejaiye"
          target="_blank"
          rel="noreferrer"
        >
          <Styled.GitHubLink>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </Styled.GitHubLink>
        </a>
      </div>
      <Styled.ThemeToggleButton onClick={onChangeTheme}>
        <Styled.InnerToggle />
      </Styled.ThemeToggleButton>
    </Styled.DesktopNav>
    <Styled.MobileNav>
      <Link href="/" passHref>
        <Styled.Logo>
          <Styled.LogoText>JK</Styled.LogoText>
        </Styled.Logo>
      </Link>
      <Styled.BurgerNavContainer shadeOpen={shadeOpen}>
        {Object.values(routes).map((route) => (
          <NavItem key={route} route={route} mobile onClick={toggleShade} />
        ))}
      </Styled.BurgerNavContainer>
      <Styled.BurgerShade shadeOpen={shadeOpen} />
      <Styled.BurgerBokeh shadeOpen={shadeOpen} />
      <Styled.Hamburger shadeOpen={shadeOpen} onClick={toggleShade}>
        <Styled.BurgerDot shadeOpen={shadeOpen} />
        <Styled.BurgerDot shadeOpen={shadeOpen} />
        <Styled.BurgerDot shadeOpen={shadeOpen} />
      </Styled.Hamburger>
      <a
        href="http://www.github.com/joshuakalejaiye"
        target="_blank"
        rel="noreferrer"
      >
        <Styled.GitHubLink>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </Styled.GitHubLink>
      </a>
      <Styled.ThemeToggleButton onClick={onChangeTheme}>
        <Styled.InnerToggle />
      </Styled.ThemeToggleButton>
    </Styled.MobileNav>
  </Styled.NavBar>
)
export default Header

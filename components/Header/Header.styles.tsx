import NextLink from "next/link"
import styled from "styled-components"

const NavItem = styled.a`
  margin: 0 10px;
  font-size: 12.5px;
  font-family: Montserrat;
  letter-spacing: 3px;

  @media (min-width: 660px) {
    font-size: 14px;
  }
`

const NavLink = ({ href, name }) => (
  <NextLink href={href} passHref>
    <NavItem>{name}</NavItem>
  </NextLink>
)

const UnifiedNav = styled.div`
  display: flex;
  justify-content: center;
  place-items: center;
`

const DesktopNav = styled(UnifiedNav)`
  @media (max-width: 660px) {
    display: none;
  }
`
const MobileNav = styled(UnifiedNav)`
  @media (min-width: 660px) {
    display: none;
  }
  @media (max-width: 660px) {
    flex-direction: column;
    margin-bottom: 10px;
  }
`

const Logo = styled.h1`
  text-align: center;
  margin: 20px auto;
`

const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #eaeaea;
  margin-bottom: 50px;

  @media (max-width: 660px) {
    flex-direction: column;
    margin-bottom: 10px;
  }
`

export { NavItem, NavBar, Logo, NavLink, DesktopNav, MobileNav }

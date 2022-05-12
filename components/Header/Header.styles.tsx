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
  width: 100%;
`

const DesktopNav = styled(UnifiedNav)`
  margin: 30px;

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

const Logo = styled.div`
  background-color: black;
  width: 60px;
  height: 60px;
  display: block;
  position: absolute;
  left: 0;
  margin-left: 10px;
  @media (max-width: 660px) {
    margin: 10px;
    position: relative;
  }
`

const InnerLogo = styled.div`
  background-color: white;
  margin: 20px;
  width: 20px;
  height: 30px;
  display: flex;
  margin-top: -5px;
  margin-left: -4px;
  box-shadow: 0px 0px 3px 0px gray;
`

const NavBar = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  border-bottom: 1px solid #eaeaea;
  margin-bottom: 50px;

  @media (max-width: 660px) {
    flex-direction: column;
    margin-bottom: 10px;
  }
`

export { NavItem, NavBar, Logo, InnerLogo, NavLink, DesktopNav, MobileNav }

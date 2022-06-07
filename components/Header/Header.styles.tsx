import NextLink from "next/link"
import styled from "styled-components"

const NavBar = styled.nav`
  background-color: ${(props) => props.theme.secondary};
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  border-bottom: 1px solid ${(props) => props.theme.tertiary};
  margin-bottom: 50px;

  @media (max-width: 660px) {
    flex-direction: column;
    margin-bottom: 10px;
  }
`
const NavItem = styled.a`
  margin: 0 10px;
  font-size: 12.5px;
  font-family: Montserrat;
  letter-spacing: 3px;
  color: ${(props) => props.theme.fontColor};

  &:hover {
    color: ${(props) => props.theme.accent};
  }

  @media (min-width: 660px) {
    font-size: 14px;
  }
`

const ThemeToggleButton = styled.div`
  background-color: ${(props) => props.theme.secondary};
  width: 25px;
  height: 24px;
  border-radius: 100%;
  cursor: pointer;
  border: 1.5px solid ${(props) => props.theme.fontColor};
  display: block;
  position: absolute;
  right: 0;
  margin-right: 20px;

  &:hover {
    ${(props) => `
    box-shadow: inset -100px 0 0 0 ${props.theme.fontColor};
    transition: ease-out 0.4s;
    font-weight: light;
    border: 0;
    color: ${props.theme.fontColor};
    `}
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
  margin-top: 20px;
  margin-bottom: 20px;
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
    margin-top: 10px;
    flex-direction: column;
    margin-bottom: 10px;
  }
`

const Logo = styled.div`
  background-color: #212121;
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
  width: 30px;
  height: 50px;
  display: flex;
  margin-top: -5px;
  margin-left: -4px;
  box-shadow: 0px 0px 1px -1px gray;
`

export {
  NavItem,
  NavBar,
  Logo,
  InnerLogo,
  NavLink,
  DesktopNav,
  ThemeToggleButton,
  MobileNav,
}

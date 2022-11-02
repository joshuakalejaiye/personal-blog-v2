import NextLink from "next/link"
import styled from "styled-components"
import { darkTheme, lightTheme } from "../../styles/themes"

const NavBar = styled.nav`
  background-color: ${(props) => props.theme.primary};
  display: flex;
  position: fixed;
  top: 0;
  margin-top: 10px;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 50px;
  z-index: 99999;
  height: 65px;

  @media (max-width: 660px) {
    flex-direction: column;
    margin-bottom: 10px;
  }
`

const NavItem = styled.a<{ active?: boolean }>`
  margin: 0 10px;
  font-size: 12.5px;
  font-family: Barlow;
  color: ${(props) => props.theme.fontColor};
  padding: 9px 15px 11px 15px;
  border-radius: 30px;
  user-select: none;
  ${({ theme, active }) =>
    active && `background-color: ${theme.accent}; color: ${theme.primary};`}

  &:hover {
    background-color: ${(props) => !props.active && props.theme.tertiary};
    transition: ease 0.2s;
  }

  @media (min-width: 660px) {
    font-size: 17px;
  }
`
export const GitHubLink = styled(NavItem)`
  position: absolute;
  right: 0;
  top: 0;
  margin: 14px;
  padding: 5px 9px;

  svg {
    transform: translate(0px, 2px);
    ${({ theme }) => theme === darkTheme && `filter: brightness(0) invert(1);`}
  }
`

const ThemeToggleButton = styled.div`
  min-width: 50px;
  min-height: 25px;
  background-color: ${({ theme }) => theme.accent};
  border-radius: 20px;
  position: absolute;
  right: 0;
  top: 0;
  margin-right: 70px;
  margin-top: 20px;
`

export const InnerToggle = styled.div`
  width: 22px;
  height: 22px;
  margin: 3px 3px 2px 3px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.primary};

  ${({ theme }) =>
    theme === lightTheme && `float: right; transition: ease 0.3s; `}
`

const NavLink = ({ href, name, active }) => (
  <NextLink href={href} passHref>
    <NavItem active={active}>{name}</NavItem>
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

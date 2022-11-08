import NextLink from "next/link"
import styled from "styled-components"
import { darkTheme, lightTheme } from "../../styles/themes"

interface HamburgerProps {
  shadeOpen: boolean
}

const NavBar = styled.nav`
  background-color: ${(props) => props.theme.primary};
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 50px;
  z-index: 99999;
  height: 65px;

  @media (max-width: 770px) {
    flex-direction: column;
    margin-bottom: 10px;
  }
`

const NavItem = styled.a<{ active?: boolean }>`
  margin: 0 10px;
  margin-top: 10px;
  font-size: 17px;
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
`
export const GitHubLink = styled(NavItem)`
  position: absolute;
  right: 0;
  top: 0;
  margin: 14px;
  padding: 5px 9px;

  svg {
    transform: translate(0px, 2px);
    ${({ theme }) =>
      theme === darkTheme
        ? `filter: invert(81%) sepia(69%) saturate(445%) hue-rotate(91deg) brightness(101%) contrast(103%);`
        : `filter: invert(58%) sepia(32%) saturate(3045%) hue-rotate(320deg) brightness(97%) contrast(105%);
`}
  }

  @media (max-width: 770px) {
    margin: 0;
    scale: 1.1;
    margin-top: 10px;
    margin-right: 145px;
  }
`

export const Hamburger = styled.div<HamburgerProps>`
  width: 28px;
  height: 28px;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  background-color: ${({ theme }) => theme.accent};
  position: absolute;
  right: 0;
  top: 0;
  margin-right: 27px;
  margin-top: 14px;
  align-items: center;
  justify-content: center;
  appearance: none;
  background: none;
  outline: none;
  border: 1px solid ${({ theme }) => theme.accent};
  border-radius: 50%;
  z-index: 1001;
  scale: 0.9;
`

export const BurgerDot = styled.div<HamburgerProps>`
  width: 2px;
  height: 2px;
  margin: 2px;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.accent};
`

export const BurgerShade = styled.div<HamburgerProps>`
  width: 72vw;
  height: 2160px;
  background: ${({ theme }) =>
    theme === lightTheme ? theme.tertiary : theme.primary};
  position: absolute;
  z-index: 1000;
  right: 0;
  display: none;
  ${({ shadeOpen }) => shadeOpen === false && `display: none`};
`

export const BurgerBokeh = styled.div<HamburgerProps>`
  width: 100vw;
  height: 2160px;
  background: ${({ theme }) => theme.accent};
  opacity: 0.02;
  position: absolute;
  z-index: 999;

  ${({ shadeOpen }) => shadeOpen === false && `display: none`}
`

export const BurgerNavContainer = styled.div<HamburgerProps>`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  margin-top: 13vh;
  z-index: 1004;

  ${({ shadeOpen }) => shadeOpen === false && `display: none`}
`

export const BurgerNavItem = styled(NavItem)`
  margin-top: 50px;
  min-width: 110px;
  height: 40px;
  scale: 1.7;
  border: none;
  background-color: ${(props) => props.theme.accent};
  transition: ease-out 0.1s;
  outline: none;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  text-align: center;
  font-family: Barlow;
  color: ${(props) => props.theme.btnFontColor};
  user-select: none;
  border-radius: 40px;
  font-size: 18px;
  color: ${(props) => props.theme.primary};

  &:hover {
    background-color: ${(props) => props.theme.accent};
    color: ${(props) => props.theme.primary};
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
  z-index: 1001;

  @media (max-width: 770px) {
    font-size: 17px;
    margin-top: 15px;
    margin-right: 76px;
    scale: 0.94;
  }
`

export const InnerToggle = styled.div`
  width: 24px;
  height: 24px;
  margin: 2px 2px 2px 2px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.primary};

  ${({ theme }) =>
    theme === lightTheme && `float: right; transition: ease 0.3s; `}
`

const NavLink = ({ href, name, active, mobile }) =>
  mobile ? (
    <NextLink href={href} passHref>
      <BurgerNavItem active={active}>{name}</BurgerNavItem>
    </NextLink>
  ) : (
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
  @media (max-width: 770px) {
    display: none;
  }
`
const MobileNav = styled(UnifiedNav)`
  @media (min-width: 770px) {
    display: none;
  }
  @media (max-width: 770px) {
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
  @media (max-width: 770px) {
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

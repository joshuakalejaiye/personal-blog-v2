import Link from "next/link"
import styled from "styled-components"

const NavItem = styled(Link)`
  color: red;
  background-color: red;
`

const NavBar = styled.nav`
  display: flex;
  flex-direction: row;
`

const Header = styled.div`
  display: flex;
  flex-direction: row;
  background-color: whitesmoke;
`

export { NavItem, NavBar, Header }

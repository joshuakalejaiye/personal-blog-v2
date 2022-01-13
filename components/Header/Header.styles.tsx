import NextLink from "next/link"
import styled from "styled-components"

const NavItem = styled.a`
  margin-left: 20px;
`

const Link = ({ href, name }) => (
  <NextLink href={href} passHref>
    <NavItem>{name}</NavItem>
  </NextLink>
)

const Logo = styled.div`
  margin-right: auto;
`

const NavBar = styled.nav`
  display: flex;
  justify-content: flex-end;
  margin: 10 auto 80px;
  padding: 10px 0;
  align-items: flex-end;
  margin-bottom: 60px;
  border-bottom: 1px solid #eaeaea;
`

export { NavItem, NavBar, Logo, Link }

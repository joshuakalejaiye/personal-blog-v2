import Link from "next/link"
import styled from "styled-components"

const Footer = styled.footer`
  display: block;
  text-align: center;
  padding: 30px 0;
  margin-top: 60px;
  color: #777;
  border-top: 1px solid #eaeaea;
`

const FooterNavItem = styled(Link)``

export { Footer, FooterNavItem }

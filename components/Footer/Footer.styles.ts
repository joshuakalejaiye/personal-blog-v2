import Link from "next/link"
import styled from "styled-components"

const Footer = styled.footer`
  display: block;
  text-align: center;
  height: 50px;
  margin-top: 20px;
  color: #777;
  border-top: 1px solid ${(props) => props.theme.tertiary};

  p {
    margin: 0;
    margin-top: 15px;
  }
`

const FooterNavItem = styled(Link)``

export { Footer, FooterNavItem }

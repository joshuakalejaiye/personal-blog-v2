import styled from "styled-components"

const Footer = styled.footer`
  display: flex;
  text-align: center;
  justify-content: center;
  height: 55px;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.accent};
`

const FooterNavItem = styled.p`
  display: block;
  margin-top: 20px;
`

export { Footer, FooterNavItem }

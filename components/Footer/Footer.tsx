import React, { FC } from "react"
import websiteName from "../../site-details"
import * as Styled from "./Footer.styles"

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  const currentYear = new Date().getFullYear()
  return (
    <Styled.Footer>
      <p>
        © {currentYear} - {websiteName}
      </p>
    </Styled.Footer>
  )
}

export default Footer

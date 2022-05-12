import React, { FC } from "react"
import websiteName from "../../site-details"
import * as Styled from "./Footer.styles"

interface FooterProps {}

const Footer: FC<FooterProps> = () => (
  <Styled.Footer>
    <p>Copyright 2022 - {websiteName}</p>
  </Styled.Footer>
)

export default Footer

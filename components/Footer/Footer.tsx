import React, { FC } from "react"
import * as Styled from "./Footer.styles"

interface FooterProps {}

const Footer: FC<FooterProps> = () => (
  <Styled.Footer>
    <p>Copyright 2022 - video et games</p>
  </Styled.Footer>
)

export default Footer

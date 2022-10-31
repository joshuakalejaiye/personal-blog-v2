import React from "react"
import styled from "styled-components"
import NextLink from "next/link"
import { lightTheme } from "../../styles/themes"

interface Props {
  reverse?: boolean
}

const InnerButton = styled.button<Props>`
  margin-top: 10px;
  min-width: 100px;
  height: 35px;
  border: none;
  color: ${(props) => props.theme.fontColor};
  background-color: ${(props) => props.theme.secondary};
  box-shadow: inset 0 0 0 0
    ${(props) => (props.theme === lightTheme ? `black` : props.theme.accent)};
  transition: ease-out 0.3s;
  font-size: 13px;
  outline: none;
  margin-right: 10px;
  letter-spacing: 2px;
  text-align: center;
  font-family: Barlow;
  border-left: 2px solid ${(props) => props.theme.primary};
  padding: 0 10px;
  @media (min-width: 500px) {
    &:hover {
      border-left: 2px solid ${(props) => props.theme.accent};
      font-weight: light;
      color: white;
      cursor: pointer;
    }
  }

  @media (max-width: 500px) {
    &:active {
      background-color: ${(props) => props.theme.accent};
      color: white;
      cursor: pointer;
    }
  }
`

// eslint-disable-next-line import/prefer-default-export
export const OuterButton = ({ href, name, newTab, reverse }) =>
  newTab ? (
    <a href={href} target="_blank" rel="noreferrer">
      <InnerButton>{name}</InnerButton>
    </a>
  ) : (
    <NextLink href={href} passHref>
      <InnerButton reverse={reverse}>{name}</InnerButton>
    </NextLink>
  )

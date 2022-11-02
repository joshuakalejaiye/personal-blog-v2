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
  min-height: 20px;
  border: none;
  background-color: ${(props) => props.theme.tertiary};
  box-shadow: inset 0 0 0 0
    ${(props) => (props.theme === lightTheme ? `black` : props.theme.accent)};
  transition: ease-out 0.1s;
  outline: none;
  margin-right: 10px;
  text-align: center;
  font-family: Barlow;
  padding: 9px 15px 10px 15px;
  color: ${(props) => props.theme.btnFontColor};
  user-select: none;
  border-radius: 40px;
  font-size: 16px;
  border: 2px solid ${({ theme }) => theme.secondary};

  @media (min-width: 500px) {
    &:hover {
      font-weight: light;
      color: ${(props) => props.theme.primary};
      cursor: pointer;
      background-color: ${(props) => props.theme.accent};
    }
  }

  @media (max-width: 500px) {
    &:active {
      background-color: ${(props) => props.theme.accent};
      color: ${(props) => props.theme.btnFontColor};
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

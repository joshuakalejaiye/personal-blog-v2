import React from "react"
import styled from "styled-components"
import NextLink from "next/link"

interface Props {
  reverse?: boolean
}

const InnerButton = styled.button<Props>`
  margin-top: 10px;
  width: 100px;
  height: 35px;
  border: none;
  color: #0e0e0e;
  background-color: white;
  border-radius: 1px;
  box-shadow: inset 0 0 0 0 #0e0e0e;
  transition: ease-out 0.3s;
  font-size: 13px;
  outline: none;
  margin-right: 10px;
  letter-spacing: 3px;
  text-align: center;
  font-family: Montserrat;
  border: 1px solid gray;

  &:hover {
    ${(props) =>
      props.reverse
        ? `box-shadow: inset -100px 0 0 0 #0e0e0e; `
        : `box-shadow: inset 100px 0 0 0 #0e0e0e;`}
    transition: ease-out 0.2s;
    color: white;
    font-weight: light;
    cursor: pointer;
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

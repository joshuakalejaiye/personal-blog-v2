import Image from "next/image"
import styled from "styled-components"
import { lightTheme } from "../../styles/themes"

export const NextImage = styled(Image)`
  position: absolute;
  right: 0px;
  top: 0;
  padding: 0;

  @media (max-width: 750px) {
    position: relative;
    justify-content: center;
  }
`

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-top: 10px;

  div {
    position: unset !important;
  }

  ${NextImage} {
    margin-top: 0px;
    object-fit: contain;
    width: 100% !important;
    height: unset !important;
  }
`

export const Caption = styled.div`
  text-align: center;
  margin-top: 5px;
  font-style: italic;
  margin-bottom: 20px;

  @media (max-width: 750px) {
    margin-top: -10px;
    margin-bottom: 0px;
  }
`

export const MarkdownContentWrapper = styled.div`
  h1:first-child {
    margin-top: -15px !important;
    margin-left: -2px !important;
  }

  h3 {
    margin-top: -15px !important;
    margin-left: 0px !important;
    color: gray;
  }

  h1 {
    margin-top: 50px !important;
  }

  p {
    margin-bottom: 20px !important;
  }

  a {
    color: ${({ theme }) => (theme === lightTheme ? "black" : "white")};
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.accent};
    text-decoration-thickness: 2px;
  }
  a:hover {
    color: ${({ theme }) => theme.accent};
  }
`

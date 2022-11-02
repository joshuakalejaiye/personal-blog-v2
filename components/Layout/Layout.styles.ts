import styled from "styled-components"

interface ContentProps {
  flex?: boolean
  flexDirection: string
  minHeight?: number
  marginBottom?: number
}

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 1000px) {
  }
`

const Content = styled.div<ContentProps>`
  max-width: 960px; // 960px = 100% of the width of the content
  margin: 0 auto; // no top and bottom margin, but equal left and right margin
  ${(props) => props.minHeight && `min-height: ${props.minHeight}px`}
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  padding: 100px;
  margin-bottom: ${({ marginBottom }) => marginBottom ?? 0}px;

  ${(props) => {
    if (props.flex) {
      return ` display: flex;
      flex-direction: ${props.flexDirection};`
    }
    return ""
  }}

  min-height: 100vh;

  @media (max-width: 1000px) {
    padding: 50px 50px 10px 50px;
  }
`

// eslint-disable-next-line import/prefer-default-export
export { Content }

import styled from "styled-components"

interface ContentProps {
  flex?: boolean
  flexDirection: string
  minHeight?: number
}

const Content = styled.div<ContentProps>`
  max-width: 960px; // 960px = 100% of the width of the content
  margin: 0 auto; // no top and bottom margin, but equal left and right margin
  ${(props) => props.minHeight && `min-height: ${props.minHeight}px`}
  align-items: center;
  justify-content: center;
  ${(props) => {
    if (props.flex) {
      return ` display: flex;
      flex-direction: ${props.flexDirection};`
    }
    return ""
  }}
  @media (max-width: 1000px) {
    padding: 40px;
  }
`

// eslint-disable-next-line import/prefer-default-export
export { Content }

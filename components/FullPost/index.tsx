/* eslint-disable react/jsx-fragments */
import MarkdownContent from "../MarkdownContent"
import { MarkdownContentWrapper } from "../MarkdownContent/index.styles"
import * as Styled from "./index.styles"

const FullPost = ({ type, data }) => (
  <div style={{ marginTop: "-15px" }}>
    <Styled.PostType>{type}</Styled.PostType>
    <MarkdownContentWrapper>
      <MarkdownContent width="300px" height="300px">
        {!!data && data?.content}
      </MarkdownContent>
    </MarkdownContentWrapper>
  </div>
)

export default FullPost

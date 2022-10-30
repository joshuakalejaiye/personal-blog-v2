/* eslint-disable react/no-unstable-nested-components */
import ReactMarkdown from "react-markdown"
import * as Styled from "./index.styles"

// by this brilliant person: https://amirardalan.com/blog/use-next-image-with-react-markdown
const MarkdownContent = ({ children, width, height }) => {
  const MarkdownComponents: object = {
    p: (paragraph: { children?: boolean; node?: any }) => {
      const { node } = paragraph

      if (node.children[0].tagName === "img") {
        const image = node.children[0]
        const metastring = image.properties.alt
        const alt = metastring?.replace(/ *\{[^)]*\} */g, "")
        const metaWidth = metastring.match(/{([^}]+)x/)
        const metaHeight = metastring.match(/x([^}]+)}/)
        const imgWidth = metaWidth ? metaWidth[1] : width
        const imgHeight = metaHeight ? metaHeight[1] : height
        const isPriority = metastring?.toLowerCase().match("{priority}")
        const hasCaption = metastring?.toLowerCase().includes("{caption:")
        const caption = metastring?.match(/{caption: (.*?)}/)?.pop()

        return (
          <Styled.ImageContainer>
            <Styled.NextImage
              src={image.properties.src}
              width={imgWidth}
              height={imgHeight}
              className="postImg"
              alt={alt}
              priority={isPriority}
            />
            {hasCaption ? (
              <Styled.Caption className="caption" aria-label={caption}>
                {caption}
              </Styled.Caption>
            ) : null}
          </Styled.ImageContainer>
        )
      }
      return <p>{paragraph.children}</p>
    },
  }

  return (
    <ReactMarkdown components={MarkdownComponents}>{children}</ReactMarkdown>
  )
}

export default MarkdownContent

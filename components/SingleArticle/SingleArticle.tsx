import { useRouter } from "next/router"
import React, { FunctionComponent } from "react"
import { ArticleData } from "../../pages/articles/[id]"
import * as Styled from "./SingleArticle.styles"

interface SingleArticleProps {
  articleData: ArticleData
}

const SingleArticle: FunctionComponent<SingleArticleProps> = ({
  articleData,
}) => {
  const router = useRouter()

  const { title, articleString, subtitle, articleType, date } = articleData
  const cardHeight = 234

  return (
    <Styled.ArticleCard
      height={cardHeight}
      role="button"
      onClick={() => {
        router.push(`articles/${articleString}`)
      }}
      tabIndex={0}
      onKeyDown={() => {
        router.push(`articles/${articleString}`)
      }}
    >
      <Styled.Content>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Subtitle>{subtitle}</Styled.Subtitle>
        <Styled.ArticleType>{articleType}</Styled.ArticleType>
        <Styled.Date>{String(date)}</Styled.Date>
      </Styled.Content>
      <Styled.Image
        src={articleData.banner}
        alt={articleData.bannerAltText}
        width={155}
        height={cardHeight}
      />
    </Styled.ArticleCard>
  )
}

export default SingleArticle

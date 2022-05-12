import { useRouter } from "next/router"
import React, { FunctionComponent } from "react"
import { ArticleData } from "../../ArticleData"

import { routes } from "../../site-details"
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
  // const imageWidth = 155

  return (
    <Styled.ArticleCard
      height={cardHeight}
      role="button"
      onClick={() => {
        router.push(`${routes.Blog}/${articleString}`)
      }}
      tabIndex={0}
      onKeyDown={() => {
        router.push(`${routes.Blog}/${articleString}`)
      }}
    >
      <Styled.Content>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Subtitle>{subtitle}</Styled.Subtitle>
        <Styled.ArticleType>{articleType}</Styled.ArticleType>
        <Styled.Date>{String(date)}</Styled.Date>
      </Styled.Content>
      {/* TODO: "add this when api response is added" */}
      {/* <Styled.Image
        src={articleData.banner}
        alt={articleData.bannerAltText}
        width={imageWidth}
        height={cardHeight}
      /> */}
    </Styled.ArticleCard>
  )
}

export default SingleArticle

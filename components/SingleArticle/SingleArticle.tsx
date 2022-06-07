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

  const {
    title,
    articleString,
    subtitle,
    articleType,
    date,
    banner,
    bannerAltText,
  } = articleData
  const cardHeight = 230
  // const imageWidth = 155

  console.log(banner)

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
        <Styled.Title>{title}</Styled.Title>{" "}
        <Styled.ArticleType>{articleType}</Styled.ArticleType>
        <Styled.Subtitle>{subtitle}</Styled.Subtitle>
        <Styled.Date>{String(date)}</Styled.Date>
      </Styled.Content>
      {banner && (
        <Styled.Image src={banner} height={cardHeight} alt={bannerAltText} />
      )}
    </Styled.ArticleCard>
  )
}

export default SingleArticle

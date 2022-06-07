import { useRouter } from "next/router"
import React, { FunctionComponent, useEffect, useState } from "react"
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

  const [cardHeight, setCardHeight] = useState(230)

  const handleImageResize = (e: any) => {
    if (e.matches) {
      setCardHeight(155)
    } else {
      setCardHeight(230)
    }
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 450px)")
    mediaQuery.addListener(handleImageResize)
    handleImageResize(mediaQuery)
    return () => mediaQuery.removeListener(handleImageResize)
  }, [])

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
      <Styled.ImageContainer>
        {banner && (
          <Styled.Image src={banner} height={cardHeight} alt={bannerAltText} />
        )}
      </Styled.ImageContainer>
    </Styled.ArticleCard>
  )
}

export default SingleArticle

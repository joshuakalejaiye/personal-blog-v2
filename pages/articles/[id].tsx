import React, { FC } from "react"
import { NextRouter, useRouter } from "next/router"
import { useQuery, useQueryClient } from "react-query"
import MediaScore, {
  MediaType,
  MovieTvData,
} from "../../components/MediaScore/MediaScore"

export type ArticleType = "Article" | "Review"
export interface ArticleData {
  title: string
  subtitle: string
  date: Date
  articleType: ArticleType
  content: string
  mediaDetails: {
    mediaId: string
    mediaType: MediaType
    movieTvResponse: MovieTvData
    gameResponse: {}
  }
  articleString: string
  banner: string
  bannerAltText: string
}

interface ArticleProps {
  articleData: ArticleData
}

const routeToContent = (
  mediaType: MediaType,
  mediaId: string,
  router: NextRouter,
) => {
  if (mediaType !== "GAME") {
    router.push(`https://www.imdb.com/title/${mediaId}`)
  } else {
    // This should route to the game api eventually
    router.reload()
  }
}

const fetchPageContent = async (
  articleString: string,
): Promise<ArticleData> => {
  const pageContent = (
    await fetch(`http://localhost:8080/articles/${articleString}`)
  ).json()
  return pageContent
}

const Article: FC<ArticleProps> = () => {
  const router = useRouter()
  const queryClient = useQueryClient()
  const articleString = router.query.id as string

  const queryData = useQuery(
    ["getArticle", articleString],
    () => fetchPageContent(articleString),
    {
      initialData: () => {
        const articles: ArticleData[] = queryClient.getQueryData("articles")
        if (
          articles &&
          Object.keys(articles)?.find((str) => str === articleString)
        ) {
          return articles[articleString]
        }
        return undefined
      },
    },
  )

  const { data, status } = queryData

  if (status === "success") {
    const { title, subtitle, date, articleType, content, mediaDetails } = data
    return (
      <div>
        <h2>{title}</h2>
        <div>
          <h3>{subtitle}</h3>
          <h4>{articleType}</h4>
          <h5>{String(date)}</h5>
          <main>{content}</main>
        </div>
        <MediaScore mediaDetails={mediaDetails} handleClick={routeToContent} />
      </div>
    )
  }

  if (status === "loading") {
    return <div className="center">Loading...</div>
  }

  if (status === "error") {
    return (
      <div className="center">
        Failed to fetch articles{" "}
        <span role="img" aria-label="sad">
          😢
        </span>
      </div>
    )
  }

  //! !!! really bad for SEO do not leave this in production
  return <div />
}

export default Article

import React, { FC } from "react"
import { NextRouter, useRouter } from "next/router"
import { useQuery } from "react-query"
// eslint-disable-next-line import/named
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

// const dummyData = {
//   "no-way-home-delivers-mcu": {
//     title: "Spider-Man: No Way Home delivers",
//     subtitle:
//       "No Way Home ends a thrilling trilogy with a bang, and a promise the MCU has to fulfill",
//     date: new Date("December 17, 2021 13:24:00"),
//     articleType: "Review",
//     content:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus repellat accusantium magnam. Dignissimos deserunt, quasi autem alias sed minus nostrum fugiat hic voluptatibus rem harum, distinctio delectus vero laudantium sit!",
//     mediaId: "tt10872600",
//     mediaType: "MOVIE",
//     articleString: "no-way-home-delivers-mcu",
//   } as ArticleData,
//   "daredevil-is-better-in-2022-mcu": {
//     title: "Daredevil is better in 2022",
//     subtitle: "The man without fear's story hits harder in 2022",
//     date: new Date("December 20, 2021 13:24:00"),
//     articleType: "Review",
//     content:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus repellat accusantium magnam. Dignissimos deserunt, quasi autem alias sed minus nostrum fugiat hic voluptatibus rem harum, distinctio delectus vero laudantium sit!",
//     mediaId: "tt3322312",
//     mediaType: "TV",
//     articleString: "daredevil-is-better-in-2022-mcu",
//   } as ArticleData,
//   "returning-to-bleach-mcu": {
//     title: "Bleach",
//     subtitle:
//       "High school student Ichigo Kurosaki, who has the ability to see ghosts, gains soul reaper powers from Rukia Kuchiki and sets out to save the world from Hollows.",
//     date: new Date("December 24, 2021 13:24:00"),
//     articleType: "Review",
//     content:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus repellat accusantium magnam. Dignissimos deserunt, quasi autem alias sed minus nostrum fugiat hic voluptatibus rem harum, distinctio delectus vero laudantium sit!",
//     mediaId: "tt0434665",
//     mediaType: "TV",
//     articleString: "returning-to-bleach-mcu",
//   } as ArticleData,
// }

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
  const articleString = router.query.id as string

  const queryData = useQuery(["getArticle", articleString], () =>
    fetchPageContent(articleString),
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

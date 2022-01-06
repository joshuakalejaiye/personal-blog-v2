import React, { FC, useState, useEffect } from "react"
import { NextRouter, useRouter } from "next/router"
import MediaScore from "../../components/MediaScore/MediaScore"

export type MediaType = "MOVIE" | "TV" | "GAME"

export type ArticleType = "Article" | "Review"
export interface ArticleData {
  title: string
  subtitle: string
  date: Date
  articleType: ArticleType
  content: string
  mediaId?: string
  mediaType: MediaType
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

const dummyData = {
  "no-way-home-delivers-mcu": {
    title: "Spider-Man: No Way Home delivers",
    subtitle:
      "No Way Home ends a thrilling trilogy with a bang, and a promise the MCU has to fulfill",
    date: new Date("December 17, 2021 13:24:00"),
    articleType: "Review",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus repellat accusantium magnam. Dignissimos deserunt, quasi autem alias sed minus nostrum fugiat hic voluptatibus rem harum, distinctio delectus vero laudantium sit!",
    mediaId: "tt10872600",
    mediaType: "MOVIE",
    articleString: "no-way-home-delivers-mcu",
  } as ArticleData,
  "daredevil-is-better-in-2022-mcu": {
    title: "Daredevil is better in 2022",
    subtitle: "The man without fear's story hits harder in 2022",
    date: new Date("December 20, 2021 13:24:00"),
    articleType: "Review",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus repellat accusantium magnam. Dignissimos deserunt, quasi autem alias sed minus nostrum fugiat hic voluptatibus rem harum, distinctio delectus vero laudantium sit!",
    mediaId: "tt3322312",
    mediaType: "TV",
    articleString: "daredevil-is-better-in-2022-mcu",
  } as ArticleData,
  "returning-to-bleach-mcu": {
    title: "Bleach",
    subtitle:
      "High school student Ichigo Kurosaki, who has the ability to see ghosts, gains soul reaper powers from Rukia Kuchiki and sets out to save the world from Hollows.",
    date: new Date("December 24, 2021 13:24:00"),
    articleType: "Review",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus repellat accusantium magnam. Dignissimos deserunt, quasi autem alias sed minus nostrum fugiat hic voluptatibus rem harum, distinctio delectus vero laudantium sit!",
    mediaId: "tt0434665",
    mediaType: "TV",
    articleString: "returning-to-bleach-mcu",
  } as ArticleData,
}

const getPageContent = (articleString: string) =>
  // fetch content based on articleString !!!!!
  dummyData[articleString]

const Article: FC<ArticleProps> = () => {
  const router = useRouter()
  const articleString = router.query.id as string
  const [pageContent, setPageContent] = useState()

  useEffect(() => {
    setPageContent(getPageContent(articleString))
  }, [articleString])

  if (pageContent) {
    const { title, subtitle, date, articleType, content, mediaId, mediaType } =
      pageContent

    return (
      <div
        role="button"
        tabIndex={0}
        onClick={() => routeToContent(mediaType, mediaId, router)}
        onKeyDown={() => routeToContent(mediaType, mediaId, router)}
      >
        <h2>{title}</h2>
        <div>
          <h3>{subtitle}</h3>
          <h4>{articleType}</h4>
          <h5>{String(date)}</h5>
          <main>{content}</main>
        </div>
        {mediaId && <MediaScore id={mediaId} mediaType={mediaType} />}
      </div>
    )
  }

  return <h3>Loading...</h3>
}

export default Article

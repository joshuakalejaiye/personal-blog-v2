import React, { FC } from "react"
import { useRouter } from "next/router"
import MediaScore from "../../components/MediaScore/MediaScore"

export interface ArticleData {
  title: string
  subtitle: string
  date: Date
  articleType: "Article" | "Review"
  content: string
  mediaId?: string
  mediaType: "MOVIE" | "TV" | "GAME"
  articleString: string
}

interface ArticleProps {
  articleData: ArticleData
}

const dummyData = {
  title: "Spider-Man: No Way Home delivers",
  subtitle:
    "No Way Home ends a thrilling trilogy with a bang, and a promise the MCU has to fulfill",
  date: new Date("December 17, 2021 13:24:00"),
  articleType: "Review",
  content:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus repellat accusantium magnam. Dignissimos deserunt, quasi autem alias sed minus nostrum fugiat hic voluptatibus rem harum, distinctio delectus vero laudantium sit!",
  mediaId: "tt10872600",
  mediaType: "MOVIE",
} as ArticleData

const getPageContent = (articleString) => {
  // eslint-disable-next-line no-unused-vars
  const queryKey = articleString
  // fetch content based on articleString !!!!!
  return dummyData
}

const Article: FC<ArticleProps> = () => {
  const router = useRouter()
  const articleString = router.query.id as string

  const { title, subtitle, date, articleType, content, mediaId, mediaType } =
    getPageContent(articleString)

  return (
    <div>
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

export default Article

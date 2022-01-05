import { useRouter } from "next/router"
import React, { FC } from "react"
import { ArticleData } from "./articles/[id]"

interface ArticlesProps {}

const dummyData = [
  {
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
  },
  {
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
  },
  {
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
  },
] as ArticleData[]

const fetchPageContent = () => {
  // eslint-disable-next-line no-unused-vars
  const articles: ArticleData[] = []
  // fetch content based on articleString !!!!!
  return dummyData
}

const Articles: FC<ArticlesProps> = () => {
  const articles = fetchPageContent()
  const router = useRouter()

  return (
    <div>
      <h1>Articles</h1>
      {articles.map((article) => (
        <div
          role="button"
          onClick={() => {
            router.push(`articles/${article.articleString}`)
          }}
          tabIndex={0}
          onKeyDown={() => {
            router.push(`articles/${article.articleString}`)
          }}
        >
          <h3>{article.title}</h3>
          <main>{article.subtitle}</main>
          <h4>{article.articleType}</h4>
          <h5>{String(article.date)}</h5>
        </div>
      ))}
    </div>
  )
}

export default Articles

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
    title: "Daredevil is better in 2022",
    subtitle: "The man without fear's story hits harder in 2022",
    date: new Date("December 20, 2021 13:24:00"),
    articleType: "Review",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus repellat accusantium magnam. Dignissimos deserunt, quasi autem alias sed minus nostrum fugiat hic voluptatibus rem harum, distinctio delectus vero laudantium sit!",
    mediaId: "tt3322312",
    mediaType: "TV",
    articleString: "daredevil-is-better-in-2022-mcu",
  },
  {
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
          key={article.articleString}
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

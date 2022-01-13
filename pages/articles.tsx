import React, { FC } from "react"
import { useQuery } from "react-query"
import SingleArticle from "../components/SingleArticle/SingleArticle"
import { ArticleData } from "./articles/[id]"

interface ArticlesProps {}

// const dummyData = [
//   {
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
//   },
//   {
//     title: "Daredevil is better in 2022",
//     subtitle: "The man without fear's story hits harder in 2022",
//     date: new Date("December 20, 2021 13:24:00"),
//     articleType: "Review",
//     content:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus repellat accusantium magnam. Dignissimos deserunt, quasi autem alias sed minus nostrum fugiat hic voluptatibus rem harum, distinctio delectus vero laudantium sit!",
//     mediaId: "tt3322312",
//     mediaType: "TV",
//     articleString: "daredevil-is-better-in-2022-mcu",
//   },
//   {
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
//   },
// ] as ArticleData[]

const fetchPageContent = async (): Promise<ArticleData[]> => {
  const pageContent = (await fetch("http://localhost:8080/articles")).json()
  return pageContent
}

const Articles: FC<ArticlesProps> = () => {
  const queryData = useQuery(["getAllArticles"], () => fetchPageContent())

  const { data, status } = queryData

  if (status === "success") {
    return (
      <div>
        <h1>Articles</h1>
        {Object.keys(data).map((article) => (
          <SingleArticle
            key={data[article].articleString}
            articleData={data[article]}
          />
        ))}
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

export default Articles

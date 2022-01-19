import React, { FC, useEffect, useState } from "react"
import SearchBar from "../components/SearchBar/SearchBar"
import SingleArticle from "../components/SingleArticle/SingleArticle"
import useArticles from "../hooks/useArticles"
import { ArticleData } from "./articles/[id]"

interface ArticlesProps {}

const Articles: FC<ArticlesProps> = () => {
  const [data, status] = useArticles()

  const [dataSource, setDataSource] = useState([] as ArticleData[])

  useEffect(() => {
    setDataSource(data)
  }, [data])

  if (status === "success") {
    return (
      <div>
        <h1>Articles</h1>
        <SearchBar handleClick={setDataSource} />
        {dataSource &&
          Object.keys(dataSource).map((article) => (
            <SingleArticle
              key={dataSource[article].articleString}
              articleData={dataSource[article]}
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

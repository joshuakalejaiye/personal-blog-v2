import React, { FC, useEffect, useMemo, useState } from "react"
import styled from "styled-components"
import Layout from "../components/Layout/Layout"
// import SearchBar from "../components/SearchBar/SearchBar"
import SingleArticle from "../components/SingleArticle/SingleArticle"
// import useArticles from "../hooks/useArticles"
import websiteName from "../site-details"
import articleJSON from "../public/articles.json"
import { ArticleData } from "../ArticleData"

const StyledTitle = styled.h1``

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledLister = styled.div``

const Blog: FC = () => {
  const pageTitle = `Articles - ${websiteName}`
  // const [data, status] = useArticles()
  const articleData: ArticleData[] = articleJSON
  const status = "success"
  const data = useMemo(
    () =>
      Object.fromEntries(
        articleData.map((article) => [article.articleString, article]),
      ),
    [articleData],
  )

  const [dataSource, setDataSource] = useState(data)

  useEffect(() => {
    if (status === "success") {
      setDataSource(data)
    }
  }, [data])

  // const onSearch = (data: any) => {
  //   setDataSource(data)
  // }

  if (status === "success") {
    return (
      <Layout title={pageTitle}>
        <StyledContainer>
          <StyledTitle>Blog</StyledTitle>
          {/* <SearchBar handleSearch={onSearch} /> */}
          <StyledLister>
            {dataSource &&
              Object.keys(dataSource).map((article) => (
                <SingleArticle
                  type="BLOG"
                  key={dataSource[article].articleString}
                  articleData={dataSource[article]}
                />
              ))}
          </StyledLister>
        </StyledContainer>
      </Layout>
    )
  }

  if (status === "loading") {
    return <div className="center">Loading...</div>
  }

  if (status === "error") {
    return (
      <div className="center">
        Something went wrong
        <span role="img" aria-label="sad">
          😢
        </span>
      </div>
    )
  }

  //! !!! really bad for SEO do not leave this in production
  return <div />
}

export default Blog

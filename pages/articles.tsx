import React, { FC, useEffect, useState } from "react"
import styled from "styled-components"
import { websiteName } from "."
import Layout from "../components/Layout/Layout"
import SearchBar from "../components/SearchBar/SearchBar"
import SingleArticle from "../components/SingleArticle/SingleArticle"
import useArticles from "../hooks/useArticles"

const StyledTitle = styled.h1``

const StyledContainer = styled.div`
  display: grid;
  place-items: center;
  margin: 0px auto;
`

const StyledLister = styled.div``

const Articles: FC = () => {
  const pageTitle = `${Articles.name} - ${websiteName}`
  const [data, status] = useArticles()

  const [dataSource, setDataSource] = useState(data)

  useEffect(() => {
    if (status === "success") {
      setDataSource(data)
    }
  }, [data, status])

  if (status === "success") {
    return (
      <Layout title={pageTitle}>
        <StyledContainer>
          <StyledTitle>{Articles.name}</StyledTitle>
          <SearchBar handleSearch={setDataSource} />
          <StyledLister>
            {dataSource &&
              Object.keys(dataSource).map((article) => (
                <SingleArticle
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

export default Articles

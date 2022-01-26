import React, { FC, useEffect, useState } from "react"
import styled from "styled-components"
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
  const [data, status] = useArticles()

  const [dataSource, setDataSource] = useState(data)

  useEffect(() => {
    if (status === "success") {
      setDataSource(data)
    }
  }, [data, status])

  if (status === "success") {
    return (
      <StyledContainer>
        <StyledTitle>Articles</StyledTitle>
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

import React, { FC } from "react"
import styled from "styled-components"
import Layout from "../components/Layout/Layout"
import websiteName from "../site-details"
import { SingleArticle } from "../components/SingleArticle"
import gestureKiosk from "../posts/gesture-kiosk"

interface ContactProps {}

const StyledTitle = styled.h1`
  margin-left: 28px;
`

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledLister = styled.div``

const allProjects = [gestureKiosk]

const Projects: FC<ContactProps> = () => {
  const pageTitle = `Projects - ${websiteName}`
  return (
    <Layout title={pageTitle}>
      <StyledContainer>
        <StyledTitle>Projects</StyledTitle>
        <StyledLister>
          {allProjects &&
            Object.keys(allProjects).map((article) => (
              <SingleArticle
                type="PROJECT"
                key={allProjects[article].articleString}
                articleData={allProjects[article]}
              />
            ))}
        </StyledLister>
      </StyledContainer>
    </Layout>
  )
}

export default Projects

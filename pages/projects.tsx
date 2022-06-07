import React, { FC } from "react"
import styled from "styled-components"
import Layout from "../components/Layout/Layout"
import websiteName from "../site-details"
import kioskImage from "../public/images/kioskImage.png"
import { SingleArticle } from "../components/SingleArticle"

interface ContactProps {}

const StyledTitle = styled.h1``

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledLister = styled.div``

const touchlessInterface = {
  title: "Double Module Project",
  subtitle:
    "Created a product ordering kiosk program similar to the ones found in KFC and McDonalds that allows for touchscreen and touch-less interaction using Machine Learning.",
  content:
    "Created a product ordering kiosk program similar to the ones found in KFC and McDonalds that allows for touchscreen and touch-less interaction using Machine Learning. Users can hold their hand in front of the screen and a cursor on the program will mirror their movements, if the user holds the cursor over a button for an extended amount of time, this triggers a selection. The program was developed with React, Node.js, Electron, PostgreSQL etc. If you wish to read my dissertation you can do so below.",
  banner: kioskImage.src,
  client: "University Of Central Lancashire Preston, Lancashire",
  date: "September 2020 to May 2021",
  articleString: "gesture-kiosk",
  links: [
    "https://github.com/joshuakalejaiye/gesture-kiosk-electron",
    "https://drive.google.com/file/d/1j0PG-uoh-M_tf0XRlp3yfWAp1ilX4KIW/view?usp=sharing",
  ],
}

const allProjects = [touchlessInterface]

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

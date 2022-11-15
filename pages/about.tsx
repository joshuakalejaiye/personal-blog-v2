import React, { FC } from "react"
import styled from "styled-components"
import Image from "next/image"
import Layout from "../components/Layout/Layout"
import websiteName from "../site-details"
import selfie from "../public/images/selfie.jpg"
import { Button } from "../components/Button"

interface AboutProps {}
const StyledTitle = styled.h1``

const NextImage = styled(Image)`
  margin-right: 5px !important;
`

const ImageCropper = styled.div`
  height: 150px;
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  min-width: 300px;
  min-height: 300px;
  margin-left: 3px;

  ${NextImage} {
    margin-top: -30px !important;
    margin-right: 10px !important;
  }
`

const About: FC<AboutProps> = () => {
  const pageTitle = `About - ${websiteName}`
  const twLink: string = "http://www.twitter.com/joshuakalejaiye"
  const mailLink: string = "mailto:joshua.s.kalejaiye@gmail.com"

  return (
    <Layout title={pageTitle}>
      <StyledTitle style={{ marginBottom: "20px", marginLeft: "4px" }}>
        About
      </StyledTitle>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ImageCropper>
          <NextImage src={selfie} alt="myself" />
        </ImageCropper>
      </div>

      <div style={{ marginTop: "20px" }}>
        <p>
          I&apos;m an enthusiastic Software Developer used to working in a
          fast-paced environment, I have experience working directly with
          stakeholders and using the requirements gathered to deliver high
          quality production ready solutions.
        </p>
        <p>
          I have a clear understanding of React, JavaScript and have experience
          working with Java and other languages commonly used on the backend.
          I&apos;m highly motivated to learn, grow and excel in Tech. You can
          reach me with these links
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button route={mailLink}>Email</Button>
        <Button route={twLink} newTab>
          Twitter
        </Button>
      </div>
    </Layout>
  )
}

export default About

import React, { FC } from "react"
import styled from "styled-components"
import NextImage from "next/image"
import Layout from "../components/Layout/Layout"
import websiteName from "../site-details"
import selfie from "../public/images/selfie.jpg"
import { Button } from "../components/Button"

interface AboutProps {}
const StyledTitle = styled.h1``

const ImageCropper = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  min-width: 300px;
  min-height: 300px;
`

const About: FC<AboutProps> = () => {
  const pageTitle = `About - ${websiteName}`
  const twLink: string = "http://www.twitter.com/joshuakalejaiye"
  const mailLink: string = "mailto:joshua.s.kalejaiye@gmail.com"

  return (
    <Layout title={pageTitle}>
      <StyledTitle>About</StyledTitle>
      <ImageCropper>
        <NextImage src={selfie} alt="myself" />
      </ImageCropper>
      <p>
        I&apos;m an enthusiastic Software Developer used to working in a
        fast-paced environment, I have experience working directly with
        stakeholders and using the requirements gathered to deliver high quality
        production ready solutions. I have a clear understanding of React,
        JavaScript and have experience working with Java and other languages
        commonly used on the backend. I&apos;m highly motivated to learn, grow
        and excel in Tech. You can get in touch below:
      </p>
      <Button route={mailLink}>Email</Button>
      <Button route={twLink} newTab>
        Twitter
      </Button>
    </Layout>
  )
}

export default About

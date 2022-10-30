import React, { FC } from "react"
import styled from "styled-components"
import NextImage from "next/image"
import Layout from "../components/Layout/Layout"
import websiteName from "../site-details"
import selfie from "../public/images/selfie.jpg"

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

  return (
    <Layout title={pageTitle}>
      <StyledTitle>About</StyledTitle>
      <ImageCropper>
        <NextImage src={selfie} alt="myself" />
      </ImageCropper>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dignissimos
        tempore esse eveniet quisquam at enim nulla explicabo. Saepe ipsum nulla
        architecto veritatis ducimus cupiditate hic voluptatum quam cum
        consequuntur.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dignissimos
        tempore esse eveniet quisquam at enim nulla explicabo. Saepe ipsum nulla
        architecto veritatis ducimus cupiditate hic voluptatum quam cum
        consequuntur.
      </p>
    </Layout>
  )
}

export default About

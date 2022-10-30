import NextImage from "next/image"
import styled from "styled-components"
import { Button } from "../components/Button"
import Layout from "../components/Layout/Layout"
import websiteName from "../site-details"
import hero from "../public/images/hero.jpg"

const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`

const StyledDetails = styled.div`
  max-width: 60%;
  margin: 10px;

  @media (max-width: 1000px) {
    margin: 0;
    margin-bottom: 50px;
    max-width: 100%;
  }
`

const ImageCropper = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  overflow: hidden;
  min-width: 380px;
  min-height: 300px;
  scale: 1.2;
  margin-bottom: 50px;

  img {
    margin-top: -60px !important;
  }
`
const Home = () => {
  const pageTitle = `${websiteName} - Software Engineer`
  const twLink: string = "http://www.twitter.com/joshuakalejaiye"
  const mailLink: string = "mailto:joshua.s.kalejaiye@gmail.com"

  return (
    <Layout flex title={pageTitle}>
      <LandingContainer id="home">
        <ImageCropper>
          <NextImage
            src={hero.src}
            width="464.4"
            height="696"
            className="postImg"
            alt="image of manchester"
          />
        </ImageCropper>
        <StyledDetails>
          <h1>Welcome!</h1>
          <p>
            I&apos;m an enthusiastic Software Developer used to working in a
            fast-paced environment, I have experience working directly with
            stakeholders and using the requirements gathered to deliver high
            quality production ready solutions. I have a clear understanding of
            React, JavaScript and have experiene working with Java and other
            languages commonly used on the backend. I&apos;m highly motivated to
            learn, grow and excel in the Tech. Here you&apos;ll find a few of my
            projects and multiple ways to reach me.
          </p>
          <div
            id="buttons"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button route={mailLink}>EMAIL</Button>
            <Button route={twLink} newTab>
              TWITTER
            </Button>
          </div>
        </StyledDetails>
      </LandingContainer>
    </Layout>
  )
}

export default Home

import NextImage from "next/image"
import styled from "styled-components"
import { Button } from "../components/Button"
import Layout from "../components/Layout/Layout"
import websiteName from "../site-details"
import selfie from "../public/images/selfie.jpg"

const LandingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`

const StyledDetails = styled.div`
  max-width: 60%;
  margin: 50px;

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
  border-radius: 50%;
  min-width: 300px;
  min-height: 300px;
`

//  display: inline;
//     margin: 0 auto;
//     height: 100%;
//     width: auto;

const Home = () => {
  const pageTitle = `${websiteName} - Software Engineer`
  const ghLink: string = "http://www.github.com/joshuakalejaiye"
  const mailLink: string = "mailto:joshua.s.kalejaiye@gmail.com"

  return (
    <Layout flex title={pageTitle}>
      <LandingContainer id="home">
        <StyledDetails>
          <h1>Welcome!</h1>
          <p>
            I&apos;m an enthusiastic Undergraduate Software Developer eager to
            contribute to team projects and achieve success through hard work,
            attention to detail and excellent organizational skills. I have a
            clear understanding of React and JavaScript and am trained in
            multiple C-based languages. I&apos;m highly motivated to learn, grow
            and excel in the Software Development Industry.
          </p>
          <div
            id="buttons"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button route={ghLink} newTab>
              GITHUB
            </Button>
            <Button reverse route={mailLink}>
              EMAIL
            </Button>
          </div>
        </StyledDetails>
        <ImageCropper>
          <NextImage src={selfie} alt="myself" />
        </ImageCropper>
      </LandingContainer>
    </Layout>
  )
}

export default Home

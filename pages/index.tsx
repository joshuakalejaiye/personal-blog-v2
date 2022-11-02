import styled from "styled-components"
import { Button } from "../components/Button"
import Layout from "../components/Layout/Layout"
import websiteName from "../site-details"

const StyledDetails = styled.div`
  @media (max-width: 1000px) {
    margin: 0;
    margin-bottom: 50px;
    max-width: 100%;
  }
`

const Home = () => {
  const pageTitle = `${websiteName} - Software Engineer`

  return (
    <Layout flex title={pageTitle}>
      <StyledDetails>
        <h1
          style={{
            marginTop: "10px",
            userSelect: "none",
          }}
        >
          Joshua Kalejaiye
        </h1>
        <div
          id="buttons"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "-10px",
          }}
        >
          <Button route="/about">About</Button>
          <Button route="/projects">Projects</Button>
        </div>
      </StyledDetails>
    </Layout>
  )
}

export default Home

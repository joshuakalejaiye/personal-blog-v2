import React, { FC } from "react"
import styled from "styled-components"
import Layout from "../components/Layout/Layout"
import websiteName from "../site-details"

interface ContactProps {}
const StyledTitle = styled.h1``

const Contact: FC<ContactProps> = () => {
  const pageTitle = `Contact - ${websiteName}`

  return (
    <Layout title={pageTitle}>
      <StyledTitle>Contact</StyledTitle>
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

export default Contact

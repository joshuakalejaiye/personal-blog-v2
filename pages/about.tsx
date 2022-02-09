import React, { FC } from "react"
import { websiteName } from "."
import Layout from "../components/Layout/Layout"

interface AboutProps {}

const About: FC<AboutProps> = () => {
  const pageTitle = `About - ${websiteName}`

  return (
    <Layout title={pageTitle}>
      <h1>About</h1>
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

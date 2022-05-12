import React, { FC } from "react"
import Layout from "../components/Layout/Layout"
import websiteName from "../site-details"

interface ContactProps {}

const Projects: FC<ContactProps> = () => {
  const pageTitle = `Projects - ${websiteName}`
  return (
    <Layout title={pageTitle}>
      <h1>Projects</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam animi
        cupiditate, suscipit consequatur aliquam commodi molestiae dolore illo
        nesciunt laborum delectus laudantium ad hic perspiciatis ipsum
        aspernatur reiciendis rerum iusto?
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae,
        voluptatum error illo quia fuga ipsum iste quaerat dignissimos a odio
        impedit, culpa quo quasi corporis tempore at esse adipisci autem.
      </p>
    </Layout>
  )
}

export default Projects

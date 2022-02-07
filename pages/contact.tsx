import React, { FC } from "react"
import { websiteName } from "."
import Layout from "../components/Layout/Layout"

interface ContactProps {}

const Contact: FC<ContactProps> = () => {
  const pageTitle = `${Contact.name} - ${websiteName}`
  return (
    <Layout title={pageTitle}>
      <h1>Contact</h1>
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

export default Contact

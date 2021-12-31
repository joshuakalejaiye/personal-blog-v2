import React, { FC } from "react"
import Layout from "../components/Layout"

interface MyAppProps {
  Component: FC
  pageProps: any
}

const MyApp: FC<MyAppProps> = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
)

export default MyApp

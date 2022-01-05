import React, { FC, useState } from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import Layout from "../components/Layout/Layout"

interface MyAppProps {
  Component: FC
  pageProps: any
}

const MyApp: FC<MyAppProps> = ({ Component, pageProps }) => {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default MyApp

import React, { FC, useState } from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import { createStore } from "redux"
import { Provider as ReduxProvider } from "react-redux"
import Layout from "../components/Layout/Layout"
import "../styles/globals.css"
// eslint-disable-next-line import/no-named-as-default
import rootReducer from "../reducers/rootReducers"

const store = createStore(rootReducer)
interface MyAppProps {
  Component: FC
  pageProps: any
}

const MyApp: FC<MyAppProps> = ({ Component, pageProps }) => {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <ReduxProvider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <ReactQueryDevtools initialIsOpen={false} />
      </ReduxProvider>
    </QueryClientProvider>
  )
}

export default MyApp

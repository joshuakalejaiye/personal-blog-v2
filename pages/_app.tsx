import React, { FC, useState } from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import { composeWithDevTools } from "redux-devtools-extension"
import { createStore } from "redux"
import { Provider as ReduxProvider } from "react-redux"

// eslint-disable-next-line import/no-named-as-default
import rootReducer from "../reducers/rootReducers"

const store = createStore(rootReducer, composeWithDevTools())
interface MyAppProps {
  Component: FC
  pageProps: any
}

const MyApp: FC<MyAppProps> = ({ Component, pageProps }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 5000,
          },
        },
      }),
  )

  // fixes broken SSR and theme interaction
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  // prevents ssr flash for mismatched dark mode
  if (!mounted) return null

  return (
    <QueryClientProvider client={queryClient}>
      <ReduxProvider store={store}>
        <Component {...pageProps} />
      </ReduxProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default MyApp

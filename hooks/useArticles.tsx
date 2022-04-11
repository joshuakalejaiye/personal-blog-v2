import { QueryStatus, useQuery } from "react-query"
import { useDispatch, useSelector } from "react-redux"
import { ArticleData } from "../pages/articles/[id]"
import { RootState } from "../reducers/rootReducers"
import mediaUrl from "../urls"

const useArticles = (): [ArticleData[], QueryStatus] => {
  const dispatch = useDispatch()

  const queryData = useQuery(["articles"], async () =>
    (await fetch(`${mediaUrl}/articles`)).json(),
  )

  dispatch({ type: "SET_ARTICLES", data: queryData.data })

  const articles = useSelector((state: RootState) => state.allArticles)

  return [articles, queryData.status]
}

export default useArticles

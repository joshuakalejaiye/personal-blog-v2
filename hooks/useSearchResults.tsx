import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { useQuery } from "react-query"
import { useDispatch } from "react-redux"
import { ArticleData } from "../pages/articles/[id]"

const useSearchResults = (): [
  ArticleData[],
  Dispatch<SetStateAction<string>>,
] => {
  const dispatch = useDispatch()
  const [searchString, search] = useState(null)

  const queryData = useQuery(
    ["searchArticles", searchString],
    async () =>
      (
        await fetch(`http://localhost:8080/search?searchTerm=${searchString}`)
      ).json(),
    { enabled: Boolean(searchString) },
  )

  useEffect(() => {
    dispatch({ type: "SEARCHED", data: Boolean(searchString) })
  }, [searchString, queryData.data, dispatch])

  return [queryData.data, search]
}

export default useSearchResults

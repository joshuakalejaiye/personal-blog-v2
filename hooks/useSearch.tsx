import { Dispatch, SetStateAction, useState } from "react"
import { useQuery } from "react-query"
import { ArticleData } from "../pages/articles/[id]"

// eslint-disable-next-line import/prefer-default-export
const useSearch = (): [ArticleData[], Dispatch<SetStateAction<string>>] => {
  const [filter, setFilter] = useState(null)

  const queryData = useQuery(
    ["searchArticle", filter],
    async () =>
      (await fetch(`http://localhost:8080/search?searchTerm=${filter}`)).json(),
    {
      enabled: Boolean(filter),
    },
  )

  return [queryData.data, setFilter]
}

export default useSearch

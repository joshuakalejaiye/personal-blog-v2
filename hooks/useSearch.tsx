import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { useQuery } from "react-query"
import { useDispatch } from "react-redux"

const useSearch = (): Dispatch<SetStateAction<string>> => {
  const [filter, setFilter] = useState(null)
  const dispatch = useDispatch()
  const queryData = useQuery(
    ["filtered-articles", filter],
    async () =>
      (await fetch(`http://localhost:8080/search?searchTerm=${filter}`)).json(),
    { enabled: Boolean(filter) },
  )

  useEffect(() => {
    dispatch({ type: "SAVE_SEARCH", data: queryData.data })
  }, [queryData.data, dispatch])

  return setFilter
}

export default useSearch

import React, { FC, useEffect, useRef, useState } from "react"
import { useQuery } from "react-query"

interface SearchBarProps {}

const fetchSearchResults = async (searchTerm: string) => {
  const response = await fetch(
    `http://localhost:8080/search?searchTerm=${searchTerm}`,
  )
  const data = await response.json()
  return data
}

const SearchBar: FC<SearchBarProps> = () => {
  const searchBox = useRef<HTMLInputElement>(null)
  const searchButton = useRef<HTMLButtonElement>(null)
  const [filter, setFilter] = useState(undefined)
  const queryData = useQuery(
    ["articles", filter],
    () => fetchSearchResults(filter),
    { enabled: Boolean(filter) },
  )

  useEffect(() => {
    searchBox.current?.addEventListener("keyup", (event) => {
      if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault()
        // Trigger the button element with a click
        document.getElementById("search-button").click()
      }
    })
  }, [])

  useEffect(() => {
    console.log(queryData.data)
  }, [queryData])

  return (
    <div>
      <input ref={searchBox} type="text" />
      <button
        ref={searchButton}
        type="button"
        id="search-button"
        style={{ display: "none", width: "100%", marginBottom: "1rem" }}
        onClick={() => setFilter(searchBox.current.value)}
      >
        Search
      </button>
    </div>
  )
}

export default SearchBar

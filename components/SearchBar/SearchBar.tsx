import React, { FC, Dispatch, SetStateAction, useRef, useEffect } from "react"
import useSearchResults from "../../hooks/useSearchResults"
import { ArticleData } from "../../pages/articles/[id]"

interface SearchBarProps {
  handleClick: Dispatch<SetStateAction<ArticleData[]>>
}

const SearchBar: FC<SearchBarProps> = () => {
  const searchBar = useRef<HTMLInputElement>(null)
  const searchButton = useRef<HTMLButtonElement>(null)

  // TO-DO: hook up useSearch hook
  const [data, search] = useSearchResults()

  useEffect(() => {
    searchBar.current?.addEventListener("keyup", (event) => {
      if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault()
        // Trigger the button element with a click
        document.getElementById("search-button").click()
      }
    })
  }, [])

  useEffect(() => {
    console.log(
      `http://localhost:8080/search?searchTerm=${searchBar.current?.value}`,
      data,
    )
  }, [data])

  return (
    <div>
      <input ref={searchBar} type="text" />
      <button
        ref={searchButton}
        type="button"
        id="search-button"
        style={{ display: "block", width: "100%", marginBottom: "1rem" }}
        onClick={() => {
          search(searchBar.current?.value)
        }}
      >
        Search
      </button>
    </div>
  )
}

export default SearchBar

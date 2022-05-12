import React, { FC, Dispatch, SetStateAction, useRef, useEffect } from "react"
import { ArticleData } from "../../ArticleData"
import useSearchResults from "../../hooks/useSearchResults"
import * as Styled from "./SearchBar.styles"

interface SearchBarProps {
  handleSearch: Dispatch<SetStateAction<ArticleData[]>>
}

const SearchBar: FC<SearchBarProps> = ({ handleSearch }) => {
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
    handleSearch(data)
  }, [data, handleSearch])

  return (
    <div>
      <Styled.SearchBar ref={searchBar} type="text" />
      <Styled.SearchButton
        ref={searchButton}
        type="button"
        id="search-button"
        onClick={() => {
          search(searchBar.current?.value)
        }}
      >
        Search
      </Styled.SearchButton>
    </div>
  )
}

export default SearchBar

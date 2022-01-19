import React, { FC, Dispatch, SetStateAction, useRef } from "react"
// import { useSearch } from "../../hooks"
import { ArticleData } from "../../pages/articles/[id]"

interface SearchBarProps {
  handleClick: Dispatch<SetStateAction<ArticleData[]>>
}

const SearchBar: FC<SearchBarProps> = () => {
  const searchContainer = useRef<HTMLInputElement>(null)
  const searchButton = useRef<HTMLButtonElement>(null)

  // TO-DO: hook up useSearch hook
  // const search = useSearch()

  return (
    <div>
      <input ref={searchContainer} type="text" />
      <button
        ref={searchButton}
        type="button"
        id="search-button"
        style={{ display: "none", width: "100%", marginBottom: "1rem" }}
        onClick={() => {
          // search(searchContainer.current?.value)
        }}
      >
        Search
      </button>
    </div>
  )
}

export default SearchBar

import { ArticleData } from "../pages/articles/[id]"

export interface RootState {
  allArticles: ArticleData[]
  searchResults: ArticleData[]
}

const initialState: RootState = {
  allArticles: [{} as ArticleData],
  searchResults: [{} as ArticleData],
}

const rootReducer = (
  state = initialState,
  action: { type: string; data: any } = {
    type: "",
    data: undefined,
  },
) => {
  switch (action.type) {
    case "SAVE_SEARCH":
      return { ...state, searchResults: action.data }
    case "SET_ARTICLES":
      return { ...state, allArticles: action.data }
    default:
      return state
  }
}

export default rootReducer

import { ArticleData } from "../pages/articles/[id]"

export interface RootState {
  allArticles: ArticleData[]
  searched: Boolean
}

const initialState: RootState = {
  allArticles: [{} as ArticleData],
  searched: false,
}

const rootReducer = (
  state = initialState,
  action: { type: string; data: any } = {
    type: "",
    data: undefined,
  },
) => {
  switch (action.type) {
    case "SEARCHED":
      return { ...state, searched: action.data }
    case "SET_ARTICLES":
      return { ...state, allArticles: action.data }
    default:
      return state
  }
}

export default rootReducer

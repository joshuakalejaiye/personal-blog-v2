import { ArticleData } from "../ArticleData"

export interface RootState {
  articles: ArticleData[]
  search: { searched: Boolean; searchTerm: "-" }
}

const initialState: RootState = {
  articles: [{} as ArticleData],
  search: { searched: false, searchTerm: "-" },
}

const rootReducer = (
  state = initialState,
  action: { type: string; payload: any } = {
    type: "",
    payload: undefined,
  },
) => {
  switch (action.type) {
    case "SEARCHED":
      return {
        ...state,
        search: {
          searched: Boolean(action.payload),
          searchTerm: action.payload,
        },
      }
    case "SET_ARTICLES":
      return { ...state, articles: action.payload }
    default:
      return state
  }
}

export default rootReducer

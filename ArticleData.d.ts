export interface ArticleData {
  title: string
  preview: string
  date: string
  articleType: string
  content: string
  articleString: string
  mediaDetails?: {
    mediaId: string
    mediaType: string
    movieTvResponse: {}
    gameResponse: {}
  }
  banner?: any
  bannerAltText?: string
}

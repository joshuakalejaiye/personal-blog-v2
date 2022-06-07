export interface ArticleData {
  title: string
  subtitle: string
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
// {
//   title: string
//   subtitle: string
//   date: Date
//   articleType: ArticleType
//   content: string
//   mediaDetails: {
//     mediaId: string
//     mediaType: MediaType
//     movieTvResponse: MovieTvData
//     gameResponse: {
//     }
//   }
//   articleString: string
//   banner: string
//   bannerAltText: string
// }

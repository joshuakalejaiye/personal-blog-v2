export interface ArticleData {
  title: string
  subtitle: string
  date: string
  articleType: string
  content: string
  mediaDetails: {
    mediaId: string
    mediaType: string
    movieTvResponse: {}
    gameResponse: {}
  }
  articleString: string
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

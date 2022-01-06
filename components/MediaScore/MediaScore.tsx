import React, { FC } from "react"
import { useQuery } from "react-query"
import Image from "next/image"

interface MediaScoreProps {
  mediaType: "MOVIE" | "TV" | "GAME"
  id: string
}

interface MovieTvData {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Awards: string
  Poster: string
  Ratings: { Source: string; Value: string }[]
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: string
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
  Response: string
}

const fetchMovieTvData = async (mediaId: string): Promise<MovieTvData> =>
  (await fetch(`https://www.omdbapi.com/?i=${mediaId}&apikey=85894d5b`)).json()

const fetchGameData = async (mediaId: string): Promise<MovieTvData> =>
  (await fetch(`https://www.omdbapi.com/?i=${mediaId}&apikey=85894d5b`)).json()

const MovieTvLoader = (mediaId, height) =>
  `https://img.omdbapi.com/?i=${mediaId}&h=${height}&apikey=85894d5b`

const GameLoader = (mediaId, height) =>
  `https://img.omdbapi.com/?i=${mediaId}&h=${height}&apikey=85894d5b`

const MediaScore: FC<MediaScoreProps> = ({ mediaType, id: mediaId }) => {
  const imgLoader = mediaType === "GAME" ? GameLoader : MovieTvLoader
  const fetchMedia = mediaType === "GAME" ? fetchGameData : fetchMovieTvData
  const queryData = useQuery(["getDetails", mediaId], () => fetchMedia(mediaId))
  const imageHeight = 1600

  const { data, status } = queryData

  // use react query instead, find game database

  if (status === "success") {
    const { Title, Ratings } = data

    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h2>{Title}</h2>
          <Image
            src={imgLoader(mediaId, imageHeight)}
            alt={`The poster for ${Title}`}
            width="227"
            height="345"
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h4>Scores</h4>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {Ratings &&
              Ratings.map((rating) => (
                <div key={rating.Source}>
                  <h4>
                    {rating.Source === "Internet Movie Database"
                      ? "IMDB"
                      : rating.Source}
                  </h4>
                  <div>{rating.Value}</div>
                </div>
              ))}
          </div>
        </div>
      </div>
    )
  }

  if (status === "loading") {
    return <div className="center">Loading...</div>
  }

  if (status === "error") {
    return (
      <div className="center">
        We couldnt find this blog post{" "}
        <span role="img" aria-label="sad">
          😢
        </span>
      </div>
    )
  }

  return <div />
}

export default MediaScore

import React, { FC } from "react"
import Image from "next/image"
import { NextRouter, useRouter } from "next/router"

export type MediaType = "MOVIE" | "TV" | "GAME"

export interface MovieTvData {
  title: string
  year: string
  rated: string
  released: string
  runtime: string
  genre: string
  director: string
  writer: string
  actors: string
  plot: string
  language: string
  awards: string
  poster: string
  ratings: { source: string; value: string }[]
  metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  type: string
  dvd: string
  boxOffice: string
  production: string
  website: string
  response: string
}

interface MediaScoreProps {
  handleClick: (
    mediaType: MediaType,
    mediaId: string,
    router: NextRouter,
  ) => void
  mediaDetails: {
    mediaId: string
    mediaType: MediaType
    movieTvResponse: MovieTvData
    gameResponse: {}
  }
}

const MovieTvLoader = (movieTvResponse) => movieTvResponse.poster

const MediaScore: FC<MediaScoreProps> = ({ handleClick, mediaDetails }) => {
  const router = useRouter()

  if (mediaDetails.movieTvResponse) {
    const { movieTvResponse, mediaId, mediaType } = mediaDetails
    const { title, ratings } = movieTvResponse

    return (
      <div
        role="button"
        tabIndex={0}
        onClick={() => handleClick(mediaType, mediaId, router)}
        onKeyDown={() => handleClick(mediaType, mediaId, router)}
        style={{ display: "flex", flexDirection: "row" }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h2>{title}</h2>
          {movieTvResponse && (
            <Image
              src={MovieTvLoader(movieTvResponse)}
              alt={`The poster for ${title}`}
              width="227"
              height="345"
            />
          )}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h4>Scores</h4>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {ratings &&
              ratings.map((rating) => (
                // console.log(rating)
                <div key={rating.source}>
                  <h4>
                    {rating.source === "Internet Movie Database"
                      ? "IMDB"
                      : rating.source}
                  </h4>
                  <div>{rating.value}</div>
                </div>
              ))}
          </div>
        </div>
      </div>
    )
  }
  //! !!! really bad for SEO do not leave this in production
  return <div />
}

export default MediaScore

import React, { FC } from "react"
import Image from "next/image"
import { NextRouter, useRouter } from "next/router"
import * as Styled from "./MediaScore.styles"

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
      <Styled.MediaContainer
        role="button"
        tabIndex={0}
        onClick={() => handleClick(mediaType, mediaId, router)}
        onKeyDown={() => handleClick(mediaType, mediaId, router)}
      >
        <Styled.PosterContainer>
          {movieTvResponse && (
            <Image
              src={MovieTvLoader(movieTvResponse)}
              alt={`The poster for ${title}`}
              width="227"
              height="345"
            />
          )}
        </Styled.PosterContainer>
        <Styled.TextContainer>
          <Styled.MediaTitle>{title}</Styled.MediaTitle>
          <Styled.ScoresContent>
            {ratings &&
              ratings.map((rating) => (
                // console.log(rating)
                <Styled.ScoresLister key={rating.source}>
                  <Styled.RatingSource>
                    {rating.source === "Internet Movie Database"
                      ? "IMDB"
                      : rating.source}
                  </Styled.RatingSource>
                  <Styled.RatingValue>{rating.value}</Styled.RatingValue>
                </Styled.ScoresLister>
              ))}
          </Styled.ScoresContent>
        </Styled.TextContainer>
      </Styled.MediaContainer>
    )
  }
  //! !!! really bad for SEO do not leave this in production
  return <div />
}

export default MediaScore

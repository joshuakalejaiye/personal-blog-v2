import styled from "styled-components"

const MediaContainer = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #e6e6e6;
  border-radius: 1px;
  color: #000;
  max-width: 500px;
  max-height: 450px;
  margin: 30px auto;

  &:hover {
    background-color: whitesmoke;
    cursor: pointer;
  }

  &:active {
    background-color: #212121;
    p > & {
      background-color: white;
    }
  }
`

const PosterContainer = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
`

const ScoresContent = styled.div`
  display: flex;
  flex-direction: column;
`

const ScoreTitle = styled.h4``

const RatingSource = styled.h4``

const RatingValue = styled.p``

const ScoresLister = styled.div``

const MediaTitle = styled.h3``

export {
  MediaTitle,
  ScoreTitle,
  MediaContainer,
  PosterContainer,
  TextContainer,
  ScoresContent,
  ScoresLister,
  RatingSource,
  RatingValue,
}

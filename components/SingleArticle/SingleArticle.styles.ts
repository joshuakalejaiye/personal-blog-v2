import styled from "styled-components"

export interface CardProps {
  height: number
}

const ArticleCard = styled.div<CardProps>`
  position: relative;
  display: flex;
  flex-direction: row;
  border-radius: 4px;
  padding: 5px 15px;
  margin-bottom: 15px;
  background-color: ${(props) => props.theme.secondary};
  min-height: ${(props) => props.height + 2}px;
  border-left: 2px solid ${(props) => props.theme.primary};

  &:hover {
    cursor: pointer;
    border-left: 2px solid ${(props) => props.theme.accent};
  }

  //for mobile
  @media (max-width: 750px) {
    flex-direction: column;
    min-height: 450px;
    text-align: center;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 80px;
  //for mobile
  @media (max-width: 750px) {
    flex-direction: column;
    color: ${(props) => props.theme.fontColor};
    margin-right: 0;
  }
`

const Title = styled.h2`
  color: ${(props) => props.theme.accent};
  margin-bottom: 2px;

  @media (min-width: 750px) {
    padding-right: 280px;
  }

  @media (max-width: 750px) {
    padding-right: 0px;
  }
`

const Subtitle = styled.p`
  //for desktop
  color: ${(props) => props.theme.light};
  padding-bottom: 10px;
  @media (min-width: 750px) {
    padding-right: 280px;
  }

  @media (max-width: 750px) {
    padding-right: 0px;
  }
`

const ArticleType = styled.p`
  color: ${(props) => props.theme.accent};
  margin: 0;
  font-style: italic;
`

const Date = styled.p`
  position: absolute;
  bottom: 0;
  color: ${(props) => props.theme.light};

  @media (max-width: 750px) {
    position: relative;
  }
`

const Image = styled.img`
  position: absolute;
  right: 0px;
  top: 0;
  margin: 0;
  padding: 0;

  @media (max-width: 750px) {
    position: relative;
    justify-content: center;
  }
`

const ImageContainer = styled.div``

export {
  Title,
  Subtitle,
  ArticleType,
  ArticleCard,
  Date,
  Image,
  Content,
  ImageContainer,
}

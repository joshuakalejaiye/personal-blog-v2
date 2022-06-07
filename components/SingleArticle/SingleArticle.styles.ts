import styled from "styled-components"

export interface CardProps {
  height: number
}

const ArticleCard = styled.div<CardProps>`
  position: relative;
  display: flex;
  flex-direction: row;
  border: 1px solid ${(props) => props.theme.tertiary};
  border-radius: 4px;
  padding: 5px 15px;
  margin-bottom: 15px;
  background-color: ${(props) => props.theme.secondary};
  min-height: ${(props) => props.height + 2}px;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.tertiary};
  }

  //for mobile
  @media (max-width: 785px) {
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
  @media (max-width: 785px) {
    flex-direction: column;
    color: ${(props) => props.theme.fontColor};
    margin-right: 0;
  }
`

const Title = styled.h2`
  color: ${(props) => props.theme.accent};
  margin-bottom: 2px;
`

const Subtitle = styled.p`
  //for desktop
  color: ${(props) => props.theme.light};

  @media (min-width: 785px) {
    padding-right: 280px;
  }

  @media (max-width: 785px) {
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

  @media (max-width: 785px) {
    position: relative;
  }
`

const Image = styled.img`
  position: absolute;
  right: 0px;
  top: 0;
  margin: 0;
  padding: 0;

  @media (max-width: 785px) {
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

import styled from "styled-components"
import { lightTheme } from "../../styles/themes"

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
  min-height: ${({ height }) => height + 4}px;
  border: 2px solid ${({ theme }) => theme.secondary};
  border-radius: 10px;
  ${({ theme }) =>
    theme === lightTheme && `background-color: ${theme.tertiary}; `}

  h2, p {
    margin-left: 10px;
  }

  &:hover {
    border-radius: 20px;
    border-left: 2px solid ${({ theme }) => theme.accent};
    border-radius: 0px;
    cursor: pointer;
  }

  //for mobile
  @media (max-width: 770px) {
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
  @media (max-width: 770px) {
    flex-direction: column;
    color: ${({ theme }) => theme.fontColor};
    margin-right: 0;
  }
`

const Title = styled.h2`
  color: ${({ theme }) => theme.fontColor};
  margin: 8px 12px 4px 10px;

  @media (min-width: 770px) {
    padding-right: 280px;
  }

  @media (max-width: 770px) {
    padding-right: 0px;
  }
`

const Subtitle = styled.p`
  color: ${({ theme }) => theme.light};
  margin-top: 10px;
  padding-bottom: 10px;
  @media (min-width: 770px) {
    padding-right: 310px;
  }

  @media (max-width: 770px) {
    padding-right: 0px;
  }
`

const ArticleType = styled.p`
  color: ${({ theme }) => theme.accent};
  margin: 0;
  font-style: italic;
`

const Date = styled.p`
  position: absolute;
  bottom: 0;
  margin-bottom: 15px;

  color: ${({ theme }) => theme.fontColor};

  @media (max-width: 770px) {
    position: relative;
  }
`

const Image = styled.img`
  position: absolute;
  right: 0px;
  top: 0;
  margin: 0;
  padding: 0;

  @media (max-width: 770px) {
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

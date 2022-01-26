import styled from "styled-components"

export interface CardProps {
  height: number
}

const ArticleCard = styled.div<CardProps>`
  position: relative;

  display: flex;
  flex-direction: row;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  padding: 5px 15px;
  margin-bottom: 15px;
  background-color: #fff;
  min-height: ${(props) => props.height + 1}px;
  min-width: 960px;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 0px 3px #e0e0e0;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.h2``

const Subtitle = styled.p`
  padding-right: 280px;
`

const ArticleType = styled.p``

const Date = styled.p``

const Image = styled.img`
  position: absolute;
  right: 0px;
  top: 0px;
  margin: 0;
  padding: 0;
`

export { Title, Subtitle, ArticleType, ArticleCard, Date, Image, Content }

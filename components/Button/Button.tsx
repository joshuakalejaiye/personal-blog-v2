import * as Styled from "./Button.styles"

const Button = ({
  route,
  children,
  newTab,
  reverse,
}: {
  route: string
  children: string
  newTab?: boolean
  reverse?: boolean
}) =>
  Styled.OuterButton({
    href: route,
    name: children,
    newTab,
    reverse,
  })

export default Button

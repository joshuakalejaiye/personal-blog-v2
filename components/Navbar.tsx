import Link from "next/link"
import React, { FC } from "react"

interface NavbarProps {}

interface NavItemProps {
  route: string
}

const NavItem: FC<NavItemProps> = ({ route }) => {
  // eslint-disable-next-line eqeqeq
  if (route == "/") {
    return <Link href="/">Home</Link>
  }

  return <Link href={route}>{route[1].toUpperCase() + route.slice(2)}</Link>
}

const Navbar: FC<NavbarProps> = () => {
  const routes = ["/", "/articles", "/contact", "/about"]

  return (
    <nav>
      <div className="logo">
        <h1>video et games</h1>
      </div>
      {routes.map((route) => (
        <NavItem route={route} />
      ))}
    </nav>
  )
}

export default Navbar

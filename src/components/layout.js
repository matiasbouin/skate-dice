import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  return (
    <div
      style={{
        textAlign: "center",
        margin: `3rem auto`,
        maxWidth: 650,
        padding: `0 1rem`,
      }}
    >
      {/* highlight-start */}
      <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline` }}>SKATE DICE</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
        </ul>
      </header>
      {/* highlight-end */}
      {children}
      <footer
        style={{
          textAlign: "center",
          marginTop: `1.5rem`,
        }}
      >
        This is a fast and responsive web based Skate Dice game
      </footer>
    </div>
  )
}

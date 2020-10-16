import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default function About() {
  return (
    <Layout>
      <h2>About Skate Dice</h2>
      <p>
        Skate Dice was originally a set of dices that displayed random skate
        tricks whenever rolled. This meant fun times where granted (by playing
        1v1 skate, betting on landing tricks or just practicing random
        maneuvers). So in this version, there are no dices, but the principle
        remains the same, and I personally added some key features that where
        laking on the original game, such as making an all time accesible
        version of it via web and making it free to play. Just click on the GIVE
        ME A TRICK button and enjoy!
      </p>
      <h2>About me</h2>
      <p>
        I’m Matias, a 22 year old Software Developer based in Argentina. If you
        want to know more about me or my other projects follow{" "}
        <a target="_blank" href="https://personal-portfolio-chi.vercel.app/">
          this link to my portfolio website.
        </a>
      </p>
      <Link to="/">Home</Link>
    </Layout>
  )
}

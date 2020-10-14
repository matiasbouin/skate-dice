import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default function Home() {
  const random = (min, max) => {
    return Math.round(Math.random() * (max - min) + min)
  }

  const [position, setPosition] = useState("X")
  const [bodyRotation, setBodyRotation] = useState("X")
  const [boardRotation, setBoardRotation] = useState("X")
  const [flip, setFlip] = useState("X")

  const setearPosicion = () => {
    setPosition(positions[random(0, 3)])
  }

  const setearBodyRotation = () => {
    setBodyRotation(bodyRotations[random(0, 2)])
  }

  const setearBoardRotation = () => {
    setBoardRotation(boardRotations[random(0, 3)])
  }

  const setearFlip = () => {
    setFlip(flips[random(0, 4)])
  }

  const handleClick = () => {
    setearPosicion()
    setearBodyRotation()
    setearBoardRotation()
    setearFlip()
  }

  const positions = ["Nollie", "Switch", "Regular", "Fakie"]
  const bodyRotations = ["Frontside", "Backside", ""]
  const boardRotations = ["180", "360", ""]
  const flips = ["Kickflip", "Heelflip", "Shove it", "Ollie", ""]

  return (
    <Layout>
      <h1>WELCOME TO SKATE DICE</h1>

      <br></br>

      <p>{position}</p>
      <p>{bodyRotation}</p>
      <p>{boardRotation}</p>
      <p>{flip}</p>

      <br></br>

      <button
        style={{
          backgroundColor: "white",
          color: "black",
          borderRadius: "8px",
          border: "2px solid",
          width: "50%",
        }}
        onClick={handleClick}
      >
        ROLL!
      </button>
    </Layout>
  )
}

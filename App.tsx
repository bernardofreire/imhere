import { StatusBar } from "react-native"
import { Home } from "./src/screens/Home"
import React from "react"


export default function App() {
  return (
    <>
      {/* Status bar para controlar a barra que fica em cima do celular */}
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Home />
    </>
  )
}

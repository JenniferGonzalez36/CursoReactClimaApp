import React from "react"
import { AppClima } from "./components/AppClima";
import { ClimaProvider } from "./context/ClimaProvider";

function App() {

  return (
    <ClimaProvider>
      <header>
        <h1>Buscador de Clima</h1>
        <h2 className="developer">~ Por: Jennifer González ~</h2>
        <a href="https://jg36software.com/my-software.php?item=24-react" className="return-button">⬅ Regresar a mi página</a>

      </header>
      <AppClima />
    </ClimaProvider>
  )
}

export default App

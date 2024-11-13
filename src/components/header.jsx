import React from 'react'
import imagemain from "../src/images/fondo.jpg";


export  function cabeceraheader() {
  return (
   <>
    <header
        style={{
          justifyContent: "center",
         
          justifyItems: "center",
        }}
      >
        <h1 style={{ textAlign: "center" }}>DUOMANIA 2025</h1>
        <img src={imagemain} alt="Imagen-Portada" />
      </header>
      </>
  )
}

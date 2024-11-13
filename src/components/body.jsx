import React from 'react'
import imagemain from "../src/images/fondo.jpg";


import img3 from "../src/images/foto9.jpg";
import img4 from "../src/images/foto5.jpg";
import img5 from "../src/images/foto6.jpg";

import img7 from "../src/images/fotofinal.jpg";
import img8 from "../src/images/foto4.jpg";
export  function cuerpobody() {
  return (
    <>
     <body  style={{
          justifyContent: "center",
          
          justifyItems: "center",
        }}>
        <div style={{display:'flex', justifyContent:'space-around'}}>
          <div style={{textAlign:'center', margin:'20px'}}>
            <h3 >DeoMania Ica</h3>
            <img width={250} src={img5} alt="Imagen-Portada" />
          </div>
          <div style={{textAlign:'center', margin:'20px'}}>
            <h3>DeoMania Lima</h3>
            <img  width={234} src={img4} alt="Imagen-Portada" />
          </div>
          <div style={{textAlign:'center', margin:'20px'}}>
            <h3>DeoMania Pasco</h3>
            <img width={233} src={img3} alt="Imagen-Portada" />
          </div>
        </div>
        <div
          style={{
            justifyContent: "center",
           
            justifyItems: "center",
          }}
        >
          <h1>DeoMania Saga</h1> <img src={imagemain} alt="Imagen-Portada" />
        </div>
        <div style={{textAlign:'center'}} >
          <div style={{ display: "flex", justifyContent:'space-evenly' }}>
            <div>
              <img width={390} src={img7} alt="Imagen-Portada" />
              <h3>DeoMania Saga</h3>
            </div>
            <div style={{paddingLeft:'120px'}}>
            <img  width={322} src={img8} alt="Imagen-Portada" />
            <h3>DeoMania Saga</h3>
            </div>
          </div>
         
        </div>
      </body></>
  )
}

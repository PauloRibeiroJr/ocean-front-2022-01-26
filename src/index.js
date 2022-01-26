import React from "react";
import reactDOM from "react-dom";
import HelloWorld from "./components/HelloWorld";



function HelloJampa(){
  return(
    <p>Não sou de Jampa</p>
  )
}

reactDOM.render(
  <div>
  <HelloWorld nome={"Paulo"} sobrenome={"Ribeio Jr"} idade={48}/>
  <HelloJampa/>
  </div>,
  document.getElementById('root')
)
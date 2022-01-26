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
  <HelloWorld/>
  <HelloJampa/>
  </div>,
  document.getElementById('root')
)
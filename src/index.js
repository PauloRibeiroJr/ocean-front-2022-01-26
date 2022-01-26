import React from "react";
import reactDOM from "react-dom";

function HelloWorld(){
  return(
    <p>Hello World funciton</p>
  )
}

reactDOM.render(
  <HelloWorld/>,
  document.getElementById('root')
)
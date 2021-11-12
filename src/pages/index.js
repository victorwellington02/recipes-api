import React from 'react'
import "./style.css";

import {Header} from "../components/Header"
import {Main} from "../components/Main"

export default function Index({data}){
  return(
    <div>
    {console.log("to aqui", data)}
    <Header />
    <Main />
    </div>
  )
}
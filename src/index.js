import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "bootstrap/dist/css/bootstrap.min.css"
import { BudgetsProvider } from "./contexts/BudgetsContext"
import {  BrowserRouter as Router,Route, Routes } from "react-router-dom"
import Homepage from "./Homepage"

ReactDOM.render(
  <React.StrictMode>
    <BudgetsProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage/>} ></Route>
          <Route path="/create_budget" element={<App/>} ></Route>
        </Routes>
      </Router>
      
    </BudgetsProvider>
  </React.StrictMode>,
  document.getElementById("root")
)

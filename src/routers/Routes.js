import * as React from 'react'
import Home from "../container/Home";
import { Routes, Route } from "react-router-dom";
import Capitles from '../container/Capitles';


function RMRoutes() {

  return (
    <Routes>
      <Route path="/" element={< Home />} />
      < Route path="/capitles" element={< Capitles />} />
    </Routes>

  )
}
export default RMRoutes;
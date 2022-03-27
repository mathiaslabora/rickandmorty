import * as React from 'react'
import Home from "./container/Home";
import {Routes, Route} from "react-router-dom";
import Capitles from './container/Capitles';

function App() {
  return(

    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/capitles" element={<Capitles />} />
  </Routes>

  )
}
export default App;

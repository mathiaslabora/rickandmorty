import * as React from 'react'
import Home from "./container/Home";
import {Router, Route} from "react-router-dom";
import Capitles from './container/Capitles';

function App() {
  return(

    <Router basename={process.env.PUBLIC_URL}>
    <Route path="/" elemeprocessnt={<Home />} />
    <Route path="/capitles" element={<Capitles />} />
  </Router>

  )
}
export default App;

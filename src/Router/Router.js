import { BrowserRouter, Route, Routes } from "react-router-dom"
import SimpleInput from "../Login/Login"

const Router=()=>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<SimpleInput/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
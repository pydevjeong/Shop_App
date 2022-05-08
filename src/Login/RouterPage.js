import { Fragment } from "react"
import { Route, Routes } from "react-router-dom"
import MainHeader from "../components/MainHeader"
import SignIn from "./SignIn"
import SignUp from "./SignUp"


const RouterPage=()=>{

  return(
    <Fragment>
      <MainHeader/>
      <Routes>
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
    </Fragment>
  )

}

export default RouterPage
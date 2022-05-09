import { Fragment, useState } from "react"
import { Route, Routes } from "react-router-dom"
import App from "../App"
import MainHeader from "../components/MainHeader"
import SignIn from "./SignIn"
import SignUp from "./SignUp"


const RouterPage=()=>{
  const [isValid,setIsValid]=useState(false);

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
import { Route,Router,Routes } from "react-router-dom"
import SimpleInput from "../Login/Login"

function Routing(){
  return(
    <div>
      <Routes>
        <Route path='/login' element={<SimpleInput/>}/>
      </Routes>
    </div>
  )
}

export default Routing
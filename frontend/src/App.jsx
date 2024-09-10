import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'

import './App.css'
import Login from './components/Login'
import Registration from './components/Registration'
import ResetPassword from './components/ResetPassword'
import NeedHelp from './components/NeedHelp'
import FormStudent from './components/FormStudent'
function App() {

  return (
    <>
      <Router>
          <Routes>
              <Route path='/' exact element={<Login/>}/>
              <Route path='/student-registration' exact element={<Registration/>}/>
              <Route path='/reset_password' exact element={<ResetPassword/>}/>
              <Route path='/need_help' exact element={<NeedHelp/>}/>
              <Route path='/form_student' exact element={<FormStudent/>}/>
          </Routes>
      </Router>

    </>
  )
}

export default App

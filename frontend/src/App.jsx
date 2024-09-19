import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'

import './App.css'
import Login from './components/Login'
import StudentRegistration from './components/StudentRegistration'
import StagiaireRegistration from './components/StagiaireRegistration'
import TeacherRegistration from './components/TeacherRegistration'
import StudentBoard from './components/StudentBoard'
import ResetPassword from './components/ResetPassword'
import NeedHelp from './components/NeedHelp'
import FormStudent from './components/FormStudent'
function App() {

  return (
    <>
      <Router>
          <Routes>
              <Route path='/' exact element={<Login/>}/>
              <Route path='/student-registration' exact element={<StudentRegistration/>}/>
              <Route path='/stagiaire-registration' exact element={<StagiaireRegistration/>}/>
              <Route path='/teacher-registration' exact element={<TeacherRegistration/>}/>
              <Route path='/student-board' exact element={<StudentBoard/>}/>
              <Route path='/reset_password' exact element={<ResetPassword/>}/>
              <Route path='/need_help' exact element={<NeedHelp/>}/>
              <Route path='/form_student' exact element={<FormStudent/>}/>
          </Routes>
      </Router>

    </>
  )
}

export default App

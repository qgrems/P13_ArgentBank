import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom"
import React from 'react'
import { HomePage } from './Page/homePage';
import { LoginPage } from './Page/loginPage';
import { ProfilePage } from './Page/profilePage';
import {  tokens } from './redux/redux';
import { Provider } from 'react-redux';
import { ProtectedRoutes, ProtectedRoutesLogin } from './Page/protectedroutes';
export default function App() {
  return (
    <Provider store={tokens}>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
          <Route element={<ProtectedRoutesLogin/>}>
            <Route exact path="/login" element={<LoginPage></LoginPage>} />
          </Route>
          <Route element={<ProtectedRoutes/>}>
          <Route exact path="/profile" element={<ProfilePage></ProfilePage>}></Route>
        </Route>
      </Routes>
    </Provider>
  )
}

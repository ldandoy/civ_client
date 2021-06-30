import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Default from './Layouts/Default'
import Auth from './Layouts/Auth'

import Home from './pages/Home'
import MyAccount from './pages/MyAccount'
import Login from './pages/Login'
import Logout from './pages/Logout'
import Register from './pages/Register'
import Forgotpassword from './pages/Forgotpassword'
import Active from './pages/Active'
import Univers from './pages/Univers'

import Toast from './components/Toast/Toast'

import { refreshToken } from './redux/actions/authActions'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(refreshToken())
  }, [dispatch])

  return (
    <Router forceRefresh={true}>
      <Switch>
        <Route exact={true} path="/">
          <Default>
            <Home />
          </Default>
        </Route>
        <Route path="/my-account">
          <Default isPrivate={true}>
            <MyAccount />
          </Default>
        </Route>
        <Route path="/univers">
          <Default isPrivate={true}>
            <Univers />
          </Default>
        </Route>
        <Route path="/login">
          <Auth>
            <Login />
          </Auth>
        </Route>
        <Route path="/logout">
          <Auth>
            <Logout />
          </Auth>
        </Route>
        <Route path="/register">
          <Auth>
            <Register />
          </Auth>
        </Route>
        <Route path="/forget_password">
          <Auth>
            <Forgotpassword />
          </Auth>
        </Route>
        <Route path="/active/:slug">
          <Auth>
            <Active />
          </Auth>
        </Route>
      </Switch>
      <Toast />
    </Router>
  );
}

export default App;

import React, { useEffect, useMemo, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login";
import GlobalStyle from "./components/GlobalStyle";
import Navbar from "./components/Navbar";
import api from "./api";
import { useDispatch, useSelector } from "react-redux";
import { Admin } from './actions/admin'
import { Logged } from './actions/logged'
import { UserContext } from './context/UserContext'
import { ClassesContext } from "./context/ClassesContext";

function App() {
  const [user, setUser] = useState(null)
  const [classes, setClasses] = useState(null)
  const value1 = useMemo(() => ({ user, setUser }), [user, setUser])
  const value2 = useMemo(() => ({ classes, setClasses }), [classes, setClasses])

  const dispatch = useDispatch()
  const isLogged = useSelector(state => state.logged)
  //const isAdmin = useSelector(state => state.admin)
  const [isNotLogged, setIsNotLogged] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      await api.get('classes').then(res => {
        if (res.data.jwt.user.admin) {
          dispatch(Admin())
        }
        dispatch(Logged())
        setClasses(res.data.modules)

        api.get(`user/${res.data.jwt.user.username}`).then(res => {
          setUser(res.data)
        })

      }).catch(err => {
        setIsNotLogged(true)
      })
    }
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ClassesContext.Provider value={value2}>
      <UserContext.Provider value={value1}>
        {isLogged ? <Navbar /> : ""}
        <Routes>
          <Route path="/" element={isLogged ? <Home /> : isNotLogged && <Login />} />
        </Routes>
        <GlobalStyle />
      </UserContext.Provider>
    </ClassesContext.Provider>
  )
}

export default App
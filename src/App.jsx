import { onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { auth } from './firebase'
import Authentication from './pages/Authentication'
import Home from './pages/Home'
import { setAuth } from './store/authSlice'

function App() {

  const dispatch = useDispatch()
  const [checkAuth, setCheckAuth] = useState(0)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, photoURL, email } = user

        const userData = {
          uid,
          name: displayName,
          avatar: photoURL,
          email
        }
        dispatch(setAuth({ isAuth: true, user: userData }))
      }

      setCheckAuth(true)
    })
  }, [])

  if (!checkAuth) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/auth' element={
            <UnAuthRoute>
              <Authentication />
            </UnAuthRoute>} />
          <Route exact path='/' element={
            <AuthRoute>
              <Home />
            </AuthRoute>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

const UnAuthRoute = ({ children }) => {

  const { isAuth } = useSelector((state) => state.auth)

  if (isAuth) {
    return <Navigate to={'/'} />
  }

  return children;
}

const AuthRoute = ({ children }) => {

  const { isAuth } = useSelector((state) => state.auth)

  if (!isAuth) {
    return <Navigate to={'/auth'} />
  }

  return children;
}

export default App

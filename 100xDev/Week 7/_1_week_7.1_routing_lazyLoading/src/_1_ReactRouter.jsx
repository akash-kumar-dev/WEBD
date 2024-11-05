import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Landing from './components/Landing'

const _1_ReactRouter = () => {

  return (
    <div>
      <div>
        <h1>React Router</h1>
        {/* <button onClick={() => {
          window.location.href = "/"   // not good for client side rendering
        }}>
          Landing Page
        </button>

        <button onClick={() => {
          window.location.href = "/dashboard"
        }}>
          Dashboard
        </button> */}
      </div>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Appbar() {
  // we can not use useNavigate hook inside main App component
  // only can be used inside BrowserRouter component
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => {
        navigate("/");
      }}>
        Landing Page
      </button>

      <button onClick={() => {
        navigate("/dashboard");
      }}>
        Dashboard
      </button>
    </div>
  )
}

export default _1_ReactRouter

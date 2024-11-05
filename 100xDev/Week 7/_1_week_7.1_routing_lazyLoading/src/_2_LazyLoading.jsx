import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
const Landing = React.lazy(() => import('./components/Landing'));
const Dashboard = React.lazy(() => import('./components/Dashboard'));

const _2_LazyLoading = () => {

  return (
    <div>
      <div>
        <h1>React Router</h1>
      </div>
      <BrowserRouter>
        <Appbar />
        <Routes>
          {/* suspense API is used to load component asynchronously */}
          <Route path='/' element={<Suspense fallback={<div>Loading...</div>}><Landing /></Suspense>} />
          <Route path='/dashboard' element={<Suspense fallback={"Loading.."}><Dashboard /></Suspense>} /> 
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

export default _2_LazyLoading

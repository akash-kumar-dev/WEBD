Step 14 - Add react-router-dom
==============================

1.  Add react-router-dom
```bash
    npm i react-router-dom
```

1.  Add routing (ensure you create the Signup, Signin and Blog components)
```tsx
    import { BrowserRouter, Route, Routes } from 'react-router-dom'
    import { Signup } from './pages/Signup'
    import { Signin } from './pages/Signin'
    import { Blog } from './pages/Blog'
    
    function App() {
    
      return (
        <>
          <BrowserRouter>
            <Routes>
              <Route path="/signup" element={<Signup />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/blog/:id" element={<Blog />} />
            </Routes>
          </BrowserRouter>
        </>
      )
    }
    
    export default App
```
1.  Make sure you can import `types` from `your_package`
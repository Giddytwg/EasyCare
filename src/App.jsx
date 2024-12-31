
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"

// import Hero from "./Components/Hero"
import PageLayout from "./Pages/PageLayout"
import Home from "./Pages/Home"

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Home />} />
        </Route>
    )
  )

  return (
    
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App

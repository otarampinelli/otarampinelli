import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import Experiences from "../pages/Experiences"

const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: 'experiences',
      element: <Experiences />
    }
])

export default router
  
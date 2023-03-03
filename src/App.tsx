import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Country } from "./pages/Country"
import { Home } from "./pages/Home"
import { AppContext } from "./context/AppContext"
import { SkeletonTheme } from "react-loading-skeleton"
import { Toaster } from "react-hot-toast"
import { useContext } from "react"
import "react-loading-skeleton/dist/skeleton.css"
import "./styling/index.css"

function App() {
  const { theme } = useContext(AppContext)
  return (
    <SkeletonTheme
      baseColor={theme === "dark" ? "#2B3945" : "#fefefe"}
      highlightColor={theme === "dark" ? "#202C37" : "#eeeeee"}
    >
      <Toaster position="top-right" reverseOrder={false} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="country/:id" element={<Country />} />
        </Routes>
      </BrowserRouter>
    </SkeletonTheme>
  )
}

export default App

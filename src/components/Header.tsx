import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import { MoonIcon } from "./Icons/moon"
import { useNavigate } from "react-router-dom"

export const Header = () => {
  const { theme, setTheme } = useContext(AppContext)
  const navigate = useNavigate()
  return (
    <header className="dark:bg-[var(--dark-blue)] bg-[var(--light-white)] shadow w-screen">
      <div className="container flex flex p-6 dark:text-white  justify-between mx-auto">
        <div onClick={() => navigate("/")} className="cursor-pointer logo-text">
          Where in the world?
        </div>
        <div
          onClick={() => {
            setTheme(theme === "light" ? "dark" : "light")
          }}
          className="toggle-theme cursor-pointer items-center flex gap-2 "
        >
          <MoonIcon theme={theme} size={14} />
          <span>{theme === "light" ? "Light" : "Dark"} Mode</span>
        </div>
      </div>
    </header>
  )
}

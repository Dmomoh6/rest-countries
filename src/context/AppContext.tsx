import React, { createContext, useEffect, useState } from "react"
import toast from "react-hot-toast"

const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("current-theme")
    if (typeof storedPrefs === "string") {
      return storedPrefs
    }
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark"
    }
  }
  return "light"
}

const AppContext = createContext<{
  isLoading: boolean
  setIsLoading: (isLoading: boolean) => void
  countries: any[]
  theme?: string
  setTheme: (theme: string) => void
}>({
  isLoading: true,
  setIsLoading: () => null,
  countries: [],
  theme: undefined,
  setTheme: () => null,
})

const AppProvider = (props: any) => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [countries, setCountries] = useState([])

  const getCountries = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all")
      const data = await response.json()
      setCountries(data)
      setIsLoading(false)
    } catch (error) {
      toast.error("Failed to fetch countries. Please try again later.", {
        duration: 10000,
      })
    }
  }

  useEffect(() => {
    getCountries()
  }, [])

  const [theme, setTheme] = useState<string>(getInitialTheme)

  const checkTheme = (existing: string) => {
    const root = window.document.documentElement
    const isDark = existing === "dark"

    root.classList.remove(isDark ? "light" : "dark")
    root.classList.add(existing)

    localStorage.setItem("current-theme", existing)
  }

  useEffect(() => {
    checkTheme(theme)
  }, [theme])

  return (
    <AppContext.Provider
      value={{
        isLoading,
        setIsLoading,
        countries,
        theme,
        setTheme,
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }

import { useContext, useEffect, useRef, useState } from "react"
import { FilterList } from "../components/FilterList"
import { ChevronDownIcon } from "../components/Icons/chevronDown"
import { SearchIcon } from "../components/Icons/search"
import { Cards } from "../components/Cards"
import { Link } from "react-router-dom"
import Skeleton from "react-loading-skeleton"
import { AppContext } from "../context/AppContext"
import { Header } from "../components/Header"

export const Home = () => {
  const [showFilteredList, setShowFilteredList] = useState<boolean>(false)

  const { isLoading, countries, theme } = useContext(AppContext)

  const [nameFilter, setNameFilter] = useState<string>("")

  const [regionFilter, setRegionFilter] = useState<string>("")

  const filteredListRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        filteredListRef.current &&
        !filteredListRef.current.contains(event.target as Node)
      ) {
        setShowFilteredList(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [filteredListRef])

  const filterByName = (countries: any[]) => {
    if (nameFilter) {
      return countries.filter((x) =>
        x.name.common.toLowerCase().includes(nameFilter.toLowerCase().trim())
      )
    } else {
      return countries
    }
  }

  const filterByRegion = (countries: any[]) => {
    if (regionFilter) {
      return countries.filter((x) => x.region === regionFilter)
    } else return countries
  }

  return (
    <>
      <Header />
      <div className="dark:bg-[var(--very-dark-blue)] bg-[var(--very-light-grey)] pt-4 min-h-screen w-screen">
        <div className="container p-6 mx-auto">
          <div className="flex max-sm:flex-col justify-between">
            <div className="flex dark:bg-[var(--dark-blue)] bg-[var(--light-white)] shadow rounded-md ">
              <div className="-pt-4 search-icon">
                <SearchIcon theme={theme} size={16} />
              </div>
              <input
                placeholder="Search for a country..."
                className="search-box rounded-md px-6 py-4 bg-[var(--light-white)] dark:bg-[var(--dark-blue)] dark:text-white dark:placeholder:text-white placeholder:text-black"
                onChange={(e) => setNameFilter(e.currentTarget.value)}
              />
            </div>
            <div
              ref={filteredListRef}
              onClick={(e) => {
                setShowFilteredList(!showFilteredList)
              }}
              className="pl-1 cursor-pointer  max-sm:h-12  max-sm:mt-4 rounded-md shadow filter flex justify-around items-center  dark:text-white bg-[var(--light-white)] dark:bg-[var(--dark-blue)]"
            >
              <div> Filter by Region</div>
              <ChevronDownIcon theme={theme} size={15} />
              {showFilteredList ? (
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="absolute filter select-dropdown rounded-md shadow -ml-1 dark:text-white bg-[var(--light-white)] dark:bg-[var(--dark-blue)] px-3 py-4"
                >
                  <FilterList
                    setRegionFilter={(a: string) => {
                      setRegionFilter(a)
                      setShowFilteredList(!showFilteredList)
                    }}
                  />
                </div>
              ) : null}
            </div>
          </div>
          <div className="mt-10 grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-16">
            {isLoading && (
              <>
                {Array.apply(null, Array(6)).map((x, i) => (
                  <Skeleton key={i} className="w-100 h-72" count={1} />
                ))}
              </>
            )}
            {!isLoading &&
              filterByName(filterByRegion(countries)).map((x) => (
                <Link
                  className="max-sm:justify-self-center  max-sm:w-5/6 "
                  key={x.name.official}
                  to={`/country/${x.ccn3}`}
                >
                  <Cards
                    image={x.flags.svg}
                    title={x.name.common}
                    population={x.population}
                    region={x.region}
                    capital={x.capital}
                  />
                </Link>
              ))}
          </div>
        </div>
      </div>
    </>
  )
}

import { Link, useParams } from "react-router-dom"
import { ArrowLeftIcon } from "../components/Icons/arrowLeft"
import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import { Currency } from "../types"
import { Header } from "../components/Header"

export const Country = () => {
  const { id } = useParams()

  const { isLoading, countries, theme } = useContext(AppContext)

  const country = isLoading ? {} : countries.find((x) => x.ccn3 === id)

  return (
    <>
      <Header />
      <div className="dark:bg-[var(--very-dark-blue)] bg-[var(--very-light-grey)] pt-4 min-h-screen w-screen">
        {!isLoading && (
          <div className="container mx-auto p-6">
            <Link
              className="mt-4 mb-12 py-2 dark:text-white back-button shadow rounded-md items-center justify-center gap-2 flex bg-[var(--light-white)] dark:bg-[var(--dark-blue)]"
              to={"/"}
            >
              <ArrowLeftIcon theme={theme} size={15} /> Back
            </Link>
            <div className="grid grid-cols-2 max-md:grid-cols-1 max-lg:gap-5 gap-20">
              <img
                src={country.flags.svg}
                className="w-5/6 max-md:place-self-center rounded-md shadow"
                alt=""
              />
              <div className="dark:text-white max-md:my-4">
                <h3 className="text-2xl text-bold">{country.name.common}</h3>
                <div className="grid grid-cols-2 max-sm:grid-cols-1  mt-8">
                  <ul className="-ml-2">
                    <li className="mb-1">
                      <span className="text-bold"> Official Name: </span>
                      {country.name.official}
                    </li>
                    <li className="my-1">
                      <span className="text-bold"> Population: </span>
                      {country.population.toLocaleString("en-US")}
                    </li>
                    <li className="my-1">
                      <span className="text-bold"> Region: </span>
                      {country.region}
                    </li>
                    <li className="my-1">
                      <span className="text-bold"> Sub Region: </span>
                      {country.subregion}
                    </li>
                    <li className="my-1">
                      <span className="text-bold"> Capital: </span>
                      {country.capital}
                    </li>
                  </ul>
                  <ul className="-ml-2">
                    <li className="mb-1">
                      <span className="text-bold"> Top Level Domain: </span>
                      {country.tld}
                    </li>
                    <li className="my-1">
                      <span className="text-bold"> Currencies: </span>
                      {Object.values<Record<string, Currency>>(
                        country.currencies
                      )
                        .map((x) => x.name)
                        .join(", ")}
                    </li>
                    <li className="my-1">
                      <span className="text-bold"> Languages: </span>
                      {Object.values(country.languages).join(", ")}
                    </li>
                  </ul>
                </div>
                <div className="grid grid-cols-7 max-sm:grid-cols-1 max-sm:gap-5 mr-10 mt-16">
                  <div className="text-bold col-span-2 break-words mr-1">
                    Border Countries:
                  </div>
                  <div className="flex col-span-5 flex-wrap gap-2">
                    {country.borders?.map((x: string) => (
                      <Link
                        to={`/country/${
                          countries.find((y) => y.cca3 === x)?.ccn3
                        }`}
                        key={x}
                      >
                        <div className="dark:bg-[var(--dark-blue)] bg-[var(--light-white)] px-6 text-sm mx-1">
                          {countries.find((y) => y.cca3 === x)?.name.common}
                        </div>
                      </Link>
                    )) || " None"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

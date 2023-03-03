import { CardProps } from "../types"

export const Cards = ({
  title,
  image,
  population,
  region,
  capital,
}: CardProps) => {
  return (
    <>
      <div className="rounded-md shadow overflow-hidden dark:text-white bg-[var(--light-white)] dark:bg-[var(--dark-blue)]">
        <div className="h-44 overflow-hidden max-md:h-auto">
          <img src={image} alt="" />
        </div>
        <div className="p-6">
          <h3 className="text-bold text-lg mb-3">{title}</h3>
          <ul className="-ml-2">
            <li className="my-1">
              <span className="text-medium">Population:</span> {population}
            </li>

            <li className="my-1">
              <span className="text-medium">Region:</span> {region}
            </li>

            <li className="my-1">
              <span className="text-medium">Capital:</span> {capital}
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

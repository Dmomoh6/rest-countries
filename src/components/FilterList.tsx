import { FilterListProps } from "../types"

export const FilterList = ({ setRegionFilter }: FilterListProps) => {
  return (
    <>
      <ul>
        <li
          onClick={() => setRegionFilter("Africa")}
          className="mb-1 py-1 dark:hover:bg-[var(--very-dark-blue)] hover:bg-[#eeeeee]"
        >
          Africa
        </li>
        <li
          onClick={() => setRegionFilter("Americas")}
          className="my-1 py-1 dark:hover:bg-[var(--very-dark-blue)] hover:bg-[#eeeeee]"
        >
          America
        </li>
        <li
          onClick={() => setRegionFilter("Asia")}
          className="my-1 py-1 dark:hover:bg-[var(--very-dark-blue)] hover:bg-[#eeeeee]"
        >
          Asia
        </li>
        <li
          onClick={() => setRegionFilter("Europe")}
          className="my-1 py-1 dark:hover:bg-[var(--very-dark-blue)] hover:bg-[#eeeeee]"
        >
          Europe
        </li>
        <li
          onClick={() => setRegionFilter("Oceania")}
          className="mt-1 py-1 dark:hover:bg-[var(--very-dark-blue)] hover:bg-[#eeeeee]"
        >
          Oceania
        </li>
        <li
          onClick={() => setRegionFilter("")}
          className="mt-1 py-1 dark:hover:bg-[var(--very-dark-blue)] hover:bg-[#eeeeee]"
        >
          All regions
        </li>
      </ul>
    </>
  )
}

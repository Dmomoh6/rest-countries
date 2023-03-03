import searchLight from "../../assets/search.svg"
import searchDark from "../../assets/search-dm.svg"
import { IconProps } from "../../types"

export const SearchIcon = (props: IconProps) => (
  <img
    src={props.theme === "dark" ? searchDark : searchLight}
    height={props.size}
    width={props.size}
    alt=""
  />
)

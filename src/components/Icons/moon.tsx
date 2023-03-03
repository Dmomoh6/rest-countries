import moonLight from "../../assets/moon.svg"
import moonDark from "../../assets/moon-dm.svg"
import { IconProps } from "../../types"

export const MoonIcon = (props: IconProps) => (
  <img
    src={props.theme === "dark" ? moonDark : moonLight}
    height={props.size}
    width={props.size}
    alt=""
  />
)

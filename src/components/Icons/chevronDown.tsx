import chevronDownLight from "../../assets/chevronDown.svg"
import chevronDownDark from "../../assets/chevronDown-dm.svg"
import { IconProps } from "../../types"

export const ChevronDownIcon = (props: IconProps) => (
  <img
    src={props.theme === "dark" ? chevronDownDark : chevronDownLight}
    height={props.size}
    width={props.size}
    alt=""
  />
)

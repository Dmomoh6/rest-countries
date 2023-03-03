import arrowLeftLight from "../../assets/arrowLeft.svg"
import arrowLeftDark from "../../assets/arrowLeft-dm.svg"
import { IconProps } from "../../types"

export const ArrowLeftIcon = (props: IconProps) => (
  <img
    src={props.theme === "dark" ? arrowLeftDark : arrowLeftLight}
    height={props.size}
    width={props.size}
    alt=""
  />
)

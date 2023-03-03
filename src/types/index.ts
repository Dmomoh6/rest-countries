export type IconProps = {
  theme?: string
  size: number
}

export type CardProps = {
  title: string
  image: string
  population: string
  region: string
  capital: string
}

export type Currency = {
  name: string
  symbol: string
}

export type FilterListProps = {
  setRegionFilter: (region: string) => void
}

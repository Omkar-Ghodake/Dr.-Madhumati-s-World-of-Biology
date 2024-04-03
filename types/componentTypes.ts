import { NavItemProps, NavListProps } from './propTypes'

export type NavItemType = ({ title, url }: NavItemProps) => React.JSX.Element

export type NavListType = ({ navLinksArray }: NavListProps) => React.JSX.Element

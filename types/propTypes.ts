import { NavLinks } from './dataTypes'

export type NavItemProps = NavLinks

export type NavListProps = { navLinksArray: NavLinks[] }

export type JrCollegeBatchProps = {
  cardTitle: string
  cardDesc: string
  eduBoards: string[]
  eduSubjects: string[]
  timings: string
}

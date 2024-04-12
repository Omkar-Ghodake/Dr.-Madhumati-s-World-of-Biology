import { NavLinks, NeetCETBatchInfoProps_batches } from './dataTypes'

export type NavItemProps = NavLinks

export type NavListProps = { navLinksArray: NavLinks[] }

export type JrCollegeBatchProps = {
  cardTitle: string
  cardDesc: string
  eduBoards: string[]
  eduSubjects: string[]
  timings: string
  className?: string
}

export type NeetCETBatchInfoProps = {
  cardTitle: string
  cardDesc: string
  programHighlights?: string[]
  batches?: NeetCETBatchInfoProps_batches[]
  className?: string
  timings?: string
}

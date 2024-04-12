import {
  JrCollegeBatchProps,
  NavItemProps,
  NavListProps,
  NeetCETBatchInfoProps,
} from './propTypes'

export type NavItemType = ({}: NavItemProps) => React.JSX.Element

export type NavListType = ({}: NavListProps) => React.JSX.Element

export type BatchInfoType = ({}: JrCollegeBatchProps) => React.JSX.Element

export type NeetCETBatchInfoType =
  ({}: NeetCETBatchInfoProps) => React.JSX.Element

import {
  JrCollegeBatchProps,
  NavItemProps,
  NavListProps,
  NeetBatchProps,
} from './propTypes'

export type NavItemType = ({}: NavItemProps) => React.JSX.Element

export type NavListType = ({}: NavListProps) => React.JSX.Element

export type BatchInfoType = ({}: JrCollegeBatchProps) => React.JSX.Element

export type NeetBatchInfoType = ({}: NeetBatchProps) => React.JSX.Element

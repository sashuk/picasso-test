import { ReactElement, ReactNode } from 'react'

import { BadgeProps } from '../Badge'
import { VariantOnlyProps } from '../TagRectangular/types'

/** Render Tag.Rectangular */
export interface SidebarTagProps extends VariantOnlyProps {
  content: string
}

/** Definition of the embedded badge  */
export type SidebarBadgeProps = Omit<BadgeProps, 'size' | 'children'>

export interface Props {
  compact?: boolean
  icon?: ReactElement
  badge?: SidebarBadgeProps
  tag?: SidebarTagProps
  children?: ReactNode
  titleCase?: boolean
  testIds?: {
    content?: string
  }
  isSubMenu?: boolean
  menu?: ReactElement
}
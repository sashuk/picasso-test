import { OverridableComponent } from '@toptal/picasso-shared'
import React, { forwardRef, memo, ReactElement } from 'react'

import noop from '../utils/noop'
import { SidebarItemBasic } from './SidebarItemBasic'
import { SidebarItemCompact } from './SidebarItemCompact'
import { SidebarItemAccordion } from './SidebarItemAccordion'
import { Props } from './types'

export const getSelectedSubMenu = (sidebarItem: ReactElement<Props>) => {
  const menu = sidebarItem.props.menu

  if (!menu) {
    return null
  }

  const subMenuItems = React.Children.toArray(menu.props.children)

  return subMenuItems.find(
    menuChild => (menuChild as ReactElement<Props>).props.selected
  )
}

export const SidebarItem: OverridableComponent<Props> = memo(
  forwardRef<HTMLElement, Props>(function SidebarItem(props, ref) {
    const { compact, collapsible, menu } = props

    const hasMenu = menu != null

    let SidebarItemImpl = SidebarItemBasic

    if (hasMenu && compact) {
      SidebarItemImpl = SidebarItemCompact
    } else if (hasMenu && collapsible) {
      SidebarItemImpl = SidebarItemAccordion
    }

    return <SidebarItemImpl {...props} ref={ref} />
  })
)

SidebarItem.defaultProps = {
  collapsible: false,
  onClick: noop,
  selected: false,
  expand: noop,
  variant: 'light',
  compact: false,
}

SidebarItem.displayName = 'SidebarItem'

export default SidebarItem

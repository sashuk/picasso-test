import { OmitInternalProps } from '@toptal/picasso-shared'

import { Props } from './PageSidebar'

export { default } from './PageSidebar'
export type PageSidebarProps = OmitInternalProps<Props>

export {
  SidebarContextProvider,
  useSidebarContext
} from './SidebarContextProvider'
export type { Props as SidebarContextProviderProps } from './SidebarContextProvider'
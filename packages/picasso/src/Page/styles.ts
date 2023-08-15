import type { Theme } from '@material-ui/core/styles'
import { createStyles } from '@material-ui/core/styles'

import { headerHeight } from '../PageTopBar/constants'

export default ({ layout }: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      overflowX: 'hidden',
      ...(layout.contentMinWidth && { minWidth: layout.contentMinWidth }),

      '& > footer, & > header': {
        flex: 0,
      },
      '& > header + *': {
        marginTop: headerHeight.default,
      },
    },
    subRoot: {
      width: '100vw',
      height: '100vh',
    },
  })

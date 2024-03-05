import type { Theme } from '@material-ui/core/styles'
import { createStyles } from '@material-ui/core/styles'

import { headerHeight } from '../PageTopBar/constants'

export default ({ screens }: Theme) =>
  createStyles({
    avatar: {
      fontSize: '0.9rem',
    },
    contentUserBadge: {
      [screens('xs', 'sm', 'md')]: {
        padding: '1em',
        zIndex: 1,
        backgroundColor: 'white',
        position: 'relative',
      },
    },
    content: {
      maxHeight: `calc(100vh - ${headerHeight.default})`, // viewport minus header height
      width: '15em',
      [screens('xs', 'sm')]: {
        width: '100vw',
      },
    },
    name: {
      fontWeight: 400,
      display: 'block',
    },
    truncateText: {
      maxWidth: '11.5rem',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    arrow: {
      color: 'white',

      [screens('xs', 'sm', 'md')]: {
        marginLeft: '0.5rem',
      },
    },
    paper: {
      [screens('xs', 'sm', 'md')]: {
        top: '2.5em !important',
      },
    },
  })
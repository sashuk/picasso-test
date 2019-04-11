import { Theme, createStyles } from '@material-ui/core/styles'

export default ({ palette }: Theme) =>
  createStyles({
    logo: {
      fontSize: '1.75em',
      verticalAlign: 'baseline'
    },
    logoEmblem: {
      fontSize: '1.75em',
      verticalAlign: 'baseline'
    },
    default: {
      color: palette.primary.main
    },
    white: {
      color: palette.common.white
    },
    black: {
      color: palette.common.black
    }
  })

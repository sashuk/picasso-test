import { Theme, createStyles } from '@material-ui/core/styles'
import { rem } from '@toptal/picasso-shared'

// decided to use a custom shadow for the sidebar's collapse button
const COLLAPSE_BUTTON_SHADOW =
  '0 0 0 1px rgba(0, 0, 0, 0.04), 0 0 8px 0 rgba(0, 0, 0, 0.16)'

export default ({ palette, screens, transitions }: Theme) =>
  createStyles({
    root: {
      height: '100%',
      boxShadow: `inset -1px 0px 0px 0px ${palette.grey.darker}`,
      padding: '1rem 0 0.5rem',
      fontSize: '1rem',
      position: 'relative',
      transition: `width ${transitions.duration.enteringScreen}ms ease-in-out`,

      [screens('small', 'medium')]: {
        width: '100vw',
        overflowY: 'scroll',
      },

      '&::before': {
        position: 'absolute',
        content: '""',
        left: 0,
        top: 0,
        width: '15.50rem',
        height: '100%',
      },
    },
    small: {
      width: rem('212px'),
    },
    medium: {
      width: rem('236px'),
    },
    large: {
      width: rem('280px'),
    },
    spacer: {
      order: 50,
      flex: 1,
      height: '100%',
    },
    light: {
      boxShadow: `inset -1px 0px 0px 0px ${palette.grey.lighter2}`,
      backgroundColor: palette.grey.lighter,
    },
    dark: {
      boxShadow: `inset -1px 0px 0px 0px ${palette.grey.darker}`,
      backgroundColor: palette.grey.darker,
    },
    collapseButton: {
      position: 'absolute',
      right: '-0.75rem',
      top: '0.75rem',
      visibility: 'hidden',
      color: palette.grey.dark,
      backgroundColor: palette.common.white,
      borderRadius: '50%',
      boxShadow: COLLAPSE_BUTTON_SHADOW,
      zIndex: 100,

      '&:hover': {
        color: palette.common.white,
        backgroundColor: palette.primary.main,
      },
    },
    buttonVisible: {
      visibility: 'visible',
    },
    rootCollapsed: {
      width: '5rem',
      transition: `width ${transitions.duration.leavingScreen}ms ease-in-out`,

      '&::before': {
        width: '5.75rem',
      },
    },
  })

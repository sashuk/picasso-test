import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import React from 'react'
import PropTypes from 'prop-types'

import { palette, transitions, typography } from './config'
import Provider from './PicassoProvider'

const picasso = {
  palette,
  transitions,
  props: {
    MuiButtonBase: {
      disableRipple: true
    },
    MuiList: {
      disablePadding: true
    },
    MuiPaper: {
      square: true
    },
    MuiSelect: {
      disableUnderline: true
    },
    MuiOutlinedInput: {
      notched: false
    }
  },
  shadows: Array.apply(null, Array(25)).map(() => 'none'), // Yest, this is needed as MUI expects 25 elements in array otherwise it raises error
  typography: {
    useNextVariants: true,
    inputSize: '18px',
    ...typography
  }
}

const PicassoProvider = new Provider(createMuiTheme(picasso))
const Picasso = ({ children }) => (
  <MuiThemeProvider theme={PicassoProvider.theme}>{children}</MuiThemeProvider>
)

Picasso.displayName = Picasso
Picasso.propTypes = {
  children: PropTypes.node.isRequired
}

export { PicassoProvider }
export default Picasso

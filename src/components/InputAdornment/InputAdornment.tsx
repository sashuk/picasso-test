import React, { ReactNode, FunctionComponent, HTMLAttributes } from 'react'
import { withStyles } from '@material-ui/core/styles'
import MUIInputAdornment from '@material-ui/core/InputAdornment'
import cx from 'classnames'

import { StandardProps } from '../Picasso'
import styles from './styles'

type PositionType = 'start' | 'end'

interface Props extends StandardProps, HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  position: PositionType
  disabled?: boolean
}

const InputAdornment: FunctionComponent<Props> = ({
  classes,
  className,
  style,
  children,
  position,
  disabled,
  ...rest
}) => {
  return (
    <MUIInputAdornment
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      classes={{
        root: cx(classes.root, {
          [classes.rootDisabled]: disabled
        })
      }}
      className={className}
      style={style}
      position={position}
    >
      {children}
    </MUIInputAdornment>
  )
}

export default withStyles(styles)(InputAdornment)

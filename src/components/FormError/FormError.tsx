import React, { FunctionComponent, ReactNode, HTMLAttributes } from 'react'
import { withStyles } from '@material-ui/core/styles'
import cx from 'classnames'

import { StandardProps } from '../Picasso'
import styles from './styles'
import Typography from '../Typography'

export interface Props extends StandardProps, HTMLAttributes<HTMLDivElement> {
  /** The text of the error */
  children: ReactNode
}

export const FormError: FunctionComponent<Props> = ({
  children,
  classes,
  className,
  style,
  ...rest
}) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <div {...rest} className={cx(classes.root, className)} style={style}>
    <Typography className={classes.error}>{children}</Typography>
  </div>
)

FormError.displayName = 'FormError'

export default withStyles(styles)(FormError)

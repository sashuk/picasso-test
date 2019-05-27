import React, {
  useContext,
  FunctionComponent,
  ReactNode,
  ReactElement
} from 'react'
import { withStyles } from '@material-ui/core/styles'
import cx from 'classnames'

import { Logo, Container, Typography } from '../'
import { PageContext } from '../Page'
import { PageContextProps } from '../Page/types'
import { StandardProps } from '../Picasso'
import styles from './styles'

export interface Props extends StandardProps {
  /** Title which is displayed along the `Logo` */
  title: string
  /** Link component to wrap `Logo`  */
  logoLink?: ReactElement
  /** Content for the right side of the `Header`  */
  rightContent?: ReactNode
}

export const PageHeader: FunctionComponent<Props> = ({
  classes,
  className,
  style,
  title,
  logoLink,
  rightContent
}) => {
  const { fullWidth } = useContext<PageContextProps>(PageContext)

  const contentClassnames = cx(
    {
      [classes.fullWidth]: fullWidth
    },
    classes.content
  )

  const logo = <Logo variant='white' />

  return (
    <header className={cx(classes.root, className)} style={style}>
      <div className={contentClassnames}>
        <div className={classes.left}>
          <Container right='small' flex direction='row' alignItems='center'>
            {logoLink ? React.cloneElement(logoLink, {}, logo) : logo}
          </Container>
          <div className={classes.divider} />
          <Container left='small'>
            <Typography invert weight='light'>
              {title}
            </Typography>
          </Container>
        </div>

        <div className={classes.right}>{rightContent}</div>
      </div>
    </header>
  )
}

PageHeader.displayName = 'PageHeader'

export default withStyles(styles)(PageHeader)

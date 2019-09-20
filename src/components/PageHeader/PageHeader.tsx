import React, {
  useContext,
  useLayoutEffect,
  forwardRef,
  ReactNode,
  ReactElement,
  HTMLAttributes
} from 'react'
import { withStyles } from '@material-ui/core/styles'
import cx from 'classnames'

import { Logo, Container, Typography } from '../'
import { PageContext } from '../Page'
import { PageContextProps } from '../Page/types'
import { StandardProps, usePageHeader } from '../Picasso'
import { useBreakpoint } from '../utils'
import styles from './styles'

type VariantType = 'dark' | 'light'

export interface Props extends StandardProps, HTMLAttributes<HTMLElement> {
  /** Title which is displayed along the `Logo` */
  title?: string
  /** Link component to wrap `Logo`  */
  logoLink?: ReactElement
  /** Content for the right side of the `Header`  */
  rightContent?: ReactNode
  /** Action items  */
  actionItems?: ReactNode
  /** Color variant */
  variant?: VariantType
}

export const PageHeader = forwardRef<HTMLElement, Props>(function PageHeader(
  {
    classes,
    className,
    style,
    title,
    logoLink,
    rightContent,
    actionItems,
    variant,
    ...rest
  },
  ref
) {
  const isSmallScreen = useBreakpoint('small')

  const { setHasPageHeader } = usePageHeader()

  useLayoutEffect(() => {
    setHasPageHeader(true)

    return function cleanup() {
      setHasPageHeader(false)
    }
  }, [])

  const { fullWidth } = useContext<PageContextProps>(PageContext)

  const logo = (
    <Logo variant='white' emblem={isSmallScreen} className={classes.logo} />
  )

  const titleComponent = title && (
    <Container left='small' flex alignItems='center'>
      <div className={classes.divider} />
      <Container left='small'>
        <Typography invert weight='light'>
          {title}
        </Typography>
      </Container>
    </Container>
  )

  return (
    <header
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      ref={ref}
      className={cx('mui-fixed', classes.root, classes[variant!], className)}
      style={style}
    >
      <div className={cx({ [classes.fullWidth]: fullWidth }, classes.content)}>
        <div className={classes.left}>
          <Container className={classes.logoContainer} flex alignItems='center'>
            {logoLink ? React.cloneElement(logoLink, {}, logo) : logo}
          </Container>
          {!isSmallScreen && titleComponent}
        </div>

        <div className={classes.right}>
          {!isSmallScreen && actionItems}
          {rightContent}
        </div>
      </div>
    </header>
  )
})

PageHeader.defaultProps = {
  variant: 'light'
}

PageHeader.displayName = 'PageHeader'

export default withStyles(styles)(PageHeader)

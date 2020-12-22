import React, { forwardRef, ReactNode, HTMLAttributes } from 'react'
import { Theme, makeStyles } from '@material-ui/core/styles'
import cx from 'classnames'
import { BaseProps, OverridableComponent } from '@toptal/picasso-shared'
import { Container } from '@toptal/picasso'

import styles from './styles'

export interface Props extends BaseProps, HTMLAttributes<HTMLDivElement> {
  /** Custom components that render content of page */
  children: ReactNode
}

const useStyles = makeStyles<Theme, Props>(styles, {
  name: 'PicassoPageArticle'
})

export const PageArticle: OverridableComponent<Props> = forwardRef<
  HTMLDivElement,
  Props
>(function PageArticle(props, ref) {
  const { children, className, style, ...rest } = props
  const classes = useStyles(props)

  return (
    <Container
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      ref={ref}
      className={cx(classes.root, className)}
      style={style}
    >
      {children}
    </Container>
  )
})

PageArticle.defaultProps = {}

PageArticle.displayName = 'PageArticle'

export default PageArticle
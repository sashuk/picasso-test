import React, { forwardRef, Ref } from 'react'
import cx from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import { StandardProps } from '@toptal/picasso-shared'

import kebabToCamelCase from '../utils/kebab-to-camel-case'
import styles from './styles'
const BASE_SIZE = 16
type ScaleType = 1 | 2 | 3 | 4
export interface Props extends StandardProps {
  scale?: ScaleType
  color?: string
  base?: number
}
const SvgStar16 = forwardRef(function SvgStar16(
  props: Props,
  ref: Ref<SVGSVGElement>
) {
  const {
    classes: availableClasses,
    className,
    style = {},
    color,
    scale,
    base
  } = props
  const classes = [availableClasses.root, className]
  const scaledSize = base || BASE_SIZE * Math.ceil(scale || 1)
  const colorClassName = kebabToCamelCase(`${color}`)

  if (availableClasses[colorClassName]) {
    classes.push(availableClasses[colorClassName])
  }

  const svgStyle = {
    minWidth: `${scaledSize}px`,
    minHeight: `${scaledSize}px`,
    ...style
  }
  return (
    <svg
      viewBox='0 0 16 16'
      className={cx(...classes)}
      style={svgStyle}
      ref={ref}
    >
      <path d='M8 11.5l-4.114 2.163.785-4.581-3.328-3.245 4.6-.669L8 1l2.057 4.168 4.6.669-3.328 3.245.785 4.581L8 11.5zm0-1.13l2.786 1.465-.532-3.103 2.254-2.197-3.115-.453L8 3.26 6.607 6.082l-3.115.453 2.254 2.197-.532 3.103L8 10.37z' />
    </svg>
  )
})
SvgStar16.displayName = 'SvgStar16'
export default withStyles(styles)(SvgStar16)

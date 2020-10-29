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
const SvgFunction16 = forwardRef(function SvgFunction16(
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
      <path d='M7.5 1A2.5 2.5 0 018 5.95V8h5v3h2v5h-5v-5h2V9H3v2h2v5H0v-5h2V8h5V5.95A2.5 2.5 0 017.5 1zM14 12h-3v3h3v-3zM4 12H1v3h3v-3zM7.5 2a1.5 1.5 0 100 3 1.5 1.5 0 000-3z' />
    </svg>
  )
})

SvgFunction16.displayName = 'SvgFunction16'
export default withStyles(styles)(SvgFunction16)
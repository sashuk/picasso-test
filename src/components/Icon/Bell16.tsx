import React, { forwardRef, Ref } from 'react'
import cx from 'classnames'
import { withStyles } from '@material-ui/core/styles'

import kebabToCamelCase from '../utils/kebab-to-camel-case'
import { StandardProps, ColorType } from '../Picasso'
import styles from './styles'
const BASE_SIZE = 16

type ScaleType = 1 | 2 | 3 | 4
export interface Props extends StandardProps {
  scale?: ScaleType
  color?: ColorType | string
  base?: number
}
const SvgBell16 = forwardRef(function SvgBell16(
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
  let svgColor
  const scaledSize = base || BASE_SIZE * Math.ceil(scale || 1)
  const colorClassName = kebabToCamelCase(`${color}`)

  if (!availableClasses[`${colorClassName}`]) {
    svgColor = color
  } else {
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
      color={svgColor}
      ref={ref}
    >
      <defs>
        <path
          d='M7 1.022V0h1v1.022A5.5 5.5 0 0 1 13 6.5v3.505c0 .72.276.995 1 .995v1H1v-1c.724 0 1-.275 1-.995V6.5a5.5 5.5 0 0 1 5-5.478zM5 13.5V13h1v.5a1.5 1.5 0 0 0 3 0V13h1v.5a2.5 2.5 0 1 1-5 0zm7-3.495V6.5a4.5 4.5 0 1 0-9 0v3.505c0 .383-.066.716-.192.995h9.384a2.397 2.397 0 0 1-.192-.995z'
          id='bell16_svg__a'
        />
      </defs>
      <g fillRule='evenodd'>
        <mask id='bell16_svg__b'>
          <use xlinkHref='#bell16_svg__a' />
        </mask>
        <use fillRule='nonzero' xlinkHref='#bell16_svg__a' />
        <g mask='url(#bell16_svg__b)'>
          <path d='M0 0h16v16H0z' />
        </g>
      </g>
    </svg>
  )
})

SvgBell16.displayName = 'SvgBell16'
export default withStyles(styles)(SvgBell16)

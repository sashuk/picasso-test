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
const SvgFacebook16 = forwardRef(function SvgFacebook16(
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
          d='M15.117 0H.883A.883.883 0 0 0 0 .883v14.234c0 .488.395.883.883.883h7.662V9.804H6.46V7.39h2.086V5.607c0-2.066 1.263-3.19 3.106-3.19.884 0 1.643.064 1.864.094v2.16h-1.28c-1 0-1.195.48-1.195 1.18v1.541h2.39l-.31 2.42h-2.08V16h4.077a.882.882 0 0 0 .883-.883V.883A.882.882 0 0 0 15.117 0'
          id='facebook16_svg__a'
        />
      </defs>
      <g fillRule='evenodd'>
        <mask id='facebook16_svg__b'>
          <use xlinkHref='#facebook16_svg__a' />
        </mask>
        <use fillRule='nonzero' xlinkHref='#facebook16_svg__a' />
        <g mask='url(#facebook16_svg__b)'>
          <path d='M0 0h16v16H0z' />
        </g>
      </g>
    </svg>
  )
})

SvgFacebook16.displayName = 'SvgFacebook16'
export default withStyles(styles)(SvgFacebook16)

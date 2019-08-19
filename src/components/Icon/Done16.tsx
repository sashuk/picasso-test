import React from 'react'
import cx from 'classnames'
import { withStyles } from '@material-ui/core/styles'

import { StandardProps } from '../Picasso'
import styles from './styles'
const BASE_SIZE = 16

type ScaleType = 1 | 2 | 3 | 4
export interface Props extends StandardProps {
  scale?: ScaleType
  color?: string
  base?: number
}

const SvgDone16 = (props: Props) => {
  const { classes, className, style = {}, color, scale, base } = props
  const scaledSize = base || BASE_SIZE * Math.ceil(scale || 1)
  const svgStyle = {
    minWidth: `${scaledSize}px`,
    minHeight: `${scaledSize}px`,
    ...style
  }

  return (
    <svg
      viewBox='0 0 16 16'
      className={cx(classes.root, className)}
      style={svgStyle}
      color={color}
    >
      <defs>
        <path
          d='M6.5 9.793l5-5 .707.707-5 5-.707.707L3.793 8.5l.707-.707 2 2zM8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm0-1A7 7 0 1 0 8 1a7 7 0 0 0 0 14z'
          id='done16_svg__a'
        />
      </defs>
      <g fillRule='evenodd'>
        <mask id='done16_svg__b'>
          <use xlinkHref='#done16_svg__a' />
        </mask>
        <use fillRule='nonzero' xlinkHref='#done16_svg__a' />
        <g mask='url(#done16_svg__b)'>
          <path d='M0 0h16v16H0z' />
        </g>
      </g>
    </svg>
  )
}

SvgDone16.displayName = 'SvgDone16'
export default withStyles(styles)(SvgDone16)

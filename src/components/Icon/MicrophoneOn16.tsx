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

const SvgMicrophoneOn16 = (props: Props) => {
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
          d='M7 15v-2.022A5.5 5.5 0 0 1 2 7.5h1a4.5 4.5 0 0 0 9 0h1a5.5 5.5 0 0 1-5 5.478V15h3v1H4v-1h3zm.5-15A3.5 3.5 0 0 1 11 3.5v4a3.5 3.5 0 0 1-7 0v-4A3.5 3.5 0 0 1 7.5 0zm0 1A2.5 2.5 0 0 0 5 3.5v4a2.5 2.5 0 0 0 5 0v-4A2.5 2.5 0 0 0 7.5 1z'
          id='microphoneOn16_svg__a'
        />
      </defs>
      <g fillRule='evenodd'>
        <mask id='microphoneOn16_svg__b'>
          <use xlinkHref='#microphoneOn16_svg__a' />
        </mask>
        <use fillRule='nonzero' xlinkHref='#microphoneOn16_svg__a' />
        <g mask='url(#microphoneOn16_svg__b)'>
          <path d='M0 0h16v16H0z' />
        </g>
      </g>
    </svg>
  )
}

SvgMicrophoneOn16.displayName = 'SvgMicrophoneOn16'
export default withStyles(styles)(SvgMicrophoneOn16)

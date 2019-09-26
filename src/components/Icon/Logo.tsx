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
const SvgLogo = forwardRef(function SvgLogo(
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
      viewBox='0 0 134 40'
      className={cx(...classes)}
      style={svgStyle}
      color={svgColor}
      ref={ref}
    >
      <path
        d='M7.39 23.727l9.915-10.04 2.043 2.068-9.916 10.038-2.04-2.066H7.39zm19.568-7.045L10.484.004 7.152 3.377 13.33 9.63 0 23.124l16.474 16.68 3.332-3.373-6.178-6.258 13.33-13.491zM38.315 4.85v5.11h5.483v2.951h-5.483v11.496c0 2.645.74 4.142 2.871 4.142 1.045 0 1.655-.089 2.22-.264l.173 2.952c-.739.263-1.914.528-3.393.528-1.784 0-3.22-.618-4.134-1.63-1.044-1.19-1.479-3.083-1.479-5.596V12.91H31.31V9.959h3.264V5.994l3.742-1.145zm9.415 15.813c0 4.67 2.61 8.193 6.352 8.193 3.656 0 6.397-3.48 6.397-8.28 0-3.613-1.785-8.15-6.31-8.15-4.481 0-6.44 4.23-6.44 8.237zm16.664-.22c0 7.885-5.439 11.322-10.485 11.322-5.657 0-10.095-4.23-10.095-10.969 0-7.092 4.656-11.277 10.443-11.277 6.047 0 10.137 4.449 10.137 10.924zm5.691 2.16c0 .573.044 1.101.175 1.585.696 2.687 3 4.536 5.744 4.536 4.045 0 6.394-3.347 6.394-8.237 0-4.228-2.218-7.885-6.264-7.885-2.612 0-5.091 1.851-5.788 4.758-.13.484-.26 1.057-.26 1.541v3.701zM66.3 16.918c0-2.731-.088-4.934-.174-6.96h3.393l.22 3.655h.085c1.524-2.598 4.047-4.096 7.484-4.096 5.134 0 8.963 4.36 8.963 10.792 0 7.665-4.656 11.454-9.615 11.454-2.785 0-5.222-1.234-6.485-3.348h-.086V40H66.3V16.919zm27.28-12.07v5.11h5.482v2.951H93.58v11.496c0 2.645.74 4.142 2.872 4.142 1.044 0 1.652-.089 2.218-.264l.175 2.952c-.74.263-1.916.528-3.395.528-1.783 0-3.219-.618-4.132-1.63-1.045-1.19-1.48-3.083-1.48-5.596V12.91h-3.264V9.959h3.264V5.994l3.742-1.145zm19.214 15.55c-4.178-.09-8.92.66-8.92 4.802 0 2.553 1.652 3.699 3.568 3.699 2.784 0 4.57-1.762 5.177-3.568a4.41 4.41 0 0 0 .175-1.233v-3.7zm3.698 5.77c0 1.85.087 3.656.303 5.11h-3.437l-.303-2.688h-.13c-1.177 1.675-3.438 3.173-6.44 3.173-4.265 0-6.44-3.04-6.44-6.124 0-5.154 4.526-7.973 12.661-7.929v-.44c0-1.719-.478-4.934-4.787-4.89-2 0-4.045.573-5.525 1.586l-.87-2.599c1.74-1.102 4.307-1.85 6.962-1.85 6.44 0 8.006 4.449 8.006 8.678v7.973zm2.837 5.11h3.83V.004h-3.83v31.275zm13.711-27.63a3.64 3.64 0 0 1-3.649 3.648 3.65 3.65 0 0 1-3.648-3.648A3.64 3.64 0 0 1 129.39 0a3.629 3.629 0 0 1 3.649 3.649zm-.602 0A3.03 3.03 0 0 0 129.39.602a3.03 3.03 0 0 0-3.046 3.047c0 1.67 1.36 3.046 3.046 3.046a3.052 3.052 0 0 0 3.047-3.046zm-1.291 2.1h-.775l-1.084-1.653h-.671v1.652h-.637V1.566h1.704c.705 0 1.411.5 1.411 1.274 0 .93-.826 1.239-1.067 1.239l1.119 1.67zm-.706-2.91c0-.464-.396-.74-.757-.74h-1.067v1.446h1.067c.361 0 .757-.275.757-.705z'
        fillRule='evenodd'
      />
    </svg>
  )
})

SvgLogo.displayName = 'SvgLogo'
export default withStyles(styles)(SvgLogo)

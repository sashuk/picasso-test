import React, { forwardRef, Ref } from 'react'
import { StandardProps } from '@toptal/picasso-shared'

const SIZE = 64

type ScaleType = 1 | 2
export interface Props extends StandardProps {
  scale?: ScaleType
  base?: number
}
const SvgProblemBlue64 = forwardRef(function SvgProblemBlue64(
  props: Props,
  ref: Ref<SVGSVGElement>
) {
  const { className, style = {}, scale, base, 'data-testid': testId } = props
  const scaledSize = base || SIZE * Math.ceil(scale || 1)

  const svgStyle = {
    minWidth: `${scaledSize}px`,
    minHeight: `${scaledSize}px`,
    ...style,
  }

  return (
    <svg
      viewBox='0 0 65 64'
      fill='none'
      className={className}
      style={svgStyle}
      ref={ref}
      data-testid={testId}
    >
      <g clipPath='url(#a)'>
        <path
          opacity={0.15}
          d='M26.877 41.038h10.22a20.16 20.16 0 0 1 3.833-9.131 9.058 9.058 0 0 0 1.9-5.52c0-5.394-4.855-9.767-10.843-9.767-5.988 0-10.842 4.373-10.842 9.766.007 2 .674 3.94 1.899 5.52a20.16 20.16 0 0 1 3.833 9.132Z'
          fill='#183A9E'
        />
        <path
          d='M32.328 49.46h-.682a5.008 5.008 0 0 1-5.002-5.002 20.25 20.25 0 0 0-3.997-12.248 9.54 9.54 0 0 1-2.002-5.824c0-5.66 5.088-10.265 11.342-10.265 6.254 0 11.342 4.605 11.342 10.265a9.542 9.542 0 0 1-2.001 5.824 20.25 20.25 0 0 0-3.998 12.248 5.008 5.008 0 0 1-5.002 5.002Zm-.34-32.34c-5.703 0-10.343 4.157-10.343 9.266a8.55 8.55 0 0 0 1.796 5.218 21.254 21.254 0 0 1 4.204 12.854 4.007 4.007 0 0 0 4.002 4.002h.681a4.007 4.007 0 0 0 4.002-4.002 21.255 21.255 0 0 1 4.203-12.854 8.552 8.552 0 0 0 1.796-5.218c0-5.109-4.639-9.265-10.342-9.265Z'
          fill='#204ECF'
        />
        <path d='M37.116 40.538H26.88v1h10.237v-1Z' fill='#204ECF' />
        <path
          d='m23.561 63.522-.365-.105c-3.498-1-6.799-2.589-9.762-4.7l-.308-.22 2.683-7.433a24.54 24.54 0 0 1-5.387-6.756l-7.845.962-.145-.35A31.962 31.962 0 0 1 .02 34.355L0 33.977l7.498-2.54a24.36 24.36 0 0 1 1.917-8.414l-5.65-5.54.183-.332a31.978 31.978 0 0 1 6.755-8.47l.283-.253 6.658 4.276a24.356 24.356 0 0 1 7.777-3.749l.808-7.867.374-.064a31.968 31.968 0 0 1 10.834 0l.375.064.807 7.86a24.366 24.366 0 0 1 7.788 3.748l6.647-4.268.283.253a31.963 31.963 0 0 1 6.755 8.47l.183.333-5.633 5.524a24.373 24.373 0 0 1 1.923 8.437l7.475 2.533-.021.379a31.971 31.971 0 0 1-2.41 10.563l-.146.35-7.824-.96a24.52 24.52 0 0 1-5.403 6.77l2.678 7.417-.31.22a31.935 31.935 0 0 1-9.76 4.7l-.365.105-4.13-6.716c-2.863.51-5.794.51-8.657-.004l-4.131 6.72Zm13.28-7.827 4.091 6.655a30.939 30.939 0 0 0 8.783-4.23l-2.654-7.35.264-.224a23.54 23.54 0 0 0 5.591-7.006l.161-.307 7.752.952a30.963 30.963 0 0 0 2.17-9.504l-7.408-2.51-.01-.346a23.416 23.416 0 0 0-1.992-8.73l-.14-.317 5.583-5.475a30.963 30.963 0 0 0-6.078-7.622l-6.586 4.23-.278-.207a23.395 23.395 0 0 0-8.06-3.88l-.336-.087-.8-7.79a30.969 30.969 0 0 0-9.748 0l-.8 7.796-.335.088a23.382 23.382 0 0 0-8.05 3.88l-.277.207-6.597-4.237a30.979 30.979 0 0 0-6.079 7.622l5.6 5.49-.14.316a23.395 23.395 0 0 0-1.985 8.707l-.011.346-7.43 2.518a30.97 30.97 0 0 0 2.17 9.505l7.772-.954.16.307a23.553 23.553 0 0 0 5.577 6.993l.262.225-2.658 7.364a30.936 30.936 0 0 0 8.783 4.23l4.093-6.66.34.067c2.96.573 6.001.574 8.96.003l.34-.065Z'
          fill='#204ECF'
        />
      </g>
      <defs>
        <clipPath id='a'>
          <path fill='#fff' d='M0 0h64.04v64H0z' />
        </clipPath>
      </defs>
    </svg>
  )
})

SvgProblemBlue64.displayName = 'SvgProblemBlue64'
export default SvgProblemBlue64
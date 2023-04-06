import type { Ref } from 'react'
import React, { forwardRef } from 'react'
import type { StandardProps } from '@toptal/picasso-shared'

const SIZE = 64

type ScaleType = 1 | 2
export interface Props extends StandardProps {
  scale?: ScaleType
  base?: number
}
const SvgTeamworkWhite64 = forwardRef(function SvgTeamworkWhite64(
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
      viewBox='0 0 64 64'
      fill='none'
      className={className}
      style={svgStyle}
      ref={ref}
      data-testid={testId}
    >
      <g clipPath='url(#a)'>
        <path
          opacity={0.3}
          d='M54.01 58.715a9.085 9.085 0 0 1-2.608-6.383 5.011 5.011 0 0 1 .503-2.29l9.209-2.456a9.41 9.41 0 0 0-3.09-2.121 9.366 9.366 0 0 0-3.667-.744 9.56 9.56 0 0 0-4.87 1.19 9.628 9.628 0 0 0-3.61 3.496l-27.893-.017a9.459 9.459 0 0 0-4.068-3.745 9.391 9.391 0 0 0-10.434 1.567 9.504 9.504 0 0 0-2.803 4.777l9.311-2.483a9.084 9.084 0 0 1 2.608 6.384 5.01 5.01 0 0 1-.503 2.29l-9.209 2.455a9.412 9.412 0 0 0 3.09 2.121 9.368 9.368 0 0 0 3.667.744 9.56 9.56 0 0 0 4.87-1.19 9.628 9.628 0 0 0 3.61-3.495l27.892.015a9.46 9.46 0 0 0 4.069 3.746 9.392 9.392 0 0 0 10.434-1.566 9.504 9.504 0 0 0 2.803-4.778l-9.31 2.483ZM47.66 16.101c4.284 0 7.757-3.492 7.757-7.8C55.417 3.992 51.944.5 47.661.5c-4.284 0-7.757 3.492-7.757 7.8 0 4.309 3.473 7.801 7.757 7.801ZM47.66 19.16c-4.153 0-8.136 1.66-11.073 4.613A15.796 15.796 0 0 0 32 34.91h31.321c0-2.069-.405-4.117-1.192-6.028a15.757 15.757 0 0 0-3.395-5.11 15.655 15.655 0 0 0-5.08-3.413 15.582 15.582 0 0 0-5.993-1.2Z'
          fill='#231F20'
        />
        <path
          d='M54.142 64a9.948 9.948 0 0 1-4.797-1.253 10.017 10.017 0 0 1-3.609-3.417l-27.325-.016a10.122 10.122 0 0 1-3.772 3.501A10.053 10.053 0 0 1 9.643 64a9.819 9.819 0 0 1-3.861-.78 9.865 9.865 0 0 1-3.252-2.235l-.595-.614 9.812-2.616a4.718 4.718 0 0 0 .354-1.866 8.506 8.506 0 0 0-2.272-5.823L0 52.686l.195-.815a10.005 10.005 0 0 1 2.898-4.98 9.914 9.914 0 0 1 5.153-2.538 9.885 9.885 0 0 1 5.688.75 9.953 9.953 0 0 1 4.329 3.787l27.326.017a10.123 10.123 0 0 1 3.773-3.502 10.053 10.053 0 0 1 4.996-1.184 9.81 9.81 0 0 1 3.861.78 9.858 9.858 0 0 1 3.25 2.236l.596.613-9.812 2.616a4.72 4.72 0 0 0-.354 1.865 8.504 8.504 0 0 0 2.272 5.824L64 55.535l-.195.815a9.97 9.97 0 0 1-3.508 5.515A9.873 9.873 0 0 1 54.142 64ZM17.83 58.314l28.468.016.145.245a8.964 8.964 0 0 0 3.662 3.454 8.898 8.898 0 0 0 9.589-.969 8.994 8.994 0 0 0 2.905-4.118l-8.746 2.332-.203-.214a9.498 9.498 0 0 1-2.039-3.09 9.54 9.54 0 0 1-.706-3.639 5.47 5.47 0 0 1 .56-2.523l.102-.194 8.55-2.28a8.83 8.83 0 0 0-5.76-2.113 9.017 9.017 0 0 0-4.62 1.114 9.082 9.082 0 0 0-3.425 3.314l-.142.258-28.47-.017-.144-.245a8.963 8.963 0 0 0-3.662-3.454 8.899 8.899 0 0 0-9.588.97 8.993 8.993 0 0 0-2.905 4.118l8.746-2.332.203.213a9.5 9.5 0 0 1 2.039 3.09 9.543 9.543 0 0 1 .706 3.64 5.468 5.468 0 0 1-.56 2.523l-.102.193-8.55 2.28A8.84 8.84 0 0 0 9.643 63a9.017 9.017 0 0 0 4.621-1.114 9.08 9.08 0 0 0 3.424-3.314l.142-.258ZM16.34 16.602a8.22 8.22 0 0 1-4.586-1.4 8.291 8.291 0 0 1-3.04-3.725 8.345 8.345 0 0 1-.47-4.796 8.316 8.316 0 0 1 2.26-4.25A8.24 8.24 0 0 1 14.728.16a8.21 8.21 0 0 1 4.769.472 8.264 8.264 0 0 1 3.704 3.057 8.335 8.335 0 0 1-1.03 10.478 8.24 8.24 0 0 1-5.833 2.435ZM16.34 1a7.23 7.23 0 0 0-4.034 1.23 7.292 7.292 0 0 0-2.673 3.277 7.34 7.34 0 0 0-.413 4.218 7.314 7.314 0 0 0 1.986 3.738 7.247 7.247 0 0 0 3.717 1.998 7.221 7.221 0 0 0 4.194-.415 7.269 7.269 0 0 0 3.258-2.69 7.33 7.33 0 0 0-.905-9.215A7.247 7.247 0 0 0 16.34 1ZM32.497 34.91h-.994c0-4.044-1.598-7.923-4.441-10.783a15.12 15.12 0 0 0-10.723-4.467 15.12 15.12 0 0 0-10.722 4.467A15.294 15.294 0 0 0 1.176 34.91H.182c0-4.31 1.702-8.443 4.732-11.49a16.111 16.111 0 0 1 11.425-4.76c4.286 0 8.396 1.712 11.426 4.76a16.297 16.297 0 0 1 4.732 11.49ZM47.66 16.602a8.22 8.22 0 0 1-4.585-1.4 8.291 8.291 0 0 1-3.04-3.725 8.346 8.346 0 0 1-.47-4.796 8.316 8.316 0 0 1 2.26-4.25A8.24 8.24 0 0 1 46.05.16a8.21 8.21 0 0 1 4.77.472 8.264 8.264 0 0 1 3.703 3.057 8.334 8.334 0 0 1-1.03 10.478 8.24 8.24 0 0 1-5.832 2.435ZM47.66 1a7.23 7.23 0 0 0-4.032 1.23 7.292 7.292 0 0 0-2.674 3.277 7.339 7.339 0 0 0-.413 4.218 7.314 7.314 0 0 0 1.987 3.738 7.247 7.247 0 0 0 3.716 1.998 7.221 7.221 0 0 0 4.195-.415 7.27 7.27 0 0 0 3.258-2.69 7.33 7.33 0 0 0-.905-9.216A7.247 7.247 0 0 0 47.66 1Z'
          fill='#fff'
        />
        <path
          d='M63.818 34.91h-.994c0-4.044-1.597-7.923-4.441-10.783A15.12 15.12 0 0 0 47.66 19.66a15.12 15.12 0 0 0-10.723 4.467 15.294 15.294 0 0 0-4.44 10.783h-.995c0-4.31 1.702-8.443 4.732-11.49a16.111 16.111 0 0 1 11.426-4.76c4.285 0 8.395 1.712 11.425 4.76a16.297 16.297 0 0 1 4.732 11.49Z'
          fill='#fff'
        />
      </g>
      <defs>
        <clipPath id='a'>
          <path fill='#fff' d='M0 0h64v64H0z' />
        </clipPath>
      </defs>
    </svg>
  )
})

SvgTeamworkWhite64.displayName = 'SvgTeamworkWhite64'
export default SvgTeamworkWhite64

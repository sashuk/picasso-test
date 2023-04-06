import type { Ref } from 'react'
import React, { forwardRef } from 'react'
import type { StandardProps } from '@toptal/picasso-shared'

const SIZE = 64

type ScaleType = 1 | 2
export interface Props extends StandardProps {
  scale?: ScaleType
  base?: number
}
const SvgHandshakeWhite64 = forwardRef(function SvgHandshakeWhite64(
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
          d='m53.084 42.208 2.121 2.122a4.656 4.656 0 0 1-6.583 6.584l-1.296-1.296a4.655 4.655 0 0 1-6.583 6.585l-1.457-1.458a4.657 4.657 0 0 1-5.977 7.1L32 60.583l.593-.594a4.655 4.655 0 0 0-6.544-6.623l4.23-4.237a4.656 4.656 0 0 0-6.584-6.585 4.656 4.656 0 0 0-6.583-6.584l-1.18 1.18a4.657 4.657 0 1 0-6.583-6.585l-3.707 3.709L.5 29.097V3.126l28.088-.019-18.562 18.515a1.986 1.986 0 0 0 0 2.806 8.513 8.513 0 0 0 12.031 0l7.01-7.01a18.113 18.113 0 0 0 12.856 5.326 17.97 17.97 0 0 0 4.346-.528l12.044 12.047 1.354 1.36a4.656 4.656 0 0 1-6.583 6.585Z'
          fill='#231F20'
        />
        <path
          d='M27.978 63.176a5.158 5.158 0 0 1-3.646-8.803l1.344-1.344a5.154 5.154 0 0 1 7.291 0 5.162 5.162 0 0 1 0 7.292l-1.343 1.344a5.12 5.12 0 0 1-3.646 1.51Zm1.344-10.657a4.13 4.13 0 0 0-2.939 1.217L25.04 55.08a4.156 4.156 0 1 0 5.877 5.879l1.343-1.345a4.162 4.162 0 0 0 0-5.878 4.126 4.126 0 0 0-2.938-1.217ZM7.597 44.05a5.156 5.156 0 0 1-3.645-8.803l5.065-5.067a5.155 5.155 0 0 1 7.291 0 5.163 5.163 0 0 1 0 7.293l-5.066 5.066a5.118 5.118 0 0 1-3.645 1.51Zm5.066-14.38a4.125 4.125 0 0 0-2.939 1.217L4.66 35.954a4.155 4.155 0 1 0 5.876 5.878l5.066-5.066a4.163 4.163 0 0 0 0-5.879 4.128 4.128 0 0 0-2.938-1.217Z'
          fill='#fff'
        />
        <path
          d='M12.06 52.757a5.156 5.156 0 0 1-3.646-8.802l8.368-8.371a5.157 5.157 0 0 1 7.29 0 5.162 5.162 0 0 1 0 7.292l-8.367 8.37a5.12 5.12 0 0 1-3.646 1.511Zm8.368-17.683a4.125 4.125 0 0 0-2.939 1.217l-8.368 8.37a4.157 4.157 0 1 0 5.877 5.879l8.368-8.37a4.162 4.162 0 0 0 0-5.879 4.127 4.127 0 0 0-2.938-1.217Z'
          fill='#fff'
        />
        <path
          d='M19.941 58.044a5.157 5.157 0 0 1-3.645-8.803l7.07-7.072a5.154 5.154 0 0 1 7.29 0 5.162 5.162 0 0 1 0 7.292l-7.07 7.072a5.12 5.12 0 0 1-3.645 1.51Zm7.07-16.385a4.127 4.127 0 0 0-2.938 1.218l-7.07 7.07a4.156 4.156 0 0 0 5.877 5.88l7.07-7.073a4.161 4.161 0 0 0 0-5.877 4.127 4.127 0 0 0-2.939-1.218ZM16.067 27.396a8.947 8.947 0 0 1-6.369-2.638 2.481 2.481 0 0 1 0-3.508L28.381 2.607H63.5v1H28.795l-18.39 18.35a1.481 1.481 0 0 0 0 2.094 8.005 8.005 0 0 0 11.324 0l7.36-7.361.353.353a17.683 17.683 0 0 0 25.01 0l.411.296.354.354a18.608 18.608 0 0 1-13.27 5.53A18.553 18.553 0 0 1 29.094 18.1l-6.657 6.659a8.946 8.946 0 0 1-6.369 2.639ZM63.147 28.721l-5.166 5.167.707.707 5.166-5.166-.707-.708Z'
          fill='#fff'
        />
        <path
          d='M36.019 63.182a5.133 5.133 0 0 1-2.978-.953l-1.382-1.282.682-.731 1.33 1.24a4.16 4.16 0 0 0 5.304-6.358l-.492-.493.707-.707.475.475.02.02 1.433 1.433a4.158 4.158 0 0 0 7.094-2.94 4.157 4.157 0 0 0-1.217-2.938l.707-.707L49 50.539a4.156 4.156 0 0 0 5.877-5.877l-2.122-2.123.707-.707a4.158 4.158 0 0 0 6.789-1.343 4.157 4.157 0 0 0-.912-4.535l-13.402-13.4.707-.707 13.402 13.4a5.157 5.157 0 0 1-4.426 8.744 5.157 5.157 0 0 1-6.501 7.928 5.156 5.156 0 0 1-8.027 5.188 5.163 5.163 0 0 1-5.073 6.075ZM.854 28.724l-.708.707 5.164 5.164.707-.707-5.163-5.164ZM28.588 2.607H.5v1h28.088v-1Z'
          fill='#fff'
        />
        <path
          d='m49.394 37.763-.707.707 4.068 4.07.707-.708-4.068-4.07ZM42.81 44.348l-.708.707 4.893 4.893.707-.707-4.892-4.893ZM36.226 50.933l-.707.707 2.964 2.965.707-.707-2.964-2.965Z'
          fill='#fff'
        />
      </g>
      <defs>
        <clipPath id='a'>
          <path fill='#fff' transform='translate(0 .902)' d='M0 0h64v64H0z' />
        </clipPath>
      </defs>
    </svg>
  )
})

SvgHandshakeWhite64.displayName = 'SvgHandshakeWhite64'
export default SvgHandshakeWhite64

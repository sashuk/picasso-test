import type {
  ReactNode,
  ReactElement,
  MouseEvent,
  ElementType,
  FC,
} from 'react'
import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import type {
  StandardProps,
  ButtonOrAnchorProps,
  OverridableComponent,
  TextLabelProps,
} from '@toptal/picasso-shared'
import { useTitleCase } from '@toptal/picasso-shared'
import { Button as MUIButtonBase } from '@mui/base/Button'
import { Loader } from '@toptal/picasso-loader'
import { Container } from '@toptal/picasso-container'
import { noop, toTitleCase } from '@toptal/picasso-utils'

import { createCoreClassNames } from './styles'

export type IconPositionType = 'left' | 'right'

export interface Props
  extends StandardProps,
    TextLabelProps,
    ButtonOrAnchorProps {
  as?: ElementType
  /** Disables button */
  disabled?: boolean
  /** Content of Button component */
  children?: ReactNode
  /** ClassName for the content */
  contentClassName?: string
  /** Add an `<Icon />` along Button's children */
  icon?: ReactElement
  /** Icon can be positioned on the left or right */
  iconPosition?: IconPositionType
  /** Shows a loading indicator and disables click events */
  loading?: boolean
  /** Callback invoked when component is clicked */
  onClick?: (event: MouseEvent<HTMLButtonElement & HTMLAnchorElement>) => void
  /** HTML Value of Button component */
  value?: string | number
  /** HTML title of Button component */
  title?: string
  /** HTML type of Button component */
  type?: 'button' | 'reset' | 'submit'
}

const getClickHandler = (loading?: boolean, handler?: Props['onClick']) =>
  loading ? noop : handler

const getIcon = ({ icon }: { icon?: ReactElement }) => {
  if (!icon) {
    return null
  }

  return React.cloneElement(icon, {
    key: 'button-icon',
  })
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isReactComponent = (component: any) => {
  return (
    component &&
    (component.$$typeof === Symbol.for('react.forward_ref') ||
      typeof component === 'function')
  )
}

export const ButtonBase: OverridableComponent<Props> = forwardRef<
  HTMLButtonElement,
  Props
>(function ButtonBase(props, ref) {
  const {
    icon,
    iconPosition,
    loading,
    children,
    className,
    contentClassName,
    style,
    disabled,
    onClick,
    title,
    value,
    type,
    as = 'button',
    titleCase: propsTitleCase,
    ...rest
  } = props

  let RootElement: ElementType | FC = as

  if (isReactComponent(RootElement)) {
    RootElement = forwardRef(
      // We don't need to pass ownerState to the root component
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ({ ownerState, ...restProps }: { ownerState: object }, rootRef) => {
        const Root = as

        return <Root ref={rootRef} {...restProps} />
      }
    )
  }

  const titleCase = useTitleCase(propsTitleCase)
  const finalChildren = [titleCase ? toTitleCase(children) : children]

  if (icon) {
    const iconComponent = getIcon({ icon })

    if (iconPosition === 'left') {
      finalChildren.unshift(iconComponent)
    } else {
      finalChildren.push(iconComponent)
    }
  }

  const finalClassName = twMerge(createCoreClassNames({ disabled }), className)

  return (
    <MUIButtonBase
      {...rest}
      ref={ref}
      onClick={getClickHandler(loading, onClick)}
      className={finalClassName}
      style={style}
      disabled={disabled}
      title={title}
      value={value}
      type={type}
      data-component-type='button'
      tabIndex={rest.tabIndex ?? disabled ? -1 : 0}
      slots={{ root: RootElement }}
    >
      <Container
        as='span'
        inline
        flex
        direction='row'
        alignItems='center'
        className={contentClassName}
      >
        {finalChildren}
      </Container>

      {loading && (
        <Loader
          variant='inherit'
          className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'
          inline
          size='small'
        />
      )}
    </MUIButtonBase>
  )
})

ButtonBase.defaultProps = {
  as: 'button',
  children: null,
  disabled: false,
  iconPosition: 'left',
  loading: false,
  onClick: noop,
  type: 'button',
}

ButtonBase.displayName = 'ButtonBase'

export default ButtonBase

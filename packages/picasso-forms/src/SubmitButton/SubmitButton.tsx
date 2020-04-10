import React from 'react'
import { Button, Props as ButtonProps } from '@toptal/picasso/Button'
import { useFormState } from 'react-final-form'

export type Props = Omit<ButtonProps, 'type'>

export const SubmitButton = (props: Props) => {
  const { submitting } = useFormState()
  return (
    <Button
      type='submit'
      disabled={submitting}
      loading={submitting}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  )
}

SubmitButton.defaultProps = {}

SubmitButton.displayName = 'SubmitButton'

export default SubmitButton

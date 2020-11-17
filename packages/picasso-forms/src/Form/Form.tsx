import React, { useCallback, useMemo, ReactNode, useRef } from 'react'
import {
  Form as FinalForm,
  FormProps as FinalFormProps
} from 'react-final-form'
import { FormApi, ValidationErrors, getIn, setIn } from 'final-form'
import { Form as PicassoForm } from '@toptal/picasso'
import { useNotifications } from '@toptal/picasso/utils'

import Autocomplete from '../Autocomplete'
import Input from '../Input'
import Select from '../Select'
import Radio from '../Radio'
import RadioGroup from '../RadioGroup'
import Checkbox from '../Checkbox'
import CheckboxGroup from '../CheckboxGroup'
import NumberInput from '../NumberInput'
import FileInput from '../FileInput'
import DatePicker from '../DatePicker'
import TimePicker from '../TimePicker'
import TagSelector from '../TagSelector'
import SubmitButton from '../SubmitButton'
import { FormConfigContext } from '../FormConfig'
import { createScrollToErrorDecorator } from '../utils'
import {
  FormContext,
  Validators,
  FormContextProps,
  createFormContext
} from './FormContext'

type AnyObject = Record<string, any>

export type Props<T = AnyObject> = FinalFormProps<T> & {
  autoComplete?: HTMLFormElement['autocomplete']
  successSubmitMessage?: ReactNode
  failedSubmitMessage?: ReactNode
  scrollOffsetTop?: number
}

const getSubmitErrors = (
  validationObject: Validators,
  formValues: AnyObject,
  form: FormApi<AnyObject>
) =>
  Object.entries(validationObject).reduce<ValidationErrors | undefined>(
    (result, [key, validator]) => {
      const error: string = validator?.(
        getIn(formValues, key),
        formValues,
        form.getFieldState(key)
      )

      if (error) {
        return setIn(result || {}, key, error)
      }

      return result
    },
    undefined
  )

export const Form = <T extends any = AnyObject>(props: Props<T>) => {
  const {
    children,
    autoComplete,
    onSubmit,
    successSubmitMessage,
    failedSubmitMessage,
    decorators = [],
    ...rest
  } = props
  const { showSuccess, showError } = useNotifications()
  const scrollToErrorDecorator = useMemo(
    () => createScrollToErrorDecorator(),
    []
  )

  const validationObject = useRef<FormContextProps>(createFormContext())

  const handleSubmit = useCallback(
    async (values, form, callback) => {
      const validationErrors = getSubmitErrors(
        validationObject.current.getValidators(),
        values,
        form
      )

      if (validationErrors) {
        return validationErrors
      }

      const errors = await onSubmit(values, form, callback)

      if (!errors && successSubmitMessage) {
        showSuccess(successSubmitMessage)
      } else if (errors && failedSubmitMessage) {
        showError(failedSubmitMessage)
      }

      return errors
    },
    [
      failedSubmitMessage,
      onSubmit,
      showError,
      showSuccess,
      successSubmitMessage
    ]
  )

  return (
    <FormContext.Provider value={validationObject}>
      <FinalForm
        render={({ handleSubmit }) => (
          <PicassoForm autoComplete={autoComplete} onSubmit={handleSubmit}>
            {children}
          </PicassoForm>
        )}
        onSubmit={handleSubmit}
        decorators={[...decorators, scrollToErrorDecorator]}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
      />
    </FormContext.Provider>
  )
}

Form.defaultProps = {}

Form.displayName = 'Form'

Form.Autocomplete = Autocomplete
Form.Input = Input
Form.Select = Select
Form.Radio = Radio
Form.RadioGroup = RadioGroup
Form.Checkbox = Checkbox
Form.CheckboxGroup = CheckboxGroup
Form.NumberInput = NumberInput
Form.FileInput = FileInput
Form.DatePicker = DatePicker
Form.TimePicker = TimePicker
Form.TagSelector = TagSelector
Form.SubmitButton = SubmitButton
Form.ConfigProvider = FormConfigContext.Provider

export default Form

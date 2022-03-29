// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { Input, NumberInput } from '@toptal/picasso'

const Example = (props: Props) => {
  const { error, value, onChange, validate } = props

  const hasError = !!(error && validate)
  const valueValidationFailed = validate(value)

  return (
    <div>
      <Input
        autoFocus
        error={error}
        placeholder={placeholder}
        required={required}
        size='small'
        value={value}
        onChange={onChange}
      />
      <NumberInput
        error={hasError || valueValidationFailed}
        autoFocus
        placeholder={placeholder}
        required={required}
        size='small'
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Example

const composeValidators = (validators: any[]) => (value: any, allValues: any) =>
  validators.reduce(
    (error, validator) => error || validator(value, allValues),
    undefined
  )

const required = (value: unknown) =>
  value === undefined ||
  value === false ||
  value === '' ||
  value === null ||
  (Array.isArray(value) && value.length === 0)
    ? 'This field is required'
    : undefined

export default { composeValidators, required }

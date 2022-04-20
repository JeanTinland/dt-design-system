import * as React from 'react'
import classnames from 'classnames'
import * as Icons from '../icons'
import DateInput from './date-input'
import css from './input.module.css'

const Input = ({
  inputRef,
  type = 'text',
  label = '',
  name,
  placeholder,
  className,
  valid,
  error,
  compact,
  value,
  autoFocus,
  required,
  disabled,
  readOnly,
  onChange,
  inputProps = {}
}) => {
  const ref = React.useRef()

  const isDate = type === 'date'
  const isValid = valid && !error
  const LabelTag = isDate ? 'div' : 'label'

  const _onChange = (e) => {
    onChange?.(e.target.value, e)
  }

  const classes = classnames(css.input, {
    [css.compact]: compact,
    [css.date]: isDate,
    [className]: className,
    [css.valid]: isValid,
    [css.error]: error
  })

  return (
    <div ref={ref} className={classes}>
      <LabelTag className={css.label}>
        {(label || (isValid && !error)) && (
          <span className={css.labelText}>
            {label}
            {isValid && !error && <Icons.Check className={css.validIndicator} />}
          </span>
        )}
        <div className={css.inner}>
          {isDate ? (
            <DateInput
              value={value}
              onChange={onChange}
              inputProps={inputProps}
              fieldRef={ref}
              placeholder={placeholder}
            />
          ) : (
            <input
              ref={inputRef}
              type={type}
              name={name}
              className={css.field}
              value={value}
              onChange={_onChange}
              placeholder={placeholder}
              required={required}
              autoFocus={autoFocus}
              disabled={disabled}
              readOnly={readOnly}
              aria-invalid={isValid !== undefined && !isValid}
              {...inputProps}
            />
          )}
        </div>
      </LabelTag>
      {error && (
        <div className={css.errorMessage} role="alert">
          <Icons.XCircle className={css.errorIndicator} />
          {error}
        </div>
      )}
    </div>
  )
}
export default Input

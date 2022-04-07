import * as React from 'react'
import classnames from 'classnames'
import * as Icons from '../icons'
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
  const _onChange = (e) => {
    onChange?.(e.target.value)
  }

  const isValid = valid && !error

  const classes = classnames(css.input, {
    [css.compact]: compact,
    [className]: className,
    [css.valid]: isValid,
    [css.error]: error
  })

  return (
    <div className={classes}>
      <label className={css.label}>
        {(label || (isValid && !error)) && (
          <span className={css.labelText}>
            {label}
            {isValid && !error && (
              <div className={css.validIndicator}>
                <Icons.Check className={css.validIndicatorIcon} />
              </div>
            )}
          </span>
        )}
        <div className={css.inner}>
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
            aria-invalid={!isValid}
            {...inputProps}
          />
        </div>
      </label>
      {error && (
        <div className={css.errorMessage} role="alert">
          <div className={css.errorIndicator}>
            <Icons.XCircle className={css.errorIndicatorIcon} />
          </div>
          {error}
        </div>
      )}
    </div>
  )
}
export default Input

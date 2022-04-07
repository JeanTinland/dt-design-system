import * as React from 'react'
import classnames from 'classnames'
import * as Icons from '../icons'
import css from '../input/input.module.css'

const Select = ({
  inputRef,
  label = '',
  name,
  options = [],
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

  const classes = classnames(css.select, {
    [css.compact]: compact,
    [className]: className,
    [css.valid]: isValid,
    [css.error]: error
  })

  return (
    <div className={classes}>
      <label className={css.label}>
        {(label || isValid) && (
          <span className={css.labelText}>
            {label}
            {isValid && (
              <div className={css.validIndicator}>
                <Icons.Check className={css.validIndicatorIcon} />
              </div>
            )}
          </span>
        )}
        <div className={css.outer}>
          <div className={css.inner}>
            <select
              ref={inputRef}
              name={name}
              className={css.field}
              value={value}
              onChange={_onChange}
              autoFocus={autoFocus}
              required={required}
              disabled={disabled}
              readOnly={readOnly}
              aria-required={!!required}
              aria-invalid={!isValid}
              aria-disabled={disabled}
              aria-readonly={readOnly}
              {...inputProps}
            >
              {options.map((option) => (
                <option key={option?.value ?? option} value={option?.value ?? option}>
                  {option?.label ?? option}
                </option>
              ))}
            </select>
          </div>
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
export default Select

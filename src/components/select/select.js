import * as React from 'react'
import classnames from 'classnames'
import css from '../input/input.module.css'

const Select = ({
  inputRef,
  label,
  options = [],
  className,
  errorMessage,
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

  const classes = classnames(css.select, {
    [css.compact]: compact,
    [className]: className
  })

  return (
    <div className={classes}>
      <label className={css.label}>
        {label && <span className={css.labelText}>{label}</span>}
        <div className={css.outer}>
          <div className={css.inner}>
            <select
              ref={inputRef}
              className={css.field}
              value={value}
              onChange={_onChange}
              autoFocus={autoFocus}
              required={required}
              disabled={disabled}
              readOnly={readOnly}
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
      {errorMessage && <div className={css.error}>{errorMessage}</div>}
    </div>
  )
}
export default Select

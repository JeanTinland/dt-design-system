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
  disabled,
  readOnly,
  onChange
}) => {
  const _onChange = (e) => {
    onChange(e.target.value)
  }

  const classes = classnames(css.select, {
    [css.compact]: compact,
    [css.inputError]: errorMessage,
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
              disabled={disabled}
              readOnly={readOnly}
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

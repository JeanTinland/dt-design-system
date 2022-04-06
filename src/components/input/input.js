import * as React from 'react'
import classnames from 'classnames'
import * as Icons from '../icons'
import css from './input.module.css'

const Input = ({
  inputRef,
  type = 'text',
  label = '',
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

  const classes = classnames(css.input, {
    [css.compact]: compact,
    [className]: className,
    [css.valid]: valid,
    [css.error]: error
  })

  return (
    <div className={classes}>
      <label className={css.label}>
        {(label || valid) && (
          <span className={css.labelText}>
            {label}
            {valid && (
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
            className={css.field}
            value={value}
            onChange={_onChange}
            autoFocus={autoFocus}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            readOnly={readOnly}
            {...inputProps}
          />
        </div>
      </label>
      {error && (
        <div className={css.errorMessage}>
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

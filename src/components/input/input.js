import * as React from 'react'
import classnames from 'classnames'
import * as Icons from '../icons'
import css from './input.module.css'

const Input = ({
  inputRef,
  type = 'text',
  label,
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

  const ValidationIcon = Icons[error ? 'AlertTriangle' : 'Check']
  const showErrorMessage = error && typeof error === 'string'

  return (
    <div className={classes}>
      <label className={css.label}>
        {label && <span className={css.labelText}>{label}</span>}
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
          {(error || valid) && (
            <div className={css.validationIndicator}>
              <ValidationIcon className={css.validationIndicatorIcon} />
            </div>
          )}
        </div>
      </label>
      {showErrorMessage && <div className={css.errorMessage}>{error}</div>}
    </div>
  )
}
export default Input

import * as React from 'react'
import classnames from 'classnames'
import * as Icons from '../icons'
import css from './input.module.css'

const DatePicker = React.lazy(() => import('../date-picker'))

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
  min,
  max,
  inputProps = {}
}) => {
  const [datePickerVisible, setDatePickerVisible] = React.useState(false)

  const isDate = type === 'date'
  const isValid = valid && !error

  const _onChange = (e) => {
    if (isDate) {
      onChange?.(e)
      toggleDatePicker()
    } else {
      console.log(onChange)
      onChange?.(e.target.value, e)
    }
  }

  const classes = classnames(css.input, {
    [css.compact]: compact,
    [className]: className,
    [css.valid]: isValid,
    [css.error]: error
  })

  const toggleDatePicker = () => {
    if (isDate) {
      setDatePickerVisible(!datePickerVisible)
    }
  }

  return (
    <div className={classes}>
      <label className={css.label}>
        {(label || (isValid && !error)) && (
          <span className={css.labelText}>
            {label}
            {isValid && !error && <Icons.Check className={css.validIndicator} />}
          </span>
        )}
        <div className={css.inner}>
          <input
            key={isDate ? value : undefined}
            ref={inputRef}
            type={isDate ? 'text' : type}
            name={name}
            className={css.field}
            value={isDate && value ? new Date(value).toLocaleDateString('fr-FR') : value}
            onChange={_onChange}
            placeholder={placeholder}
            required={required}
            autoFocus={autoFocus}
            disabled={disabled}
            readOnly={isDate || readOnly}
            aria-invalid={!isValid}
            onClick={toggleDatePicker}
            {...inputProps}
          />
          {isDate && <Icons.Calendar className={css.calendarIcon} />}
        </div>
      </label>
      {isDate && datePickerVisible && (
        <React.Suspense>
          <DatePicker min={min} max={max} value={value} onChange={_onChange} />
        </React.Suspense>
      )}
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

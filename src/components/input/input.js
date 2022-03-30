import * as React from 'react'
import classnames from 'classnames'
import css from './input.module.css'

const Input = ({ fieldRef, type = 'text', label, placeholder, className, errorMessage, compact, value, onChange }) => {
  const _onChange = (e) => {
    onChange?.(e.target.value)
  }

  const classes = classnames(css.input, {
    [css.compact]: compact,
    [css[type]]: type,
    [className]: className
  })

  return (
    <div className={classes}>
      <label className={css.label}>
        {label && <span className={css.labelText}>{label}</span>}
        <div className={css.inner}>
          <input
            ref={fieldRef}
            type={type}
            className={css.field}
            value={value}
            onChange={_onChange}
            placeholder={placeholder}
          />
        </div>
      </label>
      {errorMessage && <div className={css.error}>{errorMessage}</div>}
    </div>
  )
}
export default Input

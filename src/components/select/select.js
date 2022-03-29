import * as React from 'react'
import classnames from 'classnames'
import css from './select.module.css'

const Input = ({ inputRef, type = 'text', label, placeholder, error, compact, value, onChange }) => {
  const classes = classnames(css.input, {
    [css.compact]: compact,
    [css.inputError]: error,
    [css[type]]: type
  })
  return (
    <div className={classes}>
      <label className={css.label}>
        {label && <span className={css.labelText}>{label}</span>}
        <div className={css.outer}>
          <div className={css.inner}>
            <input
              ref={inputRef}
              type={type}
              className={css.field}
              value={value}
              onChange={onChange}
              placeholder={placeholder}
            />
          </div>
        </div>
      </label>
      {error && <div className={css.error}>{error}</div>}
    </div>
  )
}
export default Input

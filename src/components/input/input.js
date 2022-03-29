import * as React from 'react'
import classnames from 'classnames'
import css from './input.module.css'

const Input = ({ inputRef, type = 'text', label, placeholder, errorMessage, compact, value, onChange }) => {
  const classes = classnames(css.input, {
    [css.compact]: compact,
    [css.inputError]: errorMessage,
    [css[type]]: type
  })
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
            onChange={onChange}
            placeholder={placeholder}
          />
        </div>
      </label>
      {errorMessage && <div className={css.error}>{errorMessage}</div>}
    </div>
  )
}
export default Input

import * as React from 'react'
import classnames from 'classnames'
import css from '../input/input.module.css'

const TextArea = ({
  fieldRef,
  type = 'text',
  label,
  placeholder,
  className,
  errorMessage,
  compact,
  value,
  onChange,
  autoSizing
}) => {
  const innerRef = React.useRef()

  const _onChange = (e) => {
    onChange?.(e.target.value)
  }

  const updateTextAreaHeight = React.useCallback(() => {
    const container = innerRef.current
    if (!autoSizing || !container) return
    const field = container.querySelector('textarea')
    field.style.height = 'inherit'
    const computedStyle = window.getComputedStyle(field)
    const height =
      parseInt(computedStyle.getPropertyValue('padding-top'), 10) +
      field.scrollHeight +
      parseInt(computedStyle.getPropertyValue('padding-bottom'), 10)
    field.style.height = `${height}px`
  }, [autoSizing])

  React.useEffect(updateTextAreaHeight, [updateTextAreaHeight])

  const classes = classnames(css.textarea, {
    [css.compact]: compact,
    [css[type]]: type,
    [css.autoSizing]: autoSizing,
    [className]: className
  })

  return (
    <div className={classes}>
      <label className={css.label}>
        {label && <span className={css.labelText}>{label}</span>}
        <div ref={innerRef} className={css.inner}>
          <textarea
            ref={fieldRef}
            type={type}
            className={css.field}
            value={value}
            onChange={_onChange}
            onInput={updateTextAreaHeight}
            onFocus={updateTextAreaHeight}
            placeholder={placeholder}
          />
        </div>
      </label>
      {errorMessage && <div className={css.error}>{errorMessage}</div>}
    </div>
  )
}
export default TextArea

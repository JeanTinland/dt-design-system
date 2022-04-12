import * as React from 'react'
import classnames from 'classnames'
import Checkbox from '../checkbox'
import * as Icons from '../icons'
import css from './multiple-select.module.css'
import cssInput from '../input/input.module.css'

const MultipleSelect = ({
  inputRef,
  label = '',
  name,
  options = [],
  valueLabel,
  className,
  valid,
  error,
  compact,
  values = [],
  autoFocus,
  required,
  disabled,
  onChange,
  defaultOpened = false,
  onOpen
}) => {
  const ref = React.useRef()
  const [opened, setOpened] = React.useState(defaultOpened)
  const isValid = valid && !error

  const closeOnOutsideClick = React.useCallback(
    (e) => {
      const target = e.target.closest(`.${css.select}`)
      if (target === ref.current) return
      setOpened(false)
    },
    [setOpened]
  )

  const _onChange = (option) => () => {
    const value = option?.value ?? option
    const isSelected = values.find((o) => {
      return o === value || o.value === value
    })

    const newValues = isSelected
      ? values.filter((v) => {
          const isObject = typeof v !== 'string'
          return isObject ? v.value !== value : v !== value
        })
      : [...values, option]

    onChange?.(newValues)
  }

  const toggleDropdown = () => {
    const newOpenedValue = !opened
    setOpened(newOpenedValue)
    onOpen?.(newOpenedValue)
  }

  React.useEffect(() => {
    document.body.addEventListener('click', closeOnOutsideClick)
    return () => document.body.removeEventListener('click', closeOnOutsideClick)
  }, [closeOnOutsideClick])

  const classes = classnames(cssInput.select, css.select, {
    [cssInput.compact]: compact,
    [className]: className,
    [cssInput.valid]: isValid,
    [cssInput.error]: error,
    [css.opened]: opened
  })

  return (
    <div ref={ref} className={classes}>
      <label className={cssInput.label}>
        {(label || isValid) && (
          <span className={cssInput.labelText}>
            {label}
            {isValid && <Icons.Check className={cssInput.validIndicator} />}
          </span>
        )}
        <div className={cssInput.outer}>
          <div className={cssInput.inner}>
            <input
              ref={inputRef}
              type="text"
              name={name}
              className={cssInput.field}
              required={required}
              autoFocus={autoFocus}
              disabled={disabled}
              value={valueLabel}
              readOnly
              aria-invalid={!isValid}
              onClick={toggleDropdown}
            />
          </div>
        </div>
      </label>
      <div className={css.dropdown}>
        <div role="listbox" className={css.dropdownInner}>
          {options.map((option) => {
            const label = option?.label ?? option
            const value = option?.value ?? option

            const isSelected =
              values.find((o) => {
                return o === value || o.value === value
              }) ?? false

            const classes = classnames(css.option, {
              [css.optionSelected]: isSelected
            })

            const inputProps = { tabIndex: opened ? 0 : -1 }

            return (
              <div key={value} role="listitem">
                <Checkbox
                  className={classes}
                  label={label}
                  value={isSelected}
                  onChange={_onChange(option)}
                  inputProps={inputProps}
                />
              </div>
            )
          })}
        </div>
      </div>
      {error && (
        <div className={cssInput.errorMessage} role="alert">
          <Icons.XCircle className={cssInput.errorIndicator} />
          {error}
        </div>
      )}
    </div>
  )
}

export default MultipleSelect

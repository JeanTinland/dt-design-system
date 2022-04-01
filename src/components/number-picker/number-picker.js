import * as React from 'react'
import classnames from 'classnames'
import * as Icons from '../icons'
import Button from '../button'
import css from './number-picker.module.css'

const subtract = (value, min, max, onChange) => () => {
  changeValue(value, -1, min, max, onChange)
}

const add = (value, min, max, onChange) => () => {
  changeValue(value, 1, min, max, onChange)
}

const changeValue = (value, step, min, max, onChange) => {
  const newValue = value + step
  if (newValue >= min && newValue <= max) {
    onChange(newValue)
  }
}

const isBelow = (val, min, disabled) => disabled || val <= min

const isAbove = (val, max, disabled) => disabled || val >= max

const NumberPicker = ({ label, min = 0, max = Infinity, value, disabled, onChange }) => {
  const classes = classnames(css.picker, {
    [css.active]: value > 0,
    [css.disabled]: disabled
  })

  return (
    <div className={classes}>
      {label && <div className={css.label}>{label}</div>}
      <div className={css.inner}>
        <Button
          onClick={subtract(value, min, max, onChange)}
          StartIcon={Icons.ChevronLeft}
          disabled={isBelow(value, min, disabled)}
          compact
        />
        <span className={css.value}>{value}</span>
        <Button
          onClick={add(value, min, max, onChange)}
          StartIcon={Icons.ChevronRight}
          disabled={isAbove(value, max, disabled)}
          compact
        />
      </div>
    </div>
  )
}

export default NumberPicker

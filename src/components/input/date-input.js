import * as React from 'react'
import classnames from 'classnames'
import DatePicker from '../date-picker'
import * as Icons from '../icons'
import css from './input.module.css'

const DateInput = ({ fieldRef, value, onChange, placeholder = 'JJ/MM/AAAA', inputProps }) => {
  const [datePickerVisible, setDatePickerVisible] = React.useState(false)

  const closeOnOutsideClick = React.useCallback(
    (e) => {
      if (fieldRef.current.contains(e.target)) return
      setDatePickerVisible(false)
    },
    [fieldRef]
  )

  const toggleDatePicker = () => {
    setDatePickerVisible(!datePickerVisible)
  }

  React.useEffect(() => {
    document.body.addEventListener('click', closeOnOutsideClick)
    return () => document.body.removeEventListener('click', closeOnOutsideClick)
  }, [closeOnOutsideClick])

  const formatedValue = value ? new Date(value).toLocaleDateString('fr-FR') : placeholder

  const classes = classnames(css.field, css.dateField)

  return (
    <>
      <div className={classes} onClick={toggleDatePicker} tabIndex="0">
        {formatedValue}
      </div>
      <Icons.Calendar className={css.calendarIcon} />
      {datePickerVisible && (
        <DatePicker
          className={css.datePicker}
          min={inputProps?.min}
          max={inputProps?.max}
          value={value}
          onChange={onChange}
        />
      )}
    </>
  )
}

export default DateInput

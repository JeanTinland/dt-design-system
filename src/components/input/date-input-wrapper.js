import * as React from 'react'
import * as ReactDOM from 'react-dom'
import css from './date-input-wrapper.module.css'

const DateInputWrapper = ({ container, children }) => {
  const { top, left, height } = container.getBoundingClientRect()
  const styles = {
    top: top + height,
    left
  }
  return ReactDOM.createPortal(
    <div className={css.dateInputWrapper} style={styles}>
      {children}
    </div>,
    document.body
  )
}

export default DateInputWrapper

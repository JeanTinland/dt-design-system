import * as React from 'react'
import DateItem from './date-item'
import Button from '../button'
import * as Icons from '../icons'
import * as Data from './data'
import * as Utils from './utils'
import css from './date-picker.module.css'
import Menu from './menu'

const DatePicker = ({ lang = 'fr', min, max, value, onChange, defaultMonth, defaultYear }) => {
  const [menuOpened, setMenuOpened] = React.useState(false)
  const locale = lang || navigator?.language === 'fr' ? 'fr' : 'en'
  const now = new Date()

  const minDate = min && new Date(min)
  minDate?.setHours(0, 0, 0, 0)
  const maxDate = max && new Date(max)
  maxDate?.setHours(0, 0, 0, 0)

  const currentMonth = now.getMonth() + 1
  const currentYear = now.getFullYear()

  const [month, setMonth] = React.useState(defaultMonth || currentMonth)
  const [year, setYear] = React.useState(defaultYear || currentYear)

  const pastMonthDisabled =
    (minDate && month <= minDate.getMonth() + 1 && year <= minDate.getFullYear()) ||
    (minDate && !maxDate && month <= currentMonth && year <= currentYear)

  const futureMonthDisabled =
    (maxDate && month >= maxDate.getMonth() + 1 && year >= maxDate.getFullYear()) ||
    (maxDate && !minDate && month >= currentMonth && year >= currentYear)

  const yearSelectLocked = pastMonthDisabled && futureMonthDisabled

  const i18nMonths = Data.MONTHS[locale]
  const monthName = i18nMonths[Object.keys(i18nMonths)[month - 1]]
  const i18nWeekDays = Data.WEEK_DAYS[locale]
  const days = Object.keys(i18nWeekDays)
  const calendarDates = Data.calendar(month, year)

  const gotoPreviousMonth = () => {
    const { month: newMonth, year: newYear } = Utils.getPreviousMonth(month, year)
    setMonth(newMonth)
    setYear(newYear)
  }

  const gotoNextMonth = () => {
    const { month: newMonth, year: newYear } = Utils.getNextMonth(month, year)
    setMonth(newMonth)
    setYear(newYear)
  }

  const toggleMenu = () => {
    setMenuOpened(!menuOpened)
  }

  return (
    <div className={css.root}>
      <div className={css.inner}>
        <div className={css.header}>
          <Button
            className={css.control}
            StartIcon={Icons.ChevronLeft}
            onClick={gotoPreviousMonth}
            disabled={pastMonthDisabled}
          />
          <Button className={css.title} EndIcon={Icons.ChevronDown} onClick={toggleMenu} disabled={yearSelectLocked}>
            {monthName} {year}
          </Button>
          <Button
            className={css.control}
            StartIcon={Icons.ChevronRight}
            onClick={gotoNextMonth}
            disabled={futureMonthDisabled}
          />
        </div>
        <div className={css.days}>
          {days.map((day, i) => (
            <div key={`${day}-${i}`} className={css.day}>
              {i18nWeekDays[day]}
            </div>
          ))}
        </div>
        <div className={css.dates}>
          {calendarDates.map((date, i) => (
            <DateItem
              key={i}
              date={date}
              month={month}
              year={year}
              value={value}
              onChange={onChange}
              minDate={minDate}
              maxDate={maxDate}
            />
          ))}
        </div>
        {menuOpened && (
          <Menu
            lang={locale}
            toggleMenu={toggleMenu}
            year={year}
            currentYear={currentYear}
            selectedMonth={month}
            minDate={minDate}
            maxDate={maxDate}
            setMonth={setMonth}
            setYear={setYear}
          />
        )}
      </div>
    </div>
  )
}

export default DatePicker
import * as React from "react";
import classnames from "classnames";
import * as Utils from "./utils";
import css from "./date-item.module.css";

const DateItem = ({ date, month, year, value, onChange, minDate, maxDate }) => {
  const dateString = date.join("-");
  const _date = new Date(dateString);
  _date.setHours(0, 0, 0, 0);

  const isToday = Utils.isSameDay(_date);
  const inMonth =
    month &&
    year &&
    Utils.isSameMonth(
      _date,
      new Date(
        [Utils.zeroPad(year, 2), Utils.zeroPad(month, 2), "01"].join("-")
      )
    );

  const isDisabled =
    (minDate && _date < minDate) || (maxDate && _date > maxDate);

  const updateDateSelection = () => {
    if (isDisabled) return;
    onChange(value === dateString ? undefined : dateString);
  };

  const classes = classnames(css.date, {
    [css.dateToday]: isToday,
    [css.dateSelected]: dateString === value,
    [css.dateNotInMonth]: !inMonth,
    [css.dateDisabled]: isDisabled,
  });

  return (
    <button
      className={classes}
      onClick={updateDateSelection}
      tabIndex={isDisabled ? -1 : 0}
    >
      {_date.getDate()}
    </button>
  );
};

export default React.memo(DateItem);

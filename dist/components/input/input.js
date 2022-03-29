import * as React from 'react';
import classnames from 'classnames';
import css from './input.module.css';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

const Input = ({
  inputRef,
  type = 'text',
  label,
  placeholder,
  error,
  compact,
  value,
  onChange
}) => {
  const classes = classnames(css.input, {
    [css.compact]: compact,
    [css.inputError]: error,
    [css[type]]: type
  });
  return _jsxs("div", {
    className: classes,
    children: [_jsxs("label", {
      className: css.label,
      children: [label && _jsx("span", {
        className: css.labelText,
        children: label
      }), _jsx("div", {
        className: css.outer,
        children: _jsx("div", {
          className: css.inner,
          children: _jsx("input", {
            ref: inputRef,
            type: type,
            className: css.field,
            value: value,
            onChange: onChange,
            placeholder: placeholder
          })
        })
      })]
    }), error && _jsx("div", {
      className: css.error,
      children: error
    })]
  });
};

export default Input;
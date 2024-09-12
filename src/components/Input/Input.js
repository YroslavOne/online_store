var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import styles from './Input.module.css';
import cn from 'classnames';
// import { InputProps } from './Input.props';
var Input = forwardRef(function Input(_a, ref) {
    var _b;
    var _c = _a.isValid, isValid = _c === void 0 ? true : _c, className = _a.className, props = __rest(_a, ["isValid", "className"]);
    return (_jsx("input", __assign({ ref: ref, className: cn(styles['input'], className, (_b = {},
            _b[styles['invalid']] = isValid,
            _b)) }, props)));
});
export default Input;

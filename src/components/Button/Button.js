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
import styles from "./Button.module.css";
import cn from "classnames";
function Button(_a) {
    var _b;
    var children = _a.children, className = _a.className, _c = _a.appearence, appearence = _c === void 0 ? "small" : _c, props = __rest(_a, ["children", "className", "appearence"]);
    return (_jsx("button", __assign({ className: cn(styles['button'], styles['accent'], className, (_b = {}, _b[styles['small']] = appearence === 'small', _b[styles['big']] = appearence === 'big', _b)) }, props, { children: children })));
}
export default Button;

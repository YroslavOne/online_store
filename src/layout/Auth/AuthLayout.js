import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet } from 'react-router-dom';
import styles from './AuthLayout.module.css';
export function AuthLayout() {
    return (_jsxs("div", { className: styles['layout'], children: [_jsx("div", { className: styles['logo'], children: _jsx("img", { src: "/logo.png", alt: "" }) }), _jsx("div", { className: styles['content'], children: _jsx(Outlet, {}) })] }));
}

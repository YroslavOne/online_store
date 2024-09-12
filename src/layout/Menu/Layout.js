import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import ButtonWithIcon from '../../components/ButtonWithIcon/ButtonWithIcon';
import styles from './Layout.module.css';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile, userActions } from '../../store/user.slice';
export function Layout() {
    var navigate = useNavigate();
    var location = useLocation();
    var dispatch = useDispatch();
    var profile = useSelector(function (s) { return s.user.profile; });
    var items = useSelector(function (s) { return s.cart.items; });
    useEffect(function () {
        dispatch(getProfile());
    }, [dispatch]);
    var logout = function () {
        dispatch(userActions.logout());
        navigate('/auth/login');
    };
    useEffect(function () {
        console.log('location');
    }, [location]);
    return (_jsxs("div", { className: styles['layout'], children: [_jsxs("div", { className: styles['sidebar'], children: [_jsxs("div", { className: styles['user'], children: [_jsx("img", { src: "/avatar.png", alt: "" }), _jsx("div", { className: styles['name'], children: profile === null || profile === void 0 ? void 0 : profile.name }), _jsx("div", { className: styles['email'], children: profile === null || profile === void 0 ? void 0 : profile.email })] }), _jsxs("div", { className: styles['menu'], children: [_jsxs(NavLink, { to: "/", className: function (_a) {
                                    var _b;
                                    var isActive = _a.isActive;
                                    return cn(styles['link'], (_b = {},
                                        _b[styles.active] = isActive,
                                        _b));
                                }, children: [_jsx("img", { src: "/menu-icon.png", alt: "" }), "\u041C\u0435\u043D\u044E"] }), _jsxs(NavLink, { to: "/cart", className: function (_a) {
                                    var _b;
                                    var isActive = _a.isActive;
                                    return cn(styles['link'], (_b = {},
                                        _b[styles.active] = isActive,
                                        _b));
                                }, children: [_jsx("img", { src: "/cart-icon.png", alt: "" }), "\u041A\u043E\u0440\u0437\u0438\u043D\u0430 ", _jsx("span", { className: styles["cart-count"], children: items.reduce(function (acc, item) { return (acc += item.count); }, 0) })] })] }), _jsx(ButtonWithIcon, { onClick: logout, image: "/exit-icon.png", children: "\u0412\u044B\u0445\u043E\u0434" })] }), _jsx("div", { className: styles['content'], children: _jsx(Outlet, {}) })] }));
}

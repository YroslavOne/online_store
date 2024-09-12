import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Suspense } from "react";
import { Await, useLoaderData, useNavigate } from "react-router-dom";
import Headling from "../../components/Headling/Headling";
import ButtonWithIcon from "../../components/ButtonWithIcon/ButtonWithIcon";
import styles from "./Product.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart.slice";
export function Product() {
    var data = useLoaderData();
    var navigate = useNavigate();
    var dispatch = useDispatch();
    return (_jsx(_Fragment, { children: _jsx(Suspense, { fallback: "Загружаю...", children: _jsx(Await, { resolve: data.data, children: function (_a) {
                    var data = _a.data;
                    return (_jsxs("div", { children: [_jsxs("div", { className: styles['header'], children: [_jsxs("div", { className: styles['button-and-title'], children: [_jsx("button", { className: styles["arrow"], onClick: function () { return navigate("/"); }, children: _jsx("img", { src: "/arrow.png", alt: "" }) }), _jsxs(Headling, { children: [data.name, " "] })] }), _jsx(ButtonWithIcon, { className: styles["button"], onClick: function () { return dispatch(cartActions.add(data.id)); }, image: "/cart.png", children: "\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0443" })] }), _jsxs("div", { className: styles['contant'], children: [_jsx("img", { className: styles['image'], src: data.image, alt: "" }), _jsxs("div", { className: styles['description'], children: [_jsxs("div", { className: styles['container-description'], children: [_jsx("div", { className: styles['title'], children: "\u0426\u0435\u043D\u0430" }), _jsxs("div", { className: styles['price'], children: [data.price, " ", _jsx("span", { children: "\u20BD" })] })] }), _jsx("hr", { className: styles['hr'] }), _jsxs("div", { className: styles['container-description'], children: [_jsx("div", { className: styles['title'], children: "\u0420\u0435\u0439\u0442\u0438\u043D\u0433" }), _jsx("div", { className: styles['container-rating'], children: _jsxs("div", { className: styles["rating"], children: [data.rating, _jsx("img", { className: styles["star"], src: "/star.png" })] }) })] }), _jsxs("div", { className: styles['container-compound'], children: [_jsx("div", { className: styles['title-ul'], children: "\u0421\u043E\u0441\u0442\u0430\u0432" }), _jsx("ul", { className: styles['ul'], children: data.ingredients.map(function (i, index) { return (_jsx("li", { children: i }, index)); }) })] })] })] })] }, data.id));
                } }) }) }));
}

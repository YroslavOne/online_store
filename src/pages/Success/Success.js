import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import styles from './Success.module.css';
export function Success() {
    var navigate = useNavigate();
    return (_jsxs("div", { className: styles['success'], children: [_jsx("img", { src: "/pizza.png", alt: "" }), _jsx("div", { className: styles['text'], children: "\u0412\u0430\u0448 \u0437\u0430\u043A\u0430\u0437 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D!" }), _jsx(Button, { onClick: function () { return navigate('/'); }, appearence: "big", children: "\u0421\u0434\u0435\u043B\u0430\u0442\u044C \u043D\u043E\u0432\u044B\u0439" })] }));
}

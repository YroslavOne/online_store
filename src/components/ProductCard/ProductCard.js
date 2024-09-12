import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart.slice";
function ProductCard(_a) {
    var title = _a.title, description = _a.description, price = _a.price, rating = _a.rating, image = _a.image, id = _a.id;
    var dispatch = useDispatch();
    var add = function (e) {
        e.preventDefault();
        dispatch(cartActions.add(id));
    };
    return (_jsx(Link, { to: "/product/".concat(id), className: styles["link"], children: _jsxs("div", { className: styles["card"], children: [_jsxs("div", { className: styles["head"], children: [_jsxs("div", { className: styles["price"], children: [price, " ", _jsx("span", { className: styles["currency"], children: "\u20BD" })] }), _jsx("button", { className: styles["add-to-cart"], onClick: add, children: _jsx("img", { src: "/cart.png" }) }), _jsx("img", { className: styles["img"], src: image }), _jsxs("div", { className: styles["rating"], children: [rating, _jsx("img", { className: styles["star"], src: "/star.png" })] })] }), _jsxs("div", { className: styles["footer"], children: [_jsx("div", { className: styles["title"], children: title }), _jsx("div", { className: styles["description"], children: description })] })] }, id) }));
}
export default ProductCard;

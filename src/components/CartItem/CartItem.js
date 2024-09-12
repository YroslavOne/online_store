import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart.slice';
import styles from './CartItem.module.css';
function CartItem(props) {
    var dispatch = useDispatch();
    var increase = function () {
        dispatch(cartActions.add(props.id));
    };
    var discrease = function () {
        dispatch(cartActions.remove(props.id));
    };
    var remove = function () {
        dispatch(cartActions.delete(props.id));
    };
    return (_jsxs("div", { className: styles['item'], children: [_jsx("div", { className: styles['image'], style: { background: "url('".concat(props.image, "')") } }), _jsxs("div", { className: styles['description'], children: [_jsx("div", { className: styles["name"], children: props.name }), _jsxs("div", { className: styles['price'], children: [props.price, "\u00A0 \u20BD"] })] }), _jsxs("div", { className: styles['actions'], children: [_jsx("button", { className: styles['minus'], onClick: discrease, children: _jsx("img", { src: "/minus.svg" }) }), _jsx("div", { className: styles['number'], children: props.count }), _jsx("button", { className: styles['plus'], onClick: increase, children: _jsx("img", { src: "/plus.svg" }) }), _jsx("button", { className: styles['remove'], onClick: remove, children: _jsx("img", { src: "/remove.png" }) })] })] }));
}
export default CartItem;

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useDispatch, useSelector } from "react-redux";
import Headling from "../../components/Headling/Headling";
import CartItem from "../../components/CartItem/CartItem";
import { useEffect, useState } from "react";
import axios from "axios";
import { PREFIX } from "../../helpers/API";
import styles from './Cart.module.css';
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { cartActions } from "../../store/cart.slice";
export function Cart() {
    var _this = this;
    var _a = useState([]), cartProducts = _a[0], setCartProducts = _a[1];
    var items = useSelector(function (s) { return s.cart.items; });
    var jwt = useSelector(function (s) { return s.user.jwt; });
    var navigate = useNavigate();
    var dispatch = useDispatch();
    var DELIVERY_FEE = 169;
    var total = items.map(function (i) {
        var product = cartProducts.find(function (p) { return p.id === i.id; });
        if (!product) {
            return;
        }
        return i.count * product.price;
    }).reduce(function (acc, i) { return acc += i; }, 0);
    var checkout = function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.post("".concat(PREFIX, "/order"), {
                        products: items
                    }, {
                        headers: {
                            Authorization: "Bearer ".concat(jwt)
                        }
                    })];
                case 1:
                    _a.sent();
                    dispatch(cartActions.clean());
                    navigate('/success');
                    return [2 /*return*/];
            }
        });
    }); };
    var getItem = function (id) { return __awaiter(_this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.get("".concat(PREFIX, "/products/").concat(id))];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    var loadAllItems = function () { return __awaiter(_this, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(items.map(function (i) { return getItem(i.id); }))];
                case 1:
                    res = _a.sent();
                    setCartProducts(res);
                    return [2 /*return*/];
            }
        });
    }); };
    useEffect(function () {
        loadAllItems();
    }, [items]);
    return (_jsxs(_Fragment, { children: [_jsx(Headling, { children: " \u041A\u043E\u0440\u0437\u0438\u043D\u0430" }), items.map(function (i) {
                var product = cartProducts.find(function (p) { return p.id === i.id; });
                if (!product) {
                    return;
                }
                return _jsx(CartItem, __assign({ count: i.count }, product), i.id);
            }), _jsxs("div", { className: styles['line'], children: [_jsx("div", { className: styles['text'], children: "\u0418\u0442\u043E\u0433" }), _jsxs("div", { className: styles['price'], children: [total, " \u20BD"] })] }), _jsx("hr", { className: styles['hr'] }), _jsxs("div", { className: styles['line'], children: [_jsx("div", { className: styles['text'], children: "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430" }), _jsxs("div", { className: styles['price'], children: [DELIVERY_FEE, " \u20BD"] })] }), _jsx("hr", { className: styles['hr'] }), _jsxs("div", { className: styles['line'], children: [_jsxs("div", { className: styles['text'], children: ["\u0418\u0442\u043E\u0433 ", _jsx("span", { className: styles['total-count'], children: "(2)" })] }), _jsxs("div", { className: styles['price'], children: [DELIVERY_FEE + total, " \u20BD"] })] }), _jsx("hr", { className: styles['hr'] }), _jsx("div", { className: styles['checkout'], children: _jsx(Button, { onClick: checkout, appearence: "big", className: styles['checkout'], children: "\u043E\u0444\u043E\u0440\u043C\u0438\u0442\u044C" }) })] }));
}

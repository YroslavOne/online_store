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
import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import Headling from '../../components/Headling/Headling';
import Search from '../../components/Search/Search';
import { PREFIX } from '../../helpers/API';
import styles from './Menu.module.css';
import { MenuList } from './MenuList/MenuList';
function Menu() {
    var _this = this;
    var _a = useState([]), products = _a[0], setProducts = _a[1];
    var _b = useState(false), isLoading = _b[0], setIsLoading = _b[1];
    var _c = useState(undefined), error = _c[0], setError = _c[1];
    var _d = useState(), filter = _d[0], setFilter = _d[1];
    useEffect(function () {
        getMenu(filter);
    }, [filter]);
    var updateFilter = function (e) {
        setFilter(e.target.value);
    };
    var getMenu = function (name) { return __awaiter(_this, void 0, void 0, function () {
        var data, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, new Promise(function (resolve) {
                            setIsLoading(true);
                            resolve();
                        })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, axios.get("".concat(PREFIX, "/products"), {
                            params: {
                                name: name
                            }
                        })];
                case 2:
                    data = (_a.sent()).data;
                    setProducts(data);
                    setIsLoading(false);
                    setError(undefined);
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    console.error(e_1);
                    if (e_1 instanceof AxiosError) {
                        setError(e_1.message);
                    }
                    setIsLoading(false);
                    return [2 /*return*/];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: styles['head'], children: [_jsx(Headling, { children: "MENU" }), _jsx(Search, { placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0431\u043B\u044E\u0434\u043E \u0438\u043B\u0438 \u0441\u043E\u0441\u0442\u0430\u0432", onChange: updateFilter })] }), _jsxs("div", { children: [error && _jsx(_Fragment, { children: error }), !isLoading && products.length > 0 && _jsx(MenuList, { products: products }), isLoading && _jsx(_Fragment, { children: "\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043C \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u044B..." }), !isLoading && products.length === 0 && _jsx(_Fragment, { children: "\u041D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E \u0431\u043B\u044E\u0434 \u043F\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0443" })] })] }));
}
export default Menu;

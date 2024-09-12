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
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter, defer } from 'react-router-dom';
import { Cart } from './pages/Cart/Cart';
import { Error } from './pages/Error/Error';
import { Layout } from './layout/Menu/Layout';
import { Product } from './pages/Product/Product';
import axios from 'axios';
import { PREFIX } from './helpers/API';
import { Login } from './pages/Login/Login';
import { Register } from './pages/Register/Register';
import { AuthLayout } from './layout/Auth/AuthLayout';
import { RequireAuth } from './helpers/RequireAuth';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Success } from './pages/Success/Success';
var Menu = lazy(function () { return import('./pages/Menu/Menu'); });
var router = createBrowserRouter([
    {
        path: '/',
        element: (_jsx(RequireAuth, { children: _jsx(Layout, {}) })),
        children: [
            {
                path: '/',
                element: (_jsx(Suspense, { fallback: _jsx(_Fragment, { children: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..." }), children: _jsx(Menu, {}) }))
            },
            {
                path: '/success',
                element: (_jsx(Success, {}))
            },
            {
                path: '/cart',
                element: _jsx(Cart, {})
            },
            {
                path: '/product/:id',
                element: _jsx(Product, {}),
                errorElement: _jsx(_Fragment, { children: "\u041E\u0448\u0438\u0431\u043A\u0430" }),
                loader: function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
                    var params = _b.params;
                    return __generator(this, function (_c) {
                        return [2 /*return*/, defer({
                                data: new Promise(function (resolve, reject) {
                                    setTimeout(function () {
                                        axios
                                            .get("".concat(PREFIX, "/products/").concat(params.id))
                                            .then(function (data) { return resolve(data); })
                                            .catch(function (e) { return reject(e); });
                                    }, 2000);
                                })
                            })];
                    });
                }); }
            }
        ]
    },
    {
        path: '/auth',
        element: _jsx(AuthLayout, {}),
        children: [
            {
                path: 'login',
                element: _jsx(Login, {})
            },
            {
                path: 'register',
                element: _jsx(Register, {})
            }
        ]
    },
    {
        path: '*',
        element: _jsx(Error, {})
    }
]);
ReactDOM.createRoot(document.getElementById('root')).render(_jsx(React.StrictMode, { children: _jsx(Provider, { store: store, children: _jsx(RouterProvider, { router: router }) }) }));

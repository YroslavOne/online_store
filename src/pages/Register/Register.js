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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Headling from '../../components/Headling/Headling';
import Input from '../../components/Input/Input';
import { register, userActions } from '../../store/user.slice';
import style from './../Login/Login.module.css';
export function Register() {
    var _this = this;
    var navigate = useNavigate();
    var dispatch = useDispatch();
    var _a = useSelector(function (s) { return s.user; }), jwt = _a.jwt, registerErrorMassage = _a.registerErrorMassage;
    useEffect(function () {
        if (jwt) {
            navigate('/');
        }
    }, [jwt, navigate]);
    var submit = function (e) { return __awaiter(_this, void 0, void 0, function () {
        var target, email, password, name;
        return __generator(this, function (_a) {
            e.preventDefault();
            dispatch(userActions.cleanRegisterError());
            target = e.target;
            email = target.email, password = target.password, name = target.name;
            dispatch(register({
                email: email.value,
                password: password.value,
                name: name.value,
            }));
            return [2 /*return*/];
        });
    }); };
    return (_jsxs("div", { className: style['login'], children: [_jsx(Headling, { children: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F" }), registerErrorMassage && (_jsx("div", { className: style['error'], children: registerErrorMassage })), _jsxs("form", { className: style['form'], onSubmit: submit, children: [_jsxs("div", { className: style['field'], children: [_jsx("label", { className: style[''], htmlFor: "email", children: "\u0412\u0430\u0448 email" }), _jsx(Input, { placeholder: "Email", name: "email", id: "email" })] }), _jsxs("div", { className: style['field'], children: [_jsxs("div", { className: style['field'], children: [_jsx("label", { htmlFor: "password", children: "\u0412\u0430\u0448 \u043F\u0430\u0440\u043E\u043B\u044C" }), _jsx(Input, { placeholder: "\u041F\u0430\u0440\u043E\u043B\u044C", name: "password", id: "password", type: "password" })] }), _jsx("label", { className: style['field'], htmlFor: "name", children: "\u0412\u0430\u0448\u0435 \u0438\u043C\u044F" }), _jsx(Input, { placeholder: "\u0418\u043C\u044F", name: "name", id: "name" })] }), _jsx(Button, { appearence: "big", children: "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F" }), _jsxs("div", { className: style['links'], children: [_jsx("div", { children: "\u0415\u0441\u0442\u044C \u0430\u043A\u043A\u0430\u043D\u0443\u0442?" }), _jsx(Link, { to: "/auth/login", children: "\u0412\u043E\u0439\u0442\u0438" })] })] })] }));
}

import { jsx as _jsx } from "react/jsx-runtime";
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
export var RequireAuth = function (_a) {
    var children = _a.children;
    var jwt = useSelector(function (s) { return s.user.jwt; });
    if (!jwt) {
        return _jsx(Navigate, { to: "/auth/login" });
    }
    return children;
};

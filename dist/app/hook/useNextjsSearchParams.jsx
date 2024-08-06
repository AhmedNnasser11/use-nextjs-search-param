"use strict";
"use client";
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
Object.defineProperty(exports, "__esModule", { value: true });
var navigation_1 = require("next/navigation");
var useNextjsSearchParams = function () {
    var searchParams = (0, navigation_1.useSearchParams)();
    var params = new URLSearchParams(searchParams.toString());
    var router = (0, navigation_1.useRouter)();
    function isJson(item) {
        try {
            return JSON.parse(item);
        }
        catch (_e) {
            return item;
        }
    }
    var onFilter = function (key, value) {
        var valueAsString = ['string', 'number'].includes(typeof value)
            ? String(value)
            : JSON.stringify(value);
        params.set(key, valueAsString);
        router.replace("?".concat(params.toString()), { scroll: false });
    };
    var onReset = function (key) {
        params.delete(key);
        router.replace("?".concat(params.toString()));
    };
    var onResetAll = function () {
        var keys = Array.from(params.keys());
        keys.forEach(function (key) {
            params.delete(key);
        });
        router.replace("?".concat(params.toString()));
    };
    var dynamicParams = Object.fromEntries(Array.from(params.entries()).map(function (_a) {
        var key = _a[0], value = _a[1];
        return [key, isJson(value)];
    }));
    return __assign({ onFilter: onFilter, onResetAll: onResetAll, onReset: onReset, page: 1 }, dynamicParams);
};
exports.default = useNextjsSearchParams;

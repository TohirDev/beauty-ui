var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import styled, { css } from "styled-components";
import { convertToCss } from "./utils/styleUtils";
var buttonStyles = {
    text: css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background: none;\n    border: none;\n    color: blue;\n  "], ["\n    background: none;\n    border: none;\n    color: blue;\n  "]))),
    contained: css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    appearance: button;\n    backface-visibility: hidden;\n    background-color: #405cf5;\n    border-radius: 6px;\n    border-width: 0;\n    box-shadow: rgba(50, 50, 93, 0.1) 0 0 0 1px inset,\n      rgba(50, 50, 93, 0.1) 0 2px 5px 0, rgba(0, 0, 0, 0.07) 0 1px 1px 0;\n    box-sizing: border-box;\n    color: #fff;\n    cursor: pointer;\n    font-family: -apple-system, system-ui, \"Segoe UI\", Roboto,\n      \"Helvetica Neue\", Ubuntu, sans-serif;\n    font-size: 100%;\n    height: 44px;\n    line-height: 1.15;\n    margin: 12px 0 0;\n    outline: none;\n    overflow: hidden;\n    padding: 0 25px;\n    position: relative;\n    text-align: center;\n    text-transform: none;\n    transform: translateZ(0);\n    transition: all 0.2s, box-shadow 0.08s ease-in;\n    user-select: none;\n    -webkit-user-select: none;\n    touch-action: manipulation;\n\n    &:disabled {\n      cursor: default;\n    }\n\n    &:focus {\n      box-shadow: rgba(50, 50, 93, 0.1) 0 0 0 1px inset,\n        rgba(50, 50, 93, 0.2) 0 6px 15px 0, rgba(0, 0, 0, 0.1) 0 2px 2px 0,\n        rgba(50, 151, 211, 0.3) 0 0 0 4px;\n    }\n    &:active {\n      transform: scale(0.98);\n    }\n  "], ["\n    appearance: button;\n    backface-visibility: hidden;\n    background-color: #405cf5;\n    border-radius: 6px;\n    border-width: 0;\n    box-shadow: rgba(50, 50, 93, 0.1) 0 0 0 1px inset,\n      rgba(50, 50, 93, 0.1) 0 2px 5px 0, rgba(0, 0, 0, 0.07) 0 1px 1px 0;\n    box-sizing: border-box;\n    color: #fff;\n    cursor: pointer;\n    font-family: -apple-system, system-ui, \"Segoe UI\", Roboto,\n      \"Helvetica Neue\", Ubuntu, sans-serif;\n    font-size: 100%;\n    height: 44px;\n    line-height: 1.15;\n    margin: 12px 0 0;\n    outline: none;\n    overflow: hidden;\n    padding: 0 25px;\n    position: relative;\n    text-align: center;\n    text-transform: none;\n    transform: translateZ(0);\n    transition: all 0.2s, box-shadow 0.08s ease-in;\n    user-select: none;\n    -webkit-user-select: none;\n    touch-action: manipulation;\n\n    &:disabled {\n      cursor: default;\n    }\n\n    &:focus {\n      box-shadow: rgba(50, 50, 93, 0.1) 0 0 0 1px inset,\n        rgba(50, 50, 93, 0.2) 0 6px 15px 0, rgba(0, 0, 0, 0.1) 0 2px 2px 0,\n        rgba(50, 151, 211, 0.3) 0 0 0 4px;\n    }\n    &:active {\n      transform: scale(0.98);\n    }\n  "]))),
    outlined: css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    background: none;\n    border: 2px solid blue;\n    color: blue;\n  "], ["\n    background: none;\n    border: 2px solid blue;\n    color: blue;\n  "]))),
};
var StyledButton = styled.button(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  padding: 10px 20px;\n  font-size: 16px;\n  cursor: pointer;\n  ", "\n  ", "\n"], ["\n  padding: 10px 20px;\n  font-size: 16px;\n  cursor: pointer;\n  ", "\n  ", "\n"])), function (_a) {
    var variant = _a.variant;
    return buttonStyles[variant];
}, function (_a) {
    var customStyle = _a.customStyle;
    return customStyle && convertToCss(customStyle);
});
export var Button = function (_a) {
    var variant = _a.variant, children = _a.children, customStyle = _a.customStyle, props = __rest(_a, ["variant", "children", "customStyle"]);
    return (_jsx(StyledButton, __assign({ variant: variant, customStyle: customStyle }, props, { children: children })));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;

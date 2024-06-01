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
var buttonStyle = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  appearance: button;\n  backface-visibility: hidden;\n  border-radius: 6px;\n  border-width: 0;\n  box-sizing: border-box;\n  cursor: pointer;\n  font-family: system-ui, \"Segoe UI\", Roboto, \"Helvetica Neue\", Ubuntu,\n    sans-serif;\n  font-size: 100%;\n  height: 44px;\n  line-height: 1.15;\n  outline: none;\n  overflow: hidden;\n  padding: 0 25px;\n  text-align: center;\n  transition: all 0.2s, box-shadow 0.08s ease-in;\n  user-select: none;\n  -webkit-user-select: none;\n\n  &:disabled {\n    background-color: #a0a0a0;\n    cursor: not-allowed;\n    box-shadow: none;\n  }\n\n  &:active {\n    transform: scale(0.98);\n  }\n\n  &:disabled:active {\n    transform: none;\n  }\n"], ["\n  appearance: button;\n  backface-visibility: hidden;\n  border-radius: 6px;\n  border-width: 0;\n  box-sizing: border-box;\n  cursor: pointer;\n  font-family: system-ui, \"Segoe UI\", Roboto, \"Helvetica Neue\", Ubuntu,\n    sans-serif;\n  font-size: 100%;\n  height: 44px;\n  line-height: 1.15;\n  outline: none;\n  overflow: hidden;\n  padding: 0 25px;\n  text-align: center;\n  transition: all 0.2s, box-shadow 0.08s ease-in;\n  user-select: none;\n  -webkit-user-select: none;\n\n  &:disabled {\n    background-color: #a0a0a0;\n    cursor: not-allowed;\n    box-shadow: none;\n  }\n\n  &:active {\n    transform: scale(0.98);\n  }\n\n  &:disabled:active {\n    transform: none;\n  }\n"])));
var buttonStyles = {
    link: css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    background: none;\n    border: none;\n    color: #000;\n    position: relative;\n    &:hover::after {\n      content: \"\";\n      position: absolute;\n      left: 18px;\n      right: 0;\n      bottom: 8px;\n      border-bottom: 1px solid #000;\n      width: calc(100% - 36px);\n    }\n  "], ["\n    background: none;\n    border: none;\n    color: #000;\n    position: relative;\n    &:hover::after {\n      content: \"\";\n      position: absolute;\n      left: 18px;\n      right: 0;\n      bottom: 8px;\n      border-bottom: 1px solid #000;\n      width: calc(100% - 36px);\n    }\n  "]))),
    primary: css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    ", "\n    background-color: #1081FD;\n    color: #fff;\n  "], ["\n    ", "\n    background-color: #1081FD;\n    color: #fff;\n  "])), buttonStyle),
    outlined: css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    ", "\n    background: none;\n    border: 2px solid #18181b;\n    color: #18181b;\n  "], ["\n    ", "\n    background: none;\n    border: 2px solid #18181b;\n    color: #18181b;\n  "])), buttonStyle),
    default: css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    ", "\n    background-color: #18181b;\n    color: #fff;\n  "], ["\n    ", "\n    background-color: #18181b;\n    color: #fff;\n  "])), buttonStyle),
    danger: css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    ", "\n    background-color: #f44336;\n    color: #fff;\n  "], ["\n    ", "\n    background-color: #f44336;\n    color: #fff;\n  "])), buttonStyle),
};
var StyledButton = styled.button(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  padding: 10px 20px;\n  font-size: 16px;\n  cursor: pointer;\n  ", "\n  ", "\n"], ["\n  padding: 10px 20px;\n  font-size: 16px;\n  cursor: pointer;\n  ", "\n  ", "\n"])), function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? "default" : _b;
    return buttonStyles[variant];
}, function (_a) {
    var sx = _a.sx;
    return sx && convertToCss(sx);
});
export var Button = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? "default" : _b, children = _a.children, sx = _a.sx, props = __rest(_a, ["variant", "children", "sx"]);
    return (_jsx(StyledButton, __assign({ variant: variant, sx: sx }, props, { children: children })));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;

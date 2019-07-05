"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styles_1 = require("@material-ui/core/styles");
const Tabs_1 = __importDefault(require("@material-ui/core/Tabs"));
const Tab_1 = __importDefault(require("../Tab"));
const styles_2 = __importDefault(require("./styles"));
exports.Tabs = (_a) => {
    var { children, onChange, value } = _a, rest = __rest(_a, ["children", "onChange", "value"]);
    return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    react_1.default.createElement(Tabs_1.default, Object.assign({}, rest, { onChange: onChange, value: value }), children));
};
exports.Tabs.defaultProps = {};
exports.Tabs.displayName = 'Tabs';
exports.Tabs.Tab = Tab_1.default;
exports.default = styles_1.withStyles(styles_2.default)(exports.Tabs);
//# sourceMappingURL=Tabs.js.map
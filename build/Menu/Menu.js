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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const MenuList_1 = __importDefault(require("@material-ui/core/MenuList"));
const styles_1 = require("@material-ui/core/styles");
const MenuItem_1 = __importDefault(require("../MenuItem"));
const styles_2 = __importDefault(require("./styles"));
// eslint-disable-next-line react/display-name
exports.Menu = react_1.forwardRef(function Menu(_a, ref) {
    var { children, className, classes, style } = _a, rest = __rest(_a, ["children", "className", "classes", "style"]);
    return (react_1.default.createElement(MenuList_1.default
    // eslint-disable-next-line react/jsx-props-no-spreading
    , Object.assign({}, rest, { ref: ref, className: className, style: style, classes: classes }), children));
});
exports.Menu.displayName = 'Menu';
exports.Menu.Item = MenuItem_1.default;
exports.default = styles_1.withStyles(styles_2.default)(exports.Menu);
//# sourceMappingURL=Menu.js.map
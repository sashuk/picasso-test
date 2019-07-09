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
const styles_1 = require("@material-ui/core/styles");
const classnames_1 = __importDefault(require("classnames"));
const __1 = require("../");
const Page_1 = require("../Page");
const styles_2 = __importDefault(require("./styles"));
exports.PageHeader = (_a) => {
    var { classes, className, style, title, logoLink, rightContent, variant } = _a, rest = __rest(_a, ["classes", "className", "style", "title", "logoLink", "rightContent", "variant"]);
    const { fullWidth } = react_1.useContext(Page_1.PageContext);
    const contentClassnames = classnames_1.default({
        [classes.fullWidth]: fullWidth
    }, classes.content);
    const logo = react_1.default.createElement(__1.Logo, { variant: 'white' });
    return (react_1.default.createElement("header", Object.assign({}, rest, { className: classnames_1.default('mui-fixed', classes.root, classes[variant], className), style: style }),
        react_1.default.createElement("div", { className: contentClassnames },
            react_1.default.createElement("div", { className: classes.left },
                react_1.default.createElement(__1.Container, { right: 'small', flex: true, alignItems: 'center' }, logoLink ? react_1.default.cloneElement(logoLink, {}, logo) : logo),
                title && (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("div", { className: classes.divider }),
                    react_1.default.createElement(__1.Container, { left: 'small' },
                        react_1.default.createElement(__1.Typography, { invert: true, weight: 'light' }, title))))),
            react_1.default.createElement("div", { className: classes.right }, rightContent))));
};
exports.PageHeader.defaultProps = {
    variant: 'light'
};
exports.PageHeader.displayName = 'PageHeader';
exports.default = styles_1.withStyles(styles_2.default)(exports.PageHeader);
//# sourceMappingURL=PageHeader.js.map
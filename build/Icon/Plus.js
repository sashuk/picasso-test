"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const styles_1 = require("@material-ui/core/styles");
const styles_2 = __importDefault(require("./styles"));
const SvgPlus = (props) => {
    const { classes, className, style, size, color } = props;
    const svgStyle = Object.assign({ fontSize: size && `${size}rem` }, style);
    return (react_1.default.createElement("svg", { viewBox: '0 0 16 16', className: classnames_1.default(classes.root, className), style: svgStyle, color: color },
        react_1.default.createElement("g", { fillRule: 'nonzero' },
            react_1.default.createElement("path", { d: 'M8 1v14h1V1z' }),
            react_1.default.createElement("path", { d: 'M15.5 7.5h-14v1h14z' }))));
};
SvgPlus.displayName = 'SvgPlus';
exports.default = styles_1.withStyles(styles_2.default)(SvgPlus);
//# sourceMappingURL=Plus.js.map
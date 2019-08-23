"use strict";
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
const classnames_1 = __importDefault(require("classnames"));
const styles_1 = require("@material-ui/core/styles");
const styles_2 = __importDefault(require("./styles"));
const BASE_SIZE = 24;
const SvgFilter24 = react_1.forwardRef(function SvgFilter24(props, ref) {
    const { classes, className, style = {}, color, scale, base } = props;
    const scaledSize = base || BASE_SIZE * Math.ceil(scale || 1);
    const svgStyle = Object.assign({ minWidth: `${scaledSize}px`, minHeight: `${scaledSize}px` }, style);
    return (react_1.default.createElement("svg", { viewBox: '0 0 24 24', className: classnames_1.default(classes.root, className), style: svgStyle, color: color, ref: ref },
        react_1.default.createElement("defs", null,
            react_1.default.createElement("path", { d: 'M17 6v2h-1V3h1v2h7v1h-7zM0 5h14v1H0V5zm13 13v2h-1v-5h1v2h11v1H13zM0 17h10v1H0v-1zm7-5H0v-1h7V9h1v5H7v-2zm17-1v1H10v-1h14z', id: 'filter24_svg__a' })),
        react_1.default.createElement("g", { fillRule: 'evenodd' },
            react_1.default.createElement("mask", { id: 'filter24_svg__b' },
                react_1.default.createElement("use", { xlinkHref: '#filter24_svg__a' })),
            react_1.default.createElement("use", { xlinkHref: '#filter24_svg__a' }),
            react_1.default.createElement("g", { mask: 'url(#filter24_svg__b)' },
                react_1.default.createElement("path", { d: 'M0 0h24v24H0z' })))));
});
SvgFilter24.displayName = 'SvgFilter24';
exports.default = styles_1.withStyles(styles_2.default)(SvgFilter24);
//# sourceMappingURL=Filter24.js.map
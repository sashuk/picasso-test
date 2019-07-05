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
const classnames_1 = __importDefault(require("classnames"));
const styles_1 = require("@material-ui/core/styles");
const StepLabel_1 = __importDefault(require("@material-ui/core/StepLabel"));
const StepIcon_1 = __importDefault(require("../StepIcon"));
const styles_2 = __importDefault(require("./styles"));
exports.StepLabel = (_a) => {
    var { active, classes, className, children, completed, hideLabel, style } = _a, rest = __rest(_a, ["active", "classes", "className", "children", "completed", "hideLabel", "style"]);
    return (react_1.default.createElement(StepLabel_1.default
    // eslint-disable-next-line react/jsx-props-no-spreading
    , Object.assign({}, rest, { active: active, classes: {
            labelContainer: classnames_1.default({
                [classes.root]: !hideLabel || active
            }),
            label: classnames_1.default({ [classes.hidden]: hideLabel })
        }, className: className, completed: completed, icon: react_1.default.createElement(StepIcon_1.default, { active: active, completed: completed }), style: style }),
        react_1.default.createElement("span", { className: classes.label }, children)));
};
exports.StepLabel.defaultProps = {
    hideLabel: false
};
exports.StepLabel.displayName = 'StepLabel';
exports.default = styles_1.withStyles(styles_2.default)(exports.StepLabel);
//# sourceMappingURL=StepLabel.js.map
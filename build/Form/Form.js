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
const FormField_1 = __importDefault(require("../FormField"));
const FormHint_1 = __importDefault(require("../FormHint"));
const FormLabel_1 = __importDefault(require("../FormLabel"));
const FormError_1 = __importDefault(require("../FormError"));
// eslint-disable-next-line react/display-name
exports.Form = react_1.forwardRef(function Form(_a, ref) {
    var { onSubmit, className, style, children } = _a, rest = __rest(_a, ["onSubmit", "className", "style", "children"]);
    return (react_1.default.createElement("form", Object.assign({}, rest, { ref: ref, onSubmit: onSubmit, className: className, style: style }), children));
});
exports.Form.Field = FormField_1.default;
exports.Form.Hint = FormHint_1.default;
exports.Form.Label = FormLabel_1.default;
exports.Form.Error = FormError_1.default;
exports.Form.displayName = 'Form';
exports.default = exports.Form;
//# sourceMappingURL=Form.js.map
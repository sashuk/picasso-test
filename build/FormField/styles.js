"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styles_1 = require("@material-ui/core/styles");
exports.default = () => styles_1.createStyles({
    root: {
        '& + &': {
            marginTop: '1em'
        },
        '& $error + $hint': {
            marginTop: 0
        }
    },
    hint: {},
    error: {}
});
//# sourceMappingURL=styles.js.map
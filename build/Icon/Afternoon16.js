import React, { forwardRef } from 'react';
import cx from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import kebabToCamelCase from '../utils/kebab-to-camel-case';
import styles from './styles';
const BASE_SIZE = 16;
const SvgAfternoon16 = forwardRef(function SvgAfternoon16(props, ref) {
    const { classes: availableClasses, className, style = {}, color, scale, base } = props;
    const classes = [availableClasses.root, className];
    let svgColor;
    const scaledSize = base || BASE_SIZE * Math.ceil(scale || 1);
    const colorClassName = kebabToCamelCase(`${color}`);
    if (!availableClasses[`${colorClassName}`]) {
        svgColor = color;
    }
    else {
        classes.push(availableClasses[colorClassName]);
    }
    const svgStyle = Object.assign({ minWidth: `${scaledSize}px`, minHeight: `${scaledSize}px` }, style);
    return (React.createElement("svg", { viewBox: '0 0 16 16', className: cx(...classes), style: svgStyle, color: svgColor, ref: ref },
        React.createElement("defs", null,
            React.createElement("path", { d: 'M7.5 11a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7zm0-1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM7 0h1v3H7V0zm5.45 1.843l.707.707-2.121 2.122-.708-.708 2.122-2.12zM15 7v1h-3V7h3zm-1.843 5.45l-.707.707-2.122-2.121.708-.708 2.12 2.122zM8 15H7v-3h1v3zm-5.45-1.843l-.707-.707 2.121-2.122.708.708-2.122 2.12zM0 8V7h3v1H0zm1.843-5.45l.707-.707 2.122 2.121-.708.708-2.12-2.122z', id: 'afternoon16_svg__a' })),
        React.createElement("g", { fillRule: 'evenodd' },
            React.createElement("mask", { id: 'afternoon16_svg__b' },
                React.createElement("use", { xlinkHref: '#afternoon16_svg__a' })),
            React.createElement("use", { fillRule: 'nonzero', xlinkHref: '#afternoon16_svg__a' }),
            React.createElement("g", { mask: 'url(#afternoon16_svg__b)' },
                React.createElement("path", { d: 'M0 0h16v16H0z' })))));
});
SvgAfternoon16.displayName = 'SvgAfternoon16';
export default withStyles(styles)(SvgAfternoon16);
//# sourceMappingURL=Afternoon16.js.map
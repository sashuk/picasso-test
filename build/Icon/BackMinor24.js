import React, { forwardRef } from 'react';
import cx from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import kebabToCamelCase from '../utils/kebab-to-camel-case';
import styles from './styles';
const BASE_SIZE = 24;
const SvgBackMinor24 = forwardRef(function SvgBackMinor24(props, ref) {
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
    return (React.createElement("svg", { viewBox: '0 0 24 24', className: cx(...classes), style: svgStyle, color: svgColor, ref: ref },
        React.createElement("defs", null,
            React.createElement("path", { d: 'M14.997 5.29l.707.707-6 6 6 6-.707.707-6.707-6.707.707-.707 6-6z', id: 'backMinor24_svg__a' })),
        React.createElement("g", { fillRule: 'evenodd' },
            React.createElement("mask", { id: 'backMinor24_svg__b' },
                React.createElement("use", { xlinkHref: '#backMinor24_svg__a' })),
            React.createElement("use", { fillRule: 'nonzero', xlinkHref: '#backMinor24_svg__a' }),
            React.createElement("g", { mask: 'url(#backMinor24_svg__b)' },
                React.createElement("path", { d: 'M0 0h24v24H0z' })))));
});
SvgBackMinor24.displayName = 'SvgBackMinor24';
export default withStyles(styles)(SvgBackMinor24);
//# sourceMappingURL=BackMinor24.js.map
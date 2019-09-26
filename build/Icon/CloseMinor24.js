import React, { forwardRef } from 'react';
import cx from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import kebabToCamelCase from '../utils/kebab-to-camel-case';
import styles from './styles';
const BASE_SIZE = 24;
const SvgCloseMinor24 = forwardRef(function SvgCloseMinor24(props, ref) {
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
            React.createElement("path", { d: 'M12.707 12l5.5 5.5-.707.707-5.5-5.5-5.5 5.5-.707-.707 5.5-5.5-5.5-5.5.707-.707 5.5 5.5 5.5-5.5.707.707-5.5 5.5z', id: 'closeMinor24_svg__a' })),
        React.createElement("g", { fillRule: 'evenodd' },
            React.createElement("mask", { id: 'closeMinor24_svg__b' },
                React.createElement("use", { xlinkHref: '#closeMinor24_svg__a' })),
            React.createElement("use", { fillRule: 'nonzero', xlinkHref: '#closeMinor24_svg__a' }),
            React.createElement("g", { mask: 'url(#closeMinor24_svg__b)' },
                React.createElement("path", { d: 'M0 0h24v24H0z' })))));
});
SvgCloseMinor24.displayName = 'SvgCloseMinor24';
export default withStyles(styles)(SvgCloseMinor24);
//# sourceMappingURL=CloseMinor24.js.map
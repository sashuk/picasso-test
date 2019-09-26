import React, { forwardRef } from 'react';
import cx from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import kebabToCamelCase from '../utils/kebab-to-camel-case';
import styles from './styles';
const BASE_SIZE = 16;
const SvgArrowLongDown16 = forwardRef(function SvgArrowLongDown16(props, ref) {
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
            React.createElement("path", { d: 'M8 2v10.293l2.5-2.5.707.707L7.5 14.207 3.793 10.5l.707-.707 2.5 2.5V2h1z', id: 'arrowLongDown16_svg__a' })),
        React.createElement("g", { fillRule: 'evenodd' },
            React.createElement("mask", { id: 'arrowLongDown16_svg__b' },
                React.createElement("use", { xlinkHref: '#arrowLongDown16_svg__a' })),
            React.createElement("use", { fillRule: 'nonzero', xlinkHref: '#arrowLongDown16_svg__a' }),
            React.createElement("g", { mask: 'url(#arrowLongDown16_svg__b)' },
                React.createElement("path", { d: 'M0 0h16v16H0z' })))));
});
SvgArrowLongDown16.displayName = 'SvgArrowLongDown16';
export default withStyles(styles)(SvgArrowLongDown16);
//# sourceMappingURL=ArrowLongDown16.js.map
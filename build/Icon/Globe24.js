import React, { forwardRef } from 'react';
import cx from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import kebabToCamelCase from '../utils/kebab-to-camel-case';
import styles from './styles';
const BASE_SIZE = 24;
const SvgGlobe24 = forwardRef(function SvgGlobe24(props, ref) {
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
            React.createElement("path", { d: 'M2.013 12c.223 4.294 3.297 7.834 7.365 8.762C8.022 19.067 7.081 15.797 7.005 12H2.013zm0-1h4.992c.076-3.797 1.017-7.067 2.373-8.762C5.31 3.166 2.236 6.706 2.013 11zm18.974 0c-.223-4.294-3.297-7.834-7.365-8.762 1.356 1.695 2.297 4.965 2.373 8.762h4.992zm0 1h-4.992c-.076 3.797-1.017 7.067-2.373 8.762 4.068-.928 7.142-4.468 7.365-8.762zM8.005 12c.112 5.1 1.905 9 3.495 9s3.383-3.9 3.495-9h-6.99zm0-1h6.99c-.112-5.1-1.905-9-3.495-9s-3.383 3.9-3.495 9zM11.5 22C5.701 22 1 17.299 1 11.5S5.701 1 11.5 1 22 5.701 22 11.5 17.299 22 11.5 22z', id: 'globe24_svg__a' })),
        React.createElement("g", { fillRule: 'evenodd' },
            React.createElement("mask", { id: 'globe24_svg__b' },
                React.createElement("use", { xlinkHref: '#globe24_svg__a' })),
            React.createElement("use", { fillRule: 'nonzero', xlinkHref: '#globe24_svg__a' }),
            React.createElement("g", { mask: 'url(#globe24_svg__b)' },
                React.createElement("path", { d: 'M0 0h24v24H0z' })))));
});
SvgGlobe24.displayName = 'SvgGlobe24';
export default withStyles(styles)(SvgGlobe24);
//# sourceMappingURL=Globe24.js.map
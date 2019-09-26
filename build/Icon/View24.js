import React, { forwardRef } from 'react';
import cx from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import kebabToCamelCase from '../utils/kebab-to-camel-case';
import styles from './styles';
const BASE_SIZE = 24;
const SvgView24 = forwardRef(function SvgView24(props, ref) {
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
            React.createElement("path", { d: 'M2 23H1V1h9v1H2v20h20v-8h1v9H2zM22 2.707l-9.5 9.5-.707-.707 9.5-9.5H15V1h8v8h-1V2.707z', id: 'view24_svg__a' })),
        React.createElement("g", { fillRule: 'evenodd' },
            React.createElement("mask", { id: 'view24_svg__b' },
                React.createElement("use", { xlinkHref: '#view24_svg__a' })),
            React.createElement("use", { fillRule: 'nonzero', xlinkHref: '#view24_svg__a' }),
            React.createElement("g", { mask: 'url(#view24_svg__b)' },
                React.createElement("path", { d: 'M0 0h24v24H0z' })))));
});
SvgView24.displayName = 'SvgView24';
export default withStyles(styles)(SvgView24);
//# sourceMappingURL=View24.js.map
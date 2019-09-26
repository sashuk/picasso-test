import React, { forwardRef } from 'react';
import cx from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import kebabToCamelCase from '../utils/kebab-to-camel-case';
import styles from './styles';
const BASE_SIZE = 16;
const SvgOverlap16 = forwardRef(function SvgOverlap16(props, ref) {
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
            React.createElement("path", { d: 'M12 2H2v10H1V1h11v1zm2 2h1v11H4v-1h10V4zM4 4h8v8H4V4zm1 1v6h6V5H5z', id: 'overlap16_svg__a' })),
        React.createElement("g", { fillRule: 'evenodd' },
            React.createElement("mask", { id: 'overlap16_svg__b' },
                React.createElement("use", { xlinkHref: '#overlap16_svg__a' })),
            React.createElement("use", { fillRule: 'nonzero', xlinkHref: '#overlap16_svg__a' }),
            React.createElement("g", { mask: 'url(#overlap16_svg__b)' },
                React.createElement("path", { d: 'M0 0h16v16H0z' })))));
});
SvgOverlap16.displayName = 'SvgOverlap16';
export default withStyles(styles)(SvgOverlap16);
//# sourceMappingURL=Overlap16.js.map
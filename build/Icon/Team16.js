import React, { forwardRef } from 'react';
import cx from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import kebabToCamelCase from '../utils/kebab-to-camel-case';
import styles from './styles';
const BASE_SIZE = 16;
const SvgTeam16 = forwardRef(function SvgTeam16(props, ref) {
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
            React.createElement("path", { d: 'M2.691 10L5 5.382V0h6v5.38L13.31 10H16v6h-6v-3H6v3H0v-6h2.691zm1.118 0H6v2h4v-2h2.191l-2-4H5.81l-2 4zM5 13v-2H1v4h4v-2zm6-1v3h4v-4h-4v1zM6 5h4V1H6v4z', id: 'team16_svg__a' })),
        React.createElement("g", { fillRule: 'evenodd' },
            React.createElement("mask", { id: 'team16_svg__b' },
                React.createElement("use", { xlinkHref: '#team16_svg__a' })),
            React.createElement("use", { fillRule: 'nonzero', xlinkHref: '#team16_svg__a' }),
            React.createElement("g", { mask: 'url(#team16_svg__b)' },
                React.createElement("path", { d: 'M0 0h16v16H0z' })))));
});
SvgTeam16.displayName = 'SvgTeam16';
export default withStyles(styles)(SvgTeam16);
//# sourceMappingURL=Team16.js.map
import React, { forwardRef } from 'react';
import cx from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import kebabToCamelCase from '../utils/kebab-to-camel-case';
import styles from './styles';
const BASE_SIZE = 24;
const SvgSkills24 = forwardRef(function SvgSkills24(props, ref) {
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
            React.createElement("path", { d: 'M14.5 5.207L2 17.707V22h4.293l12.5-12.5L14.5 5.207zm.707-.707L19.5 8.793 21.793 6.5 17.5 2.207 15.207 4.5zM3.5 7.793l2-2 .707.707-2 2L5.5 9.793l.646-.647.708.708L5.5 11.207.793 6.5 6.5.793l4.354 4.353-.708.708L6.5 2.207 2.207 6.5 3.5 7.793zm12 12l2-2 .707.707-2 2 1.293 1.293 4.293-4.293-3.647-3.646.708-.708 4.353 4.354-5.707 5.707-4.707-4.707 1.353-1.354.708.708-.647.646 1.293 1.293zM1 17.293L17.5.793 23.207 6.5 6.707 23H1v-5.707z', id: 'skills24_svg__a' })),
        React.createElement("g", { fillRule: 'evenodd' },
            React.createElement("mask", { id: 'skills24_svg__b' },
                React.createElement("use", { xlinkHref: '#skills24_svg__a' })),
            React.createElement("use", { fillRule: 'nonzero', xlinkHref: '#skills24_svg__a' }),
            React.createElement("g", { mask: 'url(#skills24_svg__b)' },
                React.createElement("path", { d: 'M0 0h24v24H0z' })))));
});
SvgSkills24.displayName = 'SvgSkills24';
export default withStyles(styles)(SvgSkills24);
//# sourceMappingURL=Skills24.js.map
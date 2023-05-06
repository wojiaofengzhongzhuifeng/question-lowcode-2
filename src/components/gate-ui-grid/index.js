import { jsx } from 'react/jsx-runtime';
import { useRef, useEffect, useState } from 'react';
import classNames from 'classnames';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var CenterContainer = function (props) {
    var children = props.children, selfClassName = props.selfClassName;
    return jsx("div", __assign({ className: "flex--grid--layout ".concat(selfClassName || '') }, { children: children }));
};

var isArray = function (obj) {
    return Array.isArray(obj);
};
var isNumber = function (obj) {
    return Number.isFinite(obj);
};

var useQueryCurrentDeviceOfGridType = function (callback) {
    //  自定义hooks  根据屏幕宽度实时判断当前是否是H5的宽度，配合栅格达到不刷新即可自适应
    var savedCallback = useRef();
    useEffect(function () {
        savedCallback.current = callback;
    }, [callback]);
    useEffect(function () {
        function getWidth() {
            var w = window.innerWidth;
            if (savedCallback.current) {
                if (w >= 1440) {
                    savedCallback.current('xl');
                }
                else if (w < 1440 && w >= 1200) {
                    savedCallback.current('lg');
                }
                else if (w < 1200 && w >= 992) {
                    savedCallback.current('md');
                }
                else if (w < 992 && w >= 415) {
                    savedCallback.current('sm');
                }
                else if (w < 415) {
                    savedCallback.current('xs');
                }
            }
        }
        getWidth();
        window.addEventListener('resize', getWidth);
        return function () { return window.removeEventListener('resize', getWidth); };
    }, []);
};

var Row = function (props) {
    var _a;
    var children = props.children, xxl = props.xxl, xl = props.xl, lg = props.lg, md = props.md, sm = props.sm, xs = props.xs, span = props.span, xxlGutter = props.xxlGutter, xlGutter = props.xlGutter, lgGutter = props.lgGutter, mdGutter = props.mdGutter, smGutter = props.smGutter, xsGutter = props.xsGutter, gutter = props.gutter;
    var _b = useState('span'), currGridType = _b[0], setCurrGridType = _b[1];
    var _c = useState({}), rowStyle = _c[0], setRowStyle = _c[1];
    useQueryCurrentDeviceOfGridType(setCurrGridType); // 动态获取当前容器是属于栅格的哪个大小
    var classes = classNames("flex--grid--main", (_a = {},
        _a["col-".concat(span)] = isNumber(span),
        _a["col-xxl-".concat(xxl)] = isNumber(xxl),
        _a["col-xl-".concat(xl)] = isNumber(xl),
        _a["col-lg-".concat(lg)] = isNumber(lg),
        _a["col-md-".concat(md)] = isNumber(md),
        _a["col-sm-".concat(sm)] = isNumber(sm),
        _a["col-xs-".concat(xs)] = isNumber(xs),
        _a));
    useEffect(function () {
        var gridType = {
            span: span,
            xxl: xxl,
            xl: xl,
            lg: lg,
            md: md,
            sm: sm,
            xs: xs,
            xxlGutter: xxlGutter,
            xlGutter: xlGutter,
            lgGutter: lgGutter,
            mdGutter: mdGutter,
            smGutter: smGutter,
            xsGutter: xsGutter,
            gutter: gutter,
            spanGutter: gutter
        };
        var styles = {};
        if (currGridType && gridType[currGridType]) {
            var gridTypeValue = gridType[currGridType]; // 获取当前栅格大小的配置
            var gridTypeGatterValue = gridType["".concat(currGridType, "Gutter")];
            if (gridTypeGatterValue) {
                styles['gridGap'] = gridTypeGatterValue;
            }
            if (gridTypeValue) { // 如果数据存在 并且是数组的话
                if (isArray(gridTypeValue)) {
                    var gridTypeArrValue = gridTypeValue; // 断言该数据是数组类型
                    //设置栅格
                    styles['gridTemplateColumns'] = "".concat(gridTypeArrValue[0], "fr ").concat(gridTypeArrValue[1], "fr");
                }
                else {
                    // 当前栅格大小的配置数据存在，但是不是数组的情况下 清空栅格的行内样式，改用col-xx-xx的配置
                    // setRowStyle({})
                    delete styles['gridTemplateColumns'];
                }
            }
        }
        else {
            // 如果只配置了span 而且是数组的话
            if (gridType['span'] && isArray(gridType['span'])) {
                var gridTypeArrValue = gridType['span'];
                var gridTypeArrValueStr_1 = '';
                // styles['gridTemplateColumns'] = `${gridTypeArrValue[0]}fr ${gridTypeArrValue[1]}fr`
                gridTypeArrValue.forEach(function (item) {
                    gridTypeArrValueStr_1 += "".concat(item, "fr ");
                });
                styles['gridTemplateColumns'] = gridTypeArrValueStr_1;
            }
            if (gridType['gutter']) {
                styles['gridGap'] = gridType['gutter'];
            }
        }
        setRowStyle(styles);
    }, [currGridType, xxl, xl, lg, md, sm, xs, span, xxlGutter, xlGutter, lgGutter, mdGutter, smGutter, xsGutter, gutter]);
    return jsx("div", __assign({ className: classes, style: rowStyle }, { children: children }));
};

export { CenterContainer, Row };

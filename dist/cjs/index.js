'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var PropTypes = require('prop-types');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

var styles = {"container":"badge-module_container__bHUk8","green":"badge-module_green__wUraj","red":"badge-module_red__fGre6","blue":"badge-module_blue__HxfRZ","yellow":"badge-module_yellow__gIBre","primary":"badge-module_primary__MsgNo","round":"badge-module_round__6MJH2","outline":"badge-module_outline__m9a5z"};

const Badge = ({
  color = 'primary',
  // green || red || gray || yellow || primary 
  variant,
  // [outline,round] Default is solid
  className,
  children
}) => {
  console.log(variant);
  return /*#__PURE__*/jsxRuntime.jsx("span", {
    className: `
        ${styles.container} 
        ${styles[color] ? styles[color] : ''} 
        ${variant && (typeof variant === 'string' ? styles[variant] : variant.map(item => styles[item]).join(' '))}
        ${className ? className : ''}`,
    children: children
  });
};

Badge.propTypes = {
  color: PropTypes__default["default"].oneOf(['green', 'red', 'yellow', 'gray', 'primary']),
  variant: PropTypes__default["default"].oneOfType([PropTypes__default["default"].oneOf(['outline', 'round']), PropTypes__default["default"].arrayOf(PropTypes__default["default"].oneOf(['outline', 'round']))]),
  className: PropTypes__default["default"].string,
  children: PropTypes__default["default"].node
};

exports.Badge = Badge;
//# sourceMappingURL=index.js.map

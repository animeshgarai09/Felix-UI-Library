import PropTypes from 'prop-types';
import { jsx } from 'react/jsx-runtime';

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
  return /*#__PURE__*/jsx("span", {
    className: `
        ${styles.container} 
        ${styles[color] ? styles[color] : ''} 
        ${variant && (typeof variant === 'string' ? styles[variant] : variant.map(item => styles[item]).join(' '))}
        ${className ? className : ''}`,
    children: children
  });
};

Badge.propTypes = {
  color: PropTypes.oneOf(['green', 'red', 'yellow', 'gray', 'primary']),
  variant: PropTypes.oneOfType([PropTypes.oneOf(['outline', 'round']), PropTypes.arrayOf(PropTypes.oneOf(['outline', 'round']))]),
  className: PropTypes.string,
  children: PropTypes.node
};

export { Badge };
//# sourceMappingURL=index.es.js.map

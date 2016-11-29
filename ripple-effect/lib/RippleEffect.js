'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var wrapStyle = {
  position: 'relative',
  display: 'inline-block',
  overflow: 'hidden'
};

var Ripple = (function (_React$Component) {
  _inherits(Ripple, _React$Component);

  function Ripple(props) {
    _classCallCheck(this, Ripple);

    _get(Object.getPrototypeOf(Ripple.prototype), 'constructor', this).call(this, props);
    console.log(this.props.effect);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      rippleStyle: {
        position: 'absolute',
        borderRadius: '50%',
        width: 20,
        height: 20,
        opacity: 0,
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none'
      }
    };
  }

  _createClass(Ripple, [{
    key: 'handleClick',
    value: function handleClick(ev) {
      var _this = this;

      var _props = this.props;
      var color = _props.color;
      var during = _props.during;

      var wid = document.getElementById('ripp').offsetWidth;
      var hei = document.getElementById('ripp').offsetHeight;
      var top = hei / 2;
      var left = wid / 2;

      console.log(wid, hei, top, left);

      this.setState({
        rippleStyle: {
          position: 'absolute',
          borderRadius: '50%',
          width: 20,
          height: 20,
          top: top, left: left,
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          opacity: 1,
          backgroundColor: color
        }
      });

      setTimeout(function () {
        var size = Math.max(wid, hei);

        _this.setState({
          rippleStyle: {
            position: 'absolute',
            borderRadius: '50%',
            width: 20,
            height: 20,
            left: left, top: top,
            transform: 'translate(-50%, -50%)' + ' scale(' + size / 9 + ')',
            opacity: 0,
            pointerEvents: 'none',
            transition: 'all ' + during + 'ms'
          }
        });
      }, 10);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { id: 'ripp', className: this.props.effect ? "rippleEffect active" : "rippleEffect", style: wrapStyle },
        this.props.children,
        _react2['default'].createElement('s', { style: this.state.rippleStyle })
      );
    }
  }]);

  return Ripple;
})(_react2['default'].Component);

exports['default'] = Ripple;
module.exports = exports['default'];
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

var styles = {
  position: 'fixed',
  left: '50%',
  // top: '20px',
  transform: 'translate(-50%)',
  padding: '10px 40px',
  border: '5px solid #E0234E',
  fontSize: '2.5em',
  color: 'white',
  // textTransform: 'uppercase',
  whiteSpace: 'nowrap'
};

var CodeSlideTitle = function (_React$Component) {
  _inherits(CodeSlideTitle, _React$Component);

  function CodeSlideTitle() {
    _classCallCheck(this, CodeSlideTitle);

    return _possibleConstructorReturn(this, (CodeSlideTitle.__proto__ || Object.getPrototypeOf(CodeSlideTitle)).apply(this, arguments));
  }

  _createClass(CodeSlideTitle, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'h1',
        { style: styles },
        this.props.children
      );
    }
  }]);

  return CodeSlideTitle;
}(React.Component);

module.exports = CodeSlideTitle;
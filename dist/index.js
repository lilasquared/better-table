(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["better-table"] = factory();
	else
		root["better-table"] = factory();
})(this, function() {
return webpackJsonpbetter_table([1],{

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Table = __webpack_require__(27);

var _Table2 = _interopRequireDefault(_Table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BetterTable = function BetterTable(props) {
  return _react2.default.createElement(_Table2.default, _extends({}, _react2.default.Children.only(props.children).props, {
    hasFixedHeader: props.hasFixedHeader
  }));
};

BetterTable.propTypes = {
  children: function children(props, propName, componentName) {
    var prop = props[propName];
    if (_react2.default.Children.count(prop) !== 1 || prop.type !== 'table') {
      return new Error('`' + componentName + '` should have a single child of type `table`');
    }
  },
  hasFixedHeader: _propTypes2.default.bool
};

BetterTable.defaultProps = {
  hasFixedHeader: false
};

exports.default = BetterTable;

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FixedHeaderCell = function FixedHeaderCell(props) {
  return _react2.default.createElement(
    'th',
    { style: { width: props.width } },
    props.children
  );
};

FixedHeaderCell.propTypes = {
  style: _propTypes2.default.object,
  width: _propTypes2.default.number,
  children: _propTypes2.default.any
};

exports.default = FixedHeaderCell;

/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _FixedHeaderCell = __webpack_require__(22);

var _FixedHeaderCell2 = _interopRequireDefault(_FixedHeaderCell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FixedHeaderRow = function FixedHeaderRow(props) {
  var style = {
    position: "fixed",
    top: props.offsetTop,
    visibility: "visible",
    background: "white"
  };

  var children = _react2.default.Children.map(props.children, function (child, index) {
    if (child.type === 'th') {
      return _react2.default.createElement(
        _FixedHeaderCell2.default,
        _extends({}, child.props, { width: props.widths[index] }),
        child.props.children
      );
    }
    return child;
  });

  return _react2.default.createElement(
    'tr',
    { style: style },
    children
  );
};

FixedHeaderRow.propTypes = {
  children: _propTypes2.default.any,
  widths: _propTypes2.default.arrayOf(_propTypes2.default.number),
  offsetTop: _propTypes2.default.number
};

exports.default = FixedHeaderRow;

/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _HeaderRow = __webpack_require__(26);

var _HeaderRow2 = _interopRequireDefault(_HeaderRow);

var _FixedHeaderRow = __webpack_require__(23);

var _FixedHeaderRow2 = _interopRequireDefault(_FixedHeaderRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$PureComponent) {
  _inherits(Header, _React$PureComponent);

  function Header(props) {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

    _this.state = {
      shouldRenderFixedHeader: false,
      widths: [],
      fixedHeaderOffsetTop: 0
    };
    return _this;
  }

  _createClass(Header, [{
    key: 'updateShouldRenderFixedHeader',
    value: function updateShouldRenderFixedHeader() {
      var shouldRender = this.props.isFixed && this.props.table.getBoundingClientRect && this.props.table.getBoundingClientRect().top < 0 && this.props.table.getBoundingClientRect().bottom > 0;

      this.setState({ shouldRenderFixedHeader: shouldRender });
      if (shouldRender) {
        var offset = -(2 * this.thead.clientHeight - this.props.table.getBoundingClientRect().bottom);

        var offsetTop = offset > 0 ? 0 : offset;

        this.setState({ fixedHeaderOffsetTop: offsetTop });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.updateShouldRenderFixedHeader();
      window.addEventListener("scroll", function () {
        return _this2.updateShouldRenderFixedHeader();
      }, false);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          isFixed = _props.isFixed,
          table = _props.table,
          props = _objectWithoutProperties(_props, ['isFixed', 'table']);

      var fixedChildren = [];
      var children = [];
      _react2.default.Children.forEach(this.props.children, function (row, index) {
        if (row.type === 'tr') {
          fixedChildren.push(_react2.default.createElement(
            _FixedHeaderRow2.default,
            { widths: _this3.state.widths, offsetTop: _this3.state.fixedHeaderOffsetTop, key: 'f' + index },
            row.props.children
          ));

          var rowProps = _extends({}, row.props, {
            key: index,
            setColumnWidth: function setColumnWidth(width, index) {
              _this3.setState(function (state) {
                return {
                  widths: Object.assign([], state.widths, _defineProperty({}, index, width))
                };
              });
            }
          });
          children.push(_react2.default.createElement(_HeaderRow2.default, rowProps));
        }
      });

      return _react2.default.createElement(
        'thead',
        _extends({}, props, { ref: function ref(el) {
            return _this3.thead = el;
          } }),
        this.state.shouldRenderFixedHeader ? fixedChildren : [],
        children
      );
    }
  }]);

  return Header;
}(_react2.default.PureComponent);

Header.propTypes = {
  children: _propTypes2.default.any,
  isFixed: _propTypes2.default.bool,
  table: _propTypes2.default.object
};

Header.contextTypes = {
  hasFixedHeader: _propTypes2.default.bool
};

exports.default = Header;

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HeaderCell = function (_React$Component) {
  _inherits(HeaderCell, _React$Component);

  function HeaderCell() {
    _classCallCheck(this, HeaderCell);

    return _possibleConstructorReturn(this, (HeaderCell.__proto__ || Object.getPrototypeOf(HeaderCell)).apply(this, arguments));
  }

  _createClass(HeaderCell, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.sendWidth();
      window.addEventListener("resize", function () {
        return _this2.sendWidth();
      });
    }
  }, {
    key: 'sendWidth',
    value: function sendWidth() {
      this.props.setCellWidth(this.cell.clientWidth);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          width = _props.width,
          setCellWidth = _props.setCellWidth,
          props = _objectWithoutProperties(_props, ['width', 'setCellWidth']);

      var style = {
        width: width,
        backgroundColor: "inherit"
      };

      return _react2.default.createElement(
        'th',
        _extends({ ref: function ref(el) {
            return _this3.cell = el;
          }, style: style }, props),
        this.props.children
      );
    }
  }]);

  return HeaderCell;
}(_react2.default.Component);

HeaderCell.propTypes = {
  setCellWidth: _propTypes2.default.func,
  width: _propTypes2.default.number,
  children: _propTypes2.default.any
};

exports.default = HeaderCell;

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _HeaderCell = __webpack_require__(25);

var _HeaderCell2 = _interopRequireDefault(_HeaderCell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeaderRow = function HeaderRow(props) {
  var children = _react2.default.Children.map(props.children, function (child, index) {
    if (child.type === 'th') {
      var cellProps = _extends({}, child.props, {
        key: index,
        setCellWidth: function setCellWidth(cellWidth) {
          return props.setColumnWidth(cellWidth, index);
        }
      });
      return _react2.default.createElement(_HeaderCell2.default, cellProps);
    }

    return child;
  });

  return _react2.default.createElement(
    'tr',
    null,
    children
  );
};

HeaderRow.propTypes = {
  children: _propTypes2.default.any,
  setColumnWidth: _propTypes2.default.func
};

exports.default = HeaderRow;

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Header = __webpack_require__(24);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Table = function (_React$Component) {
  _inherits(Table, _React$Component);

  function Table() {
    _classCallCheck(this, Table);

    var _this = _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this));

    _this.state = {
      table: {}
    };
    return _this;
  }

  _createClass(Table, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({ table: this.table });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          hasFixedHeader = _props.hasFixedHeader,
          props = _objectWithoutProperties(_props, ['children', 'hasFixedHeader']);

      var newChildren = _react2.default.Children.map(children, function (child) {
        if (child.type === 'thead') {
          return _react2.default.createElement(_Header2.default, _extends({}, child.props, {
            isFixed: hasFixedHeader,
            table: _this2.state.table }));
        }

        return child;
      });
      return _react2.default.createElement(
        'table',
        _extends({}, props, { ref: function ref(el) {
            return _this2.table = el;
          } }),
        newChildren
      );
    }
  }]);

  return Table;
}(_react2.default.Component);

Table.propTypes = {
  children: _propTypes2.default.node,
  hasFixedHeader: _propTypes2.default.bool
};

exports.default = Table;

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BetterTable = undefined;

var _BetterTable = __webpack_require__(21);

var _BetterTable2 = _interopRequireDefault(_BetterTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.BetterTable = _BetterTable2.default;

/***/ })

},[28]);
});
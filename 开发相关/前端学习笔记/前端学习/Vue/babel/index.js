"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var add = function add(a, b) {
  return a + b;
};

var Person = function () {
  _createClass(Person, null, [{
    key: "A",
    value: function A() {
      console.log("--");
      console.log("===");
    }
  }]);

  function Person() {
    _classCallCheck(this, Person);

    this.bb = 2;
  }

  return Person;
}();

Person.aa = 1;

Person.A();

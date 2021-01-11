< script type = "text/javascript" > "use strict";

function _classCallCheck(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}
var _createClass = function() {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
      }
    }
    return function(t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t
    }
  }(),
  assert = "undefined" != typeof module ? require("assert") : window && window.assert;
! function(e, t) {
  var n = function() {
    function e(n, r, i, a) {
      _classCallCheck(this, e);
      var s = a || {},
        o = s.buildTimestamp,
        u = void 0 === o ? null : o,
        m = s.testType,
        h = void 0 === m ? null : m,
        l = s.testNumber,
        p = void 0 === l ? null : l;
      t && t("number" == typeof n && n >= 0 && n % 1 == 0, "major version should be a non-negative integer"), t && t("number" == typeof r && r >= 0 && r % 1 == 0, "minor version should be a non-negative integer"), t && t("number" == typeof i && i >= 0 && i % 1 == 0, "maintenance version should be a non-negative integer"), t && t("string" != typeof h || "number" == typeof p, "if testType is provided, testNumber should be a number"), this.major = n, this.minor = r, this.maintenance = i, this.testType = h, this.testNumber = p, this.buildTimestamp = u
    }
    return _createClass(e, [{
      key: "serialize",
      value: function() {
        return {
          major: this.major,
          minor: this.minor,
          maintenance: this.maintenance,
          testType: this.testType,
          testNumber: this.testNumber,
          buildTimestamp: this.buildTimestamp
        }
      }
    }, {
      key: "compareNumber",
      value: function(e) {
        return this.major < e.major ? -1 : this.major > e.major ? 1 : this.minor < e.minor ? -1 : this.minor > e.minor ? 1 : this.maintenance < e.maintenance ? -1 : this.maintenance > e.maintenance ? 1 : 0
      }
    }, {
      key: "toString",
      value: function() {
        var e = this.major + "." + this.minor + "." + this.maintenance;
        return "string" == typeof this.testType && (e += "-" + this.testType + "." + this.testNumber), e
      }
    }, {
      key: "isSimNotPublished",
      get: function() {
        return this.major < 1 || 1 === this.major && 0 === this.minor && 0 === this.maintenance && this.testType
      }
    }], [{
      key: "deserialize",
      value: function(t) {
        return new e(t.major, t.minor, t.maintenance, {
          testType: t.testType,
          testNumber: t.testNumber,
          buildTimestamp: t.buildTimestamp
        })
      }
    }, {
      key: "parse",
      value: function(t, n) {
        var r = t.match(/^(\d+)\.(\d+)\.(\d+)(-(([^.-]+)\.(\d+)))?(-([^.-]+))?$/);
        if (!r) throw new Error("could not parse version: " + t);
        return new e(parseInt(r[1], 10), parseInt(r[2], 10), parseInt(r[3], 10), {
          testType: r[6],
          testNumber: void 0 === r[7] ? r[7] : parseInt(r[7], 10),
          buildTimestamp: n
        })
      }
    }, {
      key: "fromBranch",
      value: function(n) {
        var r = n.split(".");
        t && t(2 === r.length, "Bad branch, should be {{MAJOR}}.{{MINOR}}, had: " + n);
        return new e(parseInt(n.split(".")[0], 10), parseInt(n.split(".")[1], 10), 0)
      }
    }, {
      key: "ensureReleaseBranch",
      value: function(n) {
        var r = e.fromBranch(n);
        t && t(r.major > 0, "Major version for a branch should be greater than zero"), t && t(r.minor >= 0, "Minor version for a branch should be greater than (or equal) to zero")
      }
    }]), e
  }();
  "undefined" != typeof module ? module.exports = n : (window.phet = window.phet || {}, window.phet.preloads = window.phet.preloads || {}, window.phet.preloads.chipper = window.phet.preloads.chipper || {}, window.phet.preloads.chipper.SimVersion = n)
}((0, eval)("this"), !1); < /script>

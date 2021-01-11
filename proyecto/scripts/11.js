< script type = "text/javascript" >
  var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
  } : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  };
! function(e, t) {
  "use strict";
  "function" == typeof define && define.amd ? define([], t) : "object" === ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports ? module.exports = t() : e.QueryStringMachine = t()
}(this, function() {
  "use strict";
  return function() {
    var e = {
        get: function(e, t) {
          return this.getForString(e, t, window.location.search)
        },
        getAll: function(e) {
          return this.getAllForString(e, window.location.search)
        },
        getForString: function(e, a, i) {
          if (0 !== i.length && 0 !== i.indexOf("?")) throw new Error('Query strings should be either the empty string or start with a "?": ' + i);
          var l = a.private && ! function() {
            try {
              return "true" === localStorage.getItem("phetTeamMember")
            } catch (e) {
              return !1
            }
          }() ? [] : t(e, i);
          r(e, a);
          var o = u(e, a, l);
          return n(e, a, o), o
        },
        getAllForString: function(e, t) {
          var r = {};
          for (var a in e) e.hasOwnProperty(a) && (r[a] = this.getForString(a, e[a], t));
          return r
        },
        containsKey: function(e) {
          return this.containsKeyForString(e, window.location.search)
        },
        containsKeyForString: function(e, r) {
          if (0 !== r.length && 0 !== r.indexOf("?")) throw new Error('Query strings should be either the empty string or start with a "?": ' + r);
          return t(e, r).length > 0
        },
        deepEquals: function(t, r) {
          if ((void 0 === t ? "undefined" : _typeof(t)) !== (void 0 === r ? "undefined" : _typeof(r))) return !1;
          if ("string" == typeof t) return t === r;
          if (null === t && null === r) return !0;
          if (void 0 === t && void 0 === r) return !0;
          if (null === t && void 0 === r) return !1;
          if (void 0 === t && null === r) return !1;
          var a = Object.keys(t),
            n = Object.keys(r);
          if (a.length !== n.length) return !1;
          if (0 === a.length) return t === r;
          for (var i = 0; i < a.length; i++) {
            if (a[i] !== n[i]) return !1;
            var u = t[a[i]],
              l = r[a[i]];
            if (!e.deepEquals(u, l)) return !1
          }
          return !0
        },
        removeKeyValuePair: function(e, t) {
          if (0 === e.indexOf("?")) {
            for (var r = [], a = e.substring(1).split("&"), n = 0; n < a.length; n++) {
              var i = a[n],
                u = i.split("=");
              decodeURIComponent(u[0]) !== t && r.push(i)
            }
            return r.length > 0 ? "?" + r.join("&") : ""
          }
          return e
        },
        appendQueryString: function(e, t) {
          if (0 !== t.indexOf("?") && 0 !== t.indexOf("&") || (t = t.substring(1)), 0 === t.length) return e;
          return e + (e.indexOf("?") >= 0 ? "&" : "?") + t
        },
        appendQueryStringArray: function(e, t) {
          for (var r = 0; r < t.length; r++) e = this.appendQueryString(e, t[r]);
          return e
        }
      },
      t = function(e, t) {
        for (var r = [], a = t.slice(1).split("&"), n = 0; n < a.length; n++) {
          var i = a[n].split("="),
            u = i[0],
            l = i.slice(1).join("=");
          u === e && (l ? r.push(decodeURIComponent(l)) : r.push(null))
        }
        return r
      },
      r = function(e, t) {
        s(t.hasOwnProperty("type"), e, "type field is required"), s(f.hasOwnProperty(t.type), e, "invalid type: " + t.type), t.hasOwnProperty("parse") && s("function" == typeof t.parse, e, "parse must be a function"), s(!(t.hasOwnProperty("validValues") && t.hasOwnProperty("isValidValue")), e, "validValues and isValidValue are mutually exclusive"), t.hasOwnProperty("validValues") && s(Array.isArray(t.validValues), e, "isValidValue must be an array"), t.hasOwnProperty("isValidValue") && s("function" == typeof t.isValidValue, e, "isValidValue must be a function"), t.hasOwnProperty("defaultValue") && f[t.type].validateValue(e, t, t.defaultValue), t.hasOwnProperty("validValues") && t.validValues.forEach(function(r) {
          f[t.type].validateValue(e, t, r)
        }), t.hasOwnProperty("defaultValue") && t.hasOwnProperty("validValues") && s(o(t.defaultValue, t.validValues), e, "defaultValue must be a member of validValues"), a(e, t, f[t.type].required, f[t.type].optional), f[t.type].validateSchema && f[t.type].validateSchema(e, t)
      },
      a = function(e, t, r, a) {
        var n = Object.getOwnPropertyNames(t);
        r.forEach(function(t) {
          s(-1 !== n.indexOf(t), e, "missing required property: " + t)
        });
        var i = r.concat(a);
        n.forEach(function(t) {
          s("type" === t || -1 !== i.indexOf(t), e, "unsupported property: " + t)
        })
      },
      n = function(e, t, r) {
        t.hasOwnProperty("validValues") && s(o(r, t.validValues), e, "value must be a member of validValues: " + r), t.hasOwnProperty("isValidValue") && s(t.isValidValue(r), e, "invalid value: " + r), f[t.type].validateValue(e, t, r)
      },
      i = function(e, t, r) {
        s(!0 === r || !1 === r, e, "invalid value: " + r)
      },
      u = function(e, t, r) {
        var a = void 0;
        return s(r.length <= 1, e, "query parameter cannot occur multiple times"), "flag" === t.type ? a = l(e, t, r[0]) : (s(void 0 !== r[0] || t.hasOwnProperty("defaultValue"), e, "missing required query parameter: " + e), a = void 0 === r[0] ? t.defaultValue : f[t.type].parse(e, t, r[0])), a
      },
      l = function(e, t, r) {
        return s(void 0 === r || null === r, e, "flag type does not support a value: " + r), void 0 !== r
      },
      o = function(t, r) {
        for (var a = !1, n = 0; n < r.length && !a; n++) a = e.deepEquals(r[n], t);
        return a
      },
      s = function(e, t, r) {
        if (!e) throw console && console.log && console.log(d(t, r)), new Error("Assertion failed: " + r)
      },
      d = function(e, t) {
        return 'Error for query parameter "' + e + '": ' + t
      },
      f = {
        flag: {
          required: [],
          optional: ["private"],
          validateSchema: null,
          parse: l,
          validateValue: function(e, t, r) {
            return i(e, t, r)
          }
        },
        boolean: {
          required: [],
          optional: ["defaultValue", "private"],
          validateSchema: null,
          parse: function(e, t, r) {
            return s("true" === r || "false" === r, e, "invalid value: " + r), "true" === r
          },
          validateValue: i
        },
        number: {
          required: [],
          optional: ["defaultValue", "validValues", "isValidValue", "private"],
          validateSchema: null,
          parse: function(e, t, r) {
            var a = Number(r);
            return s(!isNaN(a), e, "value must be a number: " + r), a
          },
          validateValue: function(e, t, r) {
            s("number" == typeof r && !isNaN(r), e, "invalid value: " + r)
          }
        },
        string: {
          required: [],
          optional: ["defaultValue", "validValues", "isValidValue", "private"],
          validateSchema: null,
          parse: function(e, t, r) {
            return r
          },
          validateValue: function(e, t, r) {
            s(null === r || "string" == typeof r, e, "invalid value: " + r)
          }
        },
        array: {
          required: ["elementSchema"],
          optional: ["defaultValue", "validValues", "isValidValue", "separator", "validValues", "private"],
          validateSchema: function(e, t) {
            t.hasOwnProperty("separator") && s("string" == typeof t.separator && 1 === t.separator.length, e, "invalid separator: " + t.separator), r(e + ".element", t.elementSchema)
          },
          parse: function(e, t, r) {
            return null === r ? [] : r.split(t.separator || ",").map(function(r) {
              return u(e, t.elementSchema, [r])
            })
          },
          validateValue: function(e, t, r) {
            s(Array.isArray(r) || null === r, e, "invalid value: " + r)
          }
        },
        custom: {
          required: ["parse"],
          optional: ["defaultValue", "validValues", "isValidValue", "private"],
          validateSchema: null,
          parse: function(e, t, r) {
            return t.parse(r)
          },
          validateValue: function(e, t, r) {}
        }
      };
    return e
  }()
}); < /script>

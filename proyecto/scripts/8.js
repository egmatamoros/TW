< script type = "text/javascript" >
  var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t
  } : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
  };
! function(t) {
  if ("object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "undefined" != typeof module) module.exports = t();
  else if ("function" == typeof define && define.amd) define([], t);
  else {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).himalaya = t()
  }
}(function() {
  return function t(e, r, n) {
    function o(s, i) {
      if (!r[s]) {
        if (!e[s]) {
          var u = "function" == typeof require && require;
          if (!i && u) return u(s, !0);
          if (a) return a(s, !0);
          var c = new Error("Cannot find module '" + s + "'");
          throw c.code = "MODULE_NOT_FOUND", c
        }
        var f = r[s] = {
          exports: {}
        };
        e[s][0].call(f.exports, function(t) {
          var r = e[s][1][t];
          return o(r || t)
        }, f, f.exports, t, e, r, n)
      }
      return r[s].exports
    }
    for (var a = "function" == typeof require && require, s = 0; s < n.length; s++) o(n[s]);
    return o
  }({
    1: [function(t, e, r) {
      "use strict";

      function n(t) {
        return "number" == typeof t && isNaN(t)
      }
      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.startsWith = function(t, e, r) {
        return t.substr(r || 0, e.length) === e
      }, r.endsWith = function(t, e, r) {
        var n = (r || t.length) - e.length,
          o = t.lastIndexOf(e, n);
        return -1 !== o && o === n
      }, r.stringIncludes = function(t, e, r) {
        return -1 !== t.indexOf(e, r || 0)
      }, r.isRealNaN = n, r.arrayIncludes = function(t, e, r) {
        var o = t.length;
        if (0 === o) return !1;
        for (var a = 0 | r, s = n(e), i = a >= 0 ? a : o + a; i < o;) {
          var u = t[i++];
          if (u === e) return !0;
          if (s && n(u)) return !0
        }
        return !1
      }
    }, {}],
    2: [function(t, e, r) {
      "use strict";

      function n(t) {
        return t.map(function(t) {
          var e = o(t.type);
          if ("Element" === e) {
            return {
              type: e,
              tagName: t.tagName.toLowerCase(),
              attributes: c(t.attributes),
              children: n(t.children)
            }
          }
          return {
            type: e,
            content: t.content
          }
        })
      }

      function o(t) {
        return t.charAt(0).toUpperCase() + t.slice(1)
      }

      function a(t) {
        return t.split("-").reduce(function(t, e) {
          return t + e.charAt(0).toUpperCase() + e.slice(1)
        })
      }

      function s(t) {
        if ("string" != typeof t) return t;
        if ("" === t) return t;
        var e = +t;
        return isNaN(e) ? t : e
      }

      function i(t) {
        var e = t.charAt(0),
          r = t.length - 1;
        return '"' === e || "'" === e && e === t.charAt(r) ? t.slice(1, r) : t
      }

      function u(t, e) {
        var r = t.indexOf(e);
        return -1 === r ? [t] : [t.slice(0, r), t.slice(r + e.length)]
      }

      function c(t) {
        return t.reduce(function(t, e) {
          var r = u(e.trim(), "="),
            n = l(r, 2),
            o = n[0],
            c = n[1];
          if (c = c ? i(c) : o, "class" === o) t.className = c.split(" ");
          else if ("style" === o) t.style = f(c);
          else if ((0, p.startsWith)(o, "data-")) {
            t.dataset = t.dataset || {};
            var d = a(o.slice(5));
            t.dataset[d] = s(c)
          } else t[a(o)] = s(c);
          return t
        }, {})
      }

      function f(t) {
        return t.trim().split(";").map(function(t) {
          return t.trim().split(":")
        }).reduce(function(t, e) {
          var r = l(e, 2),
            n = r[0],
            o = r[1];
          if (o) {
            var i = a(n.trim()),
              u = s(o.trim());
            t[i] = u
          }
          return t
        }, {})
      }
      Object.defineProperty(r, "__esModule", {
        value: !0
      });
      var l = function() {
        return function(t, e) {
          if (Array.isArray(t)) return t;
          if (Symbol.iterator in Object(t)) return function(t, e) {
            var r = [],
              n = !0,
              o = !1,
              a = void 0;
            try {
              for (var s, i = t[Symbol.iterator](); !(n = (s = i.next()).done) && (r.push(s.value), !e || r.length !== e); n = !0);
            } catch (t) {
              o = !0, a = t
            } finally {
              try {
                !n && i.return && i.return()
              } finally {
                if (o) throw a
              }
            }
            return r
          }(t, e);
          throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
      }();
      r.default = n, r.capitialize = o, r.camelCase = a, r.castValue = s, r.unquote = i, r.splitHead = u, r.formatAttributes = c, r.formatStyles = f;
      var p = t("../compat")
    }, {
      "../compat": 1
    }],
    3: [function(t, e, r) {
      "use strict";

      function n(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }

      function o(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u,
          r = (0, a.default)(t, e),
          n = (0, s.default)(r, e);
        return (0, i.default)(n, e)
      }
      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.parseDefaults = void 0, r.parse = o;
      var a = n(t("./lexer")),
        s = n(t("./parser")),
        i = n(t("./formats/v0")),
        u = r.parseDefaults = {
          voidTags: ["!doctype", "area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"],
          closingTags: ["html", "head", "body", "p", "dt", "dd", "li", "option", "thead", "th", "tbody", "tr", "td", "tfoot", "colgroup"],
          childlessTags: ["style", "script", "template"],
          format: i.default
        };
      r.default = {
        parse: o,
        parseDefaults: u
      }
    }, {
      "./formats/v0": 2,
      "./lexer": 4,
      "./parser": 5
    }],
    4: [function(t, e, r) {
      "use strict";

      function n(t) {
        if (Array.isArray(t)) {
          for (var e = 0, r = Array(t.length); e < t.length; e++) r[e] = t[e];
          return r
        }
        return Array.from(t)
      }

      function o(t) {
        for (var e = t.str, r = e.length; t.cursor < r;) {
          if ("<" !== e.charAt(t.cursor)) a(t);
          else {
            if ((0, l.startsWith)(e, "!--", t.cursor + 1)) s(t);
            else {
              var n = i(t);
              if (n) {
                var o = n.toLowerCase(),
                  u = t.options.childlessTags;
                (0, l.arrayIncludes)(u, o) && f(n, t)
              }
            }
          }
        }
      }

      function a(t) {
        var e = t.str,
          r = t.cursor,
          n = e.indexOf("<", r);
        if (-1 === n) {
          var o = e.slice(r);
          return t.cursor = e.length, void t.tokens.push({
            type: "text",
            content: o
          })
        }
        if (n !== r) {
          var a = e.slice(r, n);
          t.cursor = n, t.tokens.push({
            type: "text",
            content: a
          })
        }
      }

      function s(t) {
        t.cursor += 4;
        var e = t.str,
          r = t.cursor,
          n = e.indexOf("--\x3e", r);
        if (-1 === n) {
          var o = e.slice(r);
          return t.cursor = e.length, void t.tokens.push({
            type: "comment",
            content: o
          })
        }
        var a = e.slice(r, n);
        t.cursor = n + 3, t.tokens.push({
          type: "comment",
          content: a
        })
      }

      function i(t) {
        var e = t.str,
          r = "/" === e.charAt(t.cursor + 1);
        t.tokens.push({
          type: "tag-start",
          close: r
        }), t.cursor += r ? 2 : 1;
        var n = u(t);
        c(t);
        var o = "/" === e.charAt(t.cursor);
        return t.tokens.push({
          type: "tag-end",
          close: o
        }), t.cursor += o ? 2 : 1, n
      }

      function u(t) {
        for (var e = t.str, r = t.cursor, n = e.length, o = r; o < n;) {
          var a = e.charAt(o);
          if (!(" " === a || "/" === a || ">" === a)) break;
          o++
        }
        for (var s = o + 1; s < n;) {
          var i = e.charAt(s);
          if (!!(" " === i || "/" === i || ">" === i)) break;
          s++
        }
        t.cursor = s;
        var u = e.slice(o, s);
        return t.tokens.push({
          type: "tag",
          content: u
        }), u
      }

      function c(t) {
        for (var e = t.str, r = t.tokens, n = t.cursor, o = null, a = n, s = [], i = e.length; n < i;) {
          var u = e.charAt(n);
          if (o) {
            u === o && (o = null), n++
          } else {
            if ("/" === u || ">" === u) {
              n !== a && s.push(e.slice(a, n));
              break
            }
            if (" " === u) n !== a && s.push(e.slice(a, n)), a = n + 1, n++;
            else {
              "'" === u || '"' === u ? (o = u, n++) : n++
            }
          }
        }
        t.cursor = n;
        for (var c = s.length, f = "attribute", p = 0; p < c; p++) {
          var d = s[p];
          if (d && d.length) {
            if (-1 === d.indexOf("=")) {
              var v = s[p + 1];
              if (v && (0, l.startsWith)(v, "=")) {
                if (v.length > 1) {
                  var h = d + v;
                  r.push({
                    type: f,
                    content: h
                  }), p += 1;
                  continue
                }
                var y = s[p + 2];
                if (p += 1, y) {
                  var m = d + "=" + y;
                  r.push({
                    type: f,
                    content: m
                  }), p += 1;
                  continue
                }
              }
            }
            if ((0, l.endsWith)(d, "=")) {
              var g = s[p + 1];
              if (g && !(0, l.stringIncludes)(g, "=")) {
                var b = d + g;
                r.push({
                  type: f,
                  content: b
                }), p += 1;
                continue
              }
              var k = d.slice(0, -1);
              r.push({
                type: f,
                content: k
              })
            } else r.push({
              type: f,
              content: d
            })
          }
        }
      }

      function f(t, e) {
        for (var r = e.str, o = e.cursor, s = e.tokens, i = r.length, f = o; f < i;) {
          var l = r.indexOf("</", f);
          if (-1 === l) {
            a(e);
            break
          }
          var p = {
              str: r,
              cursor: l + 2,
              tokens: []
            },
            d = u(p);
          if (t.toLowerCase() === d.toLowerCase()) {
            var v = r.slice(o, l);
            s.push({
              type: "text",
              content: v
            });
            var h = {
                type: "tag-start",
                close: !0
              },
              y = {
                type: "tag-end",
                close: !1
              };
            c(p), s.push.apply(s, [h].concat(n(p.tokens), [y])), e.cursor = p.cursor + 1;
            break
          }
          f = p.cursor
        }
      }
      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = function(t, e) {
        var r = {
          str: t,
          options: e,
          cursor: 0,
          tokens: []
        };
        return o(r), r.tokens
      }, r.lex = o, r.lexText = a, r.lexComment = s, r.lexTag = i, r.lexTagName = u, r.lexTagAttributes = c, r.lexSkipTag = f;
      var l = t("./compat")
    }, {
      "./compat": 1
    }],
    5: [function(t, e, r) {
      "use strict";

      function n(t) {
        for (var e = t.tokens, r = t.options, a = t.stack, s = a[a.length - 1].children, i = e.length, u = t.cursor; u < i;) {
          var c = e[u];
          if ("tag-start" === c.type) {
            var f = e[++u];
            u++;
            var l = f.content.toLowerCase();
            if (c.close) {
              for (var p = void 0;
                (p = a.pop()) && l !== p.tagName;);
              for (; u < i;) {
                if ("tag-end" !== e[u].type) break;
                u++
              }
              break
            }
            if ((0, o.arrayIncludes)(r.closingTags, l))
              for (var d = a.length - 1; d > 0;) {
                if (l === a[d].tagName) {
                  s = (a = a.slice(0, d))[d - 1].children;
                  break
                }
                d -= 1
              }
            for (var v = [], h = void 0; u < i && "tag-end" !== (h = e[u]).type;) v.push(h.content), u++;
            u++;
            var y = [];
            s.push({
              type: "element",
              tagName: f.content,
              attributes: v,
              children: y
            });
            if (!(h.close || (0, o.arrayIncludes)(r.voidTags, l))) {
              a.push({
                tagName: l,
                children: y
              });
              var m = {
                tokens: e,
                options: r,
                cursor: u,
                stack: a
              };
              n(m), u = m.cursor
            }
          } else s.push(c), u++
        }
        t.cursor = u
      }
      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = function(t, e) {
        var r = {
          tagName: null,
          children: []
        };
        return n({
          tokens: t,
          options: e,
          cursor: 0,
          stack: [r]
        }), r.children
      }, r.parse = n;
      var o = t("./compat")
    }, {
      "./compat": 1
    }]
  }, {}, [3])(3)
}); < /script>

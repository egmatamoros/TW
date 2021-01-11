< script type = "text/javascript" >
  var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
  } : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  };
! function(e, t) {
  "object" === ("undefined" == typeof module ? "undefined" : _typeof(module)) && "object" === _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function(e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e)
  } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
  function n(e) {
    var t = e.length,
      n = Y.type(e);
    return "function" !== n && !Y.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
  }

  function r(e, t, n) {
    if (Y.isFunction(t)) return Y.grep(e, function(e, r) {
      return !!t.call(e, r, e) !== n
    });
    if (t.nodeType) return Y.grep(e, function(e) {
      return e === t !== n
    });
    if ("string" == typeof t) {
      if (te.test(t)) return Y.filter(t, e, n);
      t = Y.filter(t, e)
    }
    return Y.grep(e, function(e) {
      return $.call(t, e) >= 0 !== n
    })
  }

  function i(e, t) {
    for (;
      (e = e[t]) && 1 !== e.nodeType;);
    return e
  }

  function o() {
    V.removeEventListener("DOMContentLoaded", o, !1), e.removeEventListener("load", o, !1), Y.ready()
  }

  function s() {
    Object.defineProperty(this.cache = {}, 0, {
      get: function() {
        return {}
      }
    }), this.expando = Y.expando + Math.random()
  }

  function a(e, t, n) {
    var r;
    if (void 0 === n && 1 === e.nodeType)
      if (r = "data-" + t.replace(de, "-$1").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
        try {
          n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : pe.test(n) ? Y.parseJSON(n) : n)
        } catch (e) {}
        fe.set(e, t, n)
      } else n = void 0;
    return n
  }

  function u() {
    return !0
  }

  function l() {
    return !1
  }

  function c() {
    try {
      return V.activeElement
    } catch (e) {}
  }

  function f(e, t) {
    return Y.nodeName(e, "table") && Y.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
  }

  function p(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
  }

  function d(e) {
    var t = De.exec(e.type);
    return t ? e.type = t[1] : e.removeAttribute("type"), e
  }

  function h(e, t) {
    for (var n = 0, r = e.length; n < r; n++) ce.set(e[n], "globalEval", !t || ce.get(t[n], "globalEval"))
  }

  function g(e, t) {
    var n, r, i, o, s, a, u, l;
    if (1 === t.nodeType) {
      if (ce.hasData(e) && (o = ce.access(e), s = ce.set(t, o), l = o.events)) {
        delete s.handle, s.events = {};
        for (i in l)
          for (n = 0, r = l[i].length; n < r; n++) Y.event.add(t, i, l[i][n])
      }
      fe.hasData(e) && (a = fe.access(e), u = Y.extend({}, a), fe.set(t, u))
    }
  }

  function m(e, t) {
    var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
    return void 0 === t || t && Y.nodeName(e, t) ? Y.merge([e], n) : n
  }

  function v(e, t) {
    var n = t.nodeName.toLowerCase();
    "input" === n && ve.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
  }

  function y(t, n) {
    var r = Y(n.createElement(t)).appendTo(n.body),
      i = e.getDefaultComputedStyle ? e.getDefaultComputedStyle(r[0]).display : Y.css(r[0], "display");
    return r.detach(), i
  }

  function x(e) {
    var t = V,
      n = qe[e];
    return n || ("none" !== (n = y(e, t)) && n || ((t = (Le = (Le || Y("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentDocument).write(), t.close(), n = y(e, t), Le.detach()), qe[e] = n), n
  }

  function b(e, t, n) {
    var r, i, o, s, a = e.style;
    return (n = n || Fe(e)) && (s = n.getPropertyValue(t) || n[t]), n && ("" !== s || Y.contains(e.ownerDocument, e) || (s = Y.style(e, t)), Oe.test(s) && He.test(t) && (r = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = i, a.maxWidth = o)), void 0 !== s ? s + "" : s
  }

  function w(e, t) {
    return {
      get: function() {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get
      }
    }
  }

  function T(e, t) {
    if (t in e) return t;
    for (var n = t[0].toUpperCase() + t.slice(1), r = t, i = $e.length; i--;)
      if ((t = $e[i] + n) in e) return t;
    return r
  }

  function C(e, t, n) {
    var r = Me.exec(t);
    return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
  }

  function N(e, t, n, r, i) {
    for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; o < 4; o += 2) "margin" === n && (s += Y.css(e, n + ge[o], !0, i)), r ? ("content" === n && (s -= Y.css(e, "padding" + ge[o], !0, i)), "margin" !== n && (s -= Y.css(e, "border" + ge[o] + "Width", !0, i))) : (s += Y.css(e, "padding" + ge[o], !0, i), "padding" !== n && (s += Y.css(e, "border" + ge[o] + "Width", !0, i)));
    return s
  }

  function k(e, t, n) {
    var r = !0,
      i = "width" === t ? e.offsetWidth : e.offsetHeight,
      o = Fe(e),
      s = "border-box" === Y.css(e, "boxSizing", !1, o);
    if (i <= 0 || null == i) {
      if (((i = b(e, t, o)) < 0 || null == i) && (i = e.style[t]), Oe.test(i)) return i;
      r = s && (U.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
    }
    return i + N(e, t, n || (s ? "border" : "content"), r, o) + "px"
  }

  function E(e, t) {
    for (var n, r, i, o = [], s = 0, a = e.length; s < a; s++)(r = e[s]).style && (o[s] = ce.get(r, "olddisplay"), n = r.style.display, t ? (o[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && me(r) && (o[s] = ce.access(r, "olddisplay", x(r.nodeName)))) : o[s] || (i = me(r), (n && "none" !== n || !i) && ce.set(r, "olddisplay", i ? n : Y.css(r, "display"))));
    for (s = 0; s < a; s++)(r = e[s]).style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "" : "none"));
    return e
  }

  function S(e, t, n, r, i) {
    return new S.prototype.init(e, t, n, r, i)
  }

  function D() {
    return setTimeout(function() {
      Be = void 0
    }), Be = Y.now()
  }

  function j(e, t) {
    var n, r = 0,
      i = {
        height: e
      };
    for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ge[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i
  }

  function A(e, t, n) {
    for (var r, i = (Ye[t] || []).concat(Ye["*"]), o = 0, s = i.length; o < s; o++)
      if (r = i[o].call(n, t, e)) return r
  }

  function L(e, t, n) {
    var r, i, o = 0,
      s = Ve.length,
      a = Y.Deferred().always(function() {
        delete u.elem
      }),
      u = function() {
        if (i) return !1;
        for (var t = Be || D(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, s = l.tweens.length; o < s; o++) l.tweens[o].run(r);
        return a.notifyWith(e, [l, r, n]), r < 1 && s ? n : (a.resolveWith(e, [l]), !1)
      },
      l = a.promise({
        elem: e,
        props: Y.extend({}, t),
        opts: Y.extend(!0, {
          specialEasing: {}
        }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: Be || D(),
        duration: n.duration,
        tweens: [],
        createTween: function(t, n) {
          var r = Y.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
          return l.tweens.push(r), r
        },
        stop: function(t) {
          var n = 0,
            r = t ? l.tweens.length : 0;
          if (i) return this;
          for (i = !0; n < r; n++) l.tweens[n].run(1);
          return t ? a.resolveWith(e, [l, t]) : a.rejectWith(e, [l, t]), this
        }
      }),
      c = l.props;
    for (function(e, t) {
        var n, r, i, o, s;
        for (n in e)
          if (r = Y.camelCase(n), i = t[r], o = e[n], Y.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (s = Y.cssHooks[r]) && "expand" in s) {
            o = s.expand(o), delete e[r];
            for (n in o) n in e || (e[n] = o[n], t[n] = i)
          } else t[r] = i
      }(c, l.opts.specialEasing); o < s; o++)
      if (r = Ve[o].call(l, e, c, l.opts)) return r;
    return Y.map(c, A, l), Y.isFunction(l.opts.start) && l.opts.start.call(e, l), Y.fx.timer(Y.extend(u, {
      elem: e,
      anim: l,
      queue: l.opts.queue
    })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
  }

  function q(e) {
    return function(t, n) {
      "string" != typeof t && (n = t, t = "*");
      var r, i = 0,
        o = t.toLowerCase().match(se) || [];
      if (Y.isFunction(n))
        for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
    }
  }

  function H(e, t, n, r) {
    function i(a) {
      var u;
      return o[a] = !0, Y.each(e[a] || [], function(e, a) {
        var l = a(t, n, r);
        return "string" != typeof l || s || o[l] ? s ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
      }), u
    }
    var o = {},
      s = e === ft;
    return i(t.dataTypes[0]) || !o["*"] && i("*")
  }

  function O(e, t) {
    var n, r, i = Y.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && Y.extend(!0, e, r), e
  }

  function F(e, t, n, r) {
    var i;
    if (Y.isArray(t)) Y.each(t, function(t, i) {
      n || ht.test(e) ? r(e, i) : F(e + "[" + ("object" === (void 0 === i ? "undefined" : _typeof(i)) ? t : "") + "]", i, n, r)
    });
    else if (n || "object" !== Y.type(t)) r(e, t);
    else
      for (i in t) F(e + "[" + i + "]", t[i], n, r)
  }

  function P(e) {
    return Y.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
  }
  var M = [],
    R = M.slice,
    _ = M.concat,
    W = M.push,
    $ = M.indexOf,
    B = {},
    I = B.toString,
    X = B.hasOwnProperty,
    z = "".trim,
    U = {},
    V = e.document,
    Y = function e(t, n) {
      return new e.fn.init(t, n)
    },
    G = /^-ms-/,
    Q = /-([\da-z])/gi,
    J = function(e, t) {
      return t.toUpperCase()
    };
  Y.fn = Y.prototype = {
    jquery: "2.1.0",
    constructor: Y,
    selector: "",
    length: 0,
    toArray: function() {
      return R.call(this)
    },
    get: function(e) {
      return null != e ? e < 0 ? this[e + this.length] : this[e] : R.call(this)
    },
    pushStack: function(e) {
      var t = Y.merge(this.constructor(), e);
      return t.prevObject = this, t.context = this.context, t
    },
    each: function(e, t) {
      return Y.each(this, e, t)
    },
    map: function(e) {
      return this.pushStack(Y.map(this, function(t, n) {
        return e.call(t, n, t)
      }))
    },
    slice: function() {
      return this.pushStack(R.apply(this, arguments))
    },
    first: function() {
      return this.eq(0)
    },
    last: function() {
      return this.eq(-1)
    },
    eq: function(e) {
      var t = this.length,
        n = +e + (e < 0 ? t : 0);
      return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
    },
    end: function() {
      return this.prevObject || this.constructor(null)
    },
    push: W,
    sort: M.sort,
    splice: M.splice
  }, Y.extend = Y.fn.extend = function() {
    var e, t, n, r, i, o, s = arguments[0] || {},
      a = 1,
      u = arguments.length,
      l = !1;
    for ("boolean" == typeof s && (l = s, s = arguments[a] || {}, a++), "object" === (void 0 === s ? "undefined" : _typeof(s)) || Y.isFunction(s) || (s = {}), a === u && (s = this, a--); a < u; a++)
      if (null != (e = arguments[a]))
        for (t in e) n = s[t], s !== (r = e[t]) && (l && r && (Y.isPlainObject(r) || (i = Y.isArray(r))) ? (i ? (i = !1, o = n && Y.isArray(n) ? n : []) : o = n && Y.isPlainObject(n) ? n : {}, s[t] = Y.extend(l, o, r)) : void 0 !== r && (s[t] = r));
    return s
  }, Y.extend({
    expando: "jQuery" + ("2.1.0" + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function(e) {
      throw new Error(e)
    },
    noop: function() {},
    isFunction: function(e) {
      return "function" === Y.type(e)
    },
    isArray: Array.isArray,
    isWindow: function(e) {
      return null != e && e === e.window
    },
    isNumeric: function(e) {
      return e - parseFloat(e) >= 0
    },
    isPlainObject: function(e) {
      if ("object" !== Y.type(e) || e.nodeType || Y.isWindow(e)) return !1;
      try {
        if (e.constructor && !X.call(e.constructor.prototype, "isPrototypeOf")) return !1
      } catch (e) {
        return !1
      }
      return !0
    },
    isEmptyObject: function(e) {
      var t;
      for (t in e) return !1;
      return !0
    },
    type: function(e) {
      return null == e ? e + "" : "object" === (void 0 === e ? "undefined" : _typeof(e)) || "function" == typeof e ? B[I.call(e)] || "object" : void 0 === e ? "undefined" : _typeof(e)
    },
    globalEval: function(e) {
      var t, n = eval;
      (e = Y.trim(e)) && (1 === e.indexOf("use strict") ? ((t = V.createElement("script")).text = e, V.head.appendChild(t).parentNode.removeChild(t)) : n(e))
    },
    camelCase: function(e) {
      return e.replace(G, "ms-").replace(Q, J)
    },
    nodeName: function(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    },
    each: function(e, t, r) {
      var i = 0,
        o = e.length,
        s = n(e);
      if (r) {
        if (s)
          for (; i < o && !1 !== t.apply(e[i], r); i++);
        else
          for (i in e)
            if (!1 === t.apply(e[i], r)) break
      } else if (s)
        for (; i < o && !1 !== t.call(e[i], i, e[i]); i++);
      else
        for (i in e)
          if (!1 === t.call(e[i], i, e[i])) break;
      return e
    },
    trim: function(e) {
      return null == e ? "" : z.call(e)
    },
    makeArray: function(e, t) {
      var r = t || [];
      return null != e && (n(Object(e)) ? Y.merge(r, "string" == typeof e ? [e] : e) : W.call(r, e)), r
    },
    inArray: function(e, t, n) {
      return null == t ? -1 : $.call(t, e, n)
    },
    merge: function(e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
      return e.length = i, e
    },
    grep: function(e, t, n) {
      for (var r = [], i = 0, o = e.length, s = !n; i < o; i++) !t(e[i], i) !== s && r.push(e[i]);
      return r
    },
    map: function(e, t, r) {
      var i, o = 0,
        s = e.length,
        a = [];
      if (n(e))
        for (; o < s; o++) null != (i = t(e[o], o, r)) && a.push(i);
      else
        for (o in e) null != (i = t(e[o], o, r)) && a.push(i);
      return _.apply([], a)
    },
    guid: 1,
    proxy: function(e, t) {
      var n, r, i;
      if ("string" == typeof t && (n = e[t], t = e, e = n), Y.isFunction(e)) return r = R.call(arguments, 2), i = function() {
        return e.apply(t || this, r.concat(R.call(arguments)))
      }, i.guid = e.guid = e.guid || Y.guid++, i
    },
    now: Date.now,
    support: U
  }), Y.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
    B["[object " + t + "]"] = t.toLowerCase()
  });
  var K = function(e) {
    function t(e, t, n, r) {
      var i, o, s, a, u, l, f, h, g, m;
      if ((t ? t.ownerDocument || t : M) !== j && D(t), t = t || j, n = n || [], !e || "string" != typeof e) return n;
      if (1 !== (a = t.nodeType) && 9 !== a) return [];
      if (L && !r) {
        if (i = ge.exec(e))
          if (s = i[1]) {
            if (9 === a) {
              if (!(o = t.getElementById(s)) || !o.parentNode) return n;
              if (o.id === s) return n.push(o), n
            } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && F(t, o) && o.id === s) return n.push(o), n
          } else {
            if (i[2]) return Q.apply(n, t.getElementsByTagName(e)), n;
            if ((s = i[3]) && b.getElementsByClassName && t.getElementsByClassName) return Q.apply(n, t.getElementsByClassName(s)), n
          } if (b.qsa && (!q || !q.test(e))) {
          if (h = f = P, g = t, m = 9 === a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
            for (l = p(e), (f = t.getAttribute("id")) ? h = f.replace(ve, "\\$&") : t.setAttribute("id", h), h = "[id='" + h + "'] ", u = l.length; u--;) l[u] = h + d(l[u]);
            g = me.test(e) && c(t.parentNode) || t, m = l.join(",")
          }
          if (m) try {
            return Q.apply(n, g.querySelectorAll(m)), n
          } catch (e) {} finally {
            f || t.removeAttribute("id")
          }
        }
      }
      return function(e, t, n, r) {
        var i, o, s, a, u, l = p(e);
        if (!r && 1 === l.length) {
          if ((o = l[0] = l[0].slice(0)).length > 2 && "ID" === (s = o[0]).type && b.getById && 9 === t.nodeType && L && w.relative[o[1].type]) {
            if (!(t = (w.find.ID(s.matches[0].replace(ye, xe), t) || [])[0])) return n;
            e = e.slice(o.shift().value.length)
          }
          for (i = fe.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i], !w.relative[a = s.type]);)
            if ((u = w.find[a]) && (r = u(s.matches[0].replace(ye, xe), me.test(o[0].type) && c(t.parentNode) || t))) {
              if (o.splice(i, 1), !(e = r.length && d(o))) return Q.apply(n, r), n;
              break
            }
        }
        return N(e, l)(r, t, !L, n, me.test(e) && c(t.parentNode) || t), n
      }(e.replace(oe, "$1"), t, n, r)
    }

    function n() {
      function e(n, r) {
        return t.push(n + " ") > w.cacheLength && delete e[t.shift()], e[n + " "] = r
      }
      var t = [];
      return e
    }

    function r(e) {
      return e[P] = !0, e
    }

    function i(e) {
      var t = j.createElement("div");
      try {
        return !!e(t)
      } catch (e) {
        return !1
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null
      }
    }

    function o(e, t) {
      for (var n = e.split("|"), r = e.length; r--;) w.attrHandle[n[r]] = t
    }

    function s(e, t) {
      var n = t && e,
        r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || z) - (~e.sourceIndex || z);
      if (r) return r;
      if (n)
        for (; n = n.nextSibling;)
          if (n === t) return -1;
      return e ? 1 : -1
    }

    function a(e) {
      return function(t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e
      }
    }

    function u(e) {
      return function(t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e
      }
    }

    function l(e) {
      return r(function(t) {
        return t = +t, r(function(n, r) {
          for (var i, o = e([], n.length, t), s = o.length; s--;) n[i = o[s]] && (n[i] = !(r[i] = n[i]))
        })
      })
    }

    function c(e) {
      return e && _typeof(e.getElementsByTagName) !== X && e
    }

    function f() {}

    function p(e, n) {
      var r, i, o, s, a, u, l, c = $[e + " "];
      if (c) return n ? 0 : c.slice(0);
      for (a = e, u = [], l = w.preFilter; a;) {
        r && !(i = se.exec(a)) || (i && (a = a.slice(i[0].length) || a), u.push(o = [])), r = !1, (i = ae.exec(a)) && (r = i.shift(), o.push({
          value: r,
          type: i[0].replace(oe, " ")
        }), a = a.slice(r.length));
        for (s in w.filter) !(i = fe[s].exec(a)) || l[s] && !(i = l[s](i)) || (r = i.shift(), o.push({
          value: r,
          type: s,
          matches: i
        }), a = a.slice(r.length));
        if (!r) break
      }
      return n ? a.length : a ? t.error(e) : $(e, u).slice(0)
    }

    function d(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r
    }

    function h(e, t, n) {
      var r = t.dir,
        i = n && "parentNode" === r,
        o = _++;
      return t.first ? function(t, n, o) {
        for (; t = t[r];)
          if (1 === t.nodeType || i) return e(t, n, o)
      } : function(t, n, s) {
        var a, u, l = [R, o];
        if (s) {
          for (; t = t[r];)
            if ((1 === t.nodeType || i) && e(t, n, s)) return !0
        } else
          for (; t = t[r];)
            if (1 === t.nodeType || i) {
              if (u = t[P] || (t[P] = {}), (a = u[r]) && a[0] === R && a[1] === o) return l[2] = a[2];
              if (u[r] = l, l[2] = e(t, n, s)) return !0
            }
      }
    }

    function g(e) {
      return e.length > 1 ? function(t, n, r) {
        for (var i = e.length; i--;)
          if (!e[i](t, n, r)) return !1;
        return !0
      } : e[0]
    }

    function m(e, t, n, r, i) {
      for (var o, s = [], a = 0, u = e.length, l = null != t; a < u; a++)(o = e[a]) && (n && !n(o, r, i) || (s.push(o), l && t.push(a)));
      return s
    }

    function v(e, n, i, o, s, a) {
      return o && !o[P] && (o = v(o)), s && !s[P] && (s = v(s, a)), r(function(r, a, u, l) {
        var c, f, p, d = [],
          h = [],
          g = a.length,
          v = r || function(e, n, r) {
            for (var i = 0, o = n.length; i < o; i++) t(e, n[i], r);
            return r
          }(n || "*", u.nodeType ? [u] : u, []),
          y = !e || !r && n ? v : m(v, d, e, u, l),
          x = i ? s || (r ? e : g || o) ? [] : a : y;
        if (i && i(y, x, u, l), o)
          for (c = m(x, h), o(c, [], u, l), f = c.length; f--;)(p = c[f]) && (x[h[f]] = !(y[h[f]] = p));
        if (r) {
          if (s || e) {
            if (s) {
              for (c = [], f = x.length; f--;)(p = x[f]) && c.push(y[f] = p);
              s(null, x = [], c, l)
            }
            for (f = x.length; f--;)(p = x[f]) && (c = s ? K.call(r, p) : d[f]) > -1 && (r[c] = !(a[c] = p))
          }
        } else x = m(x === a ? x.splice(g, x.length) : x), s ? s(null, a, x, l) : Q.apply(a, x)
      })
    }

    function y(e) {
      for (var t, n, r, i = e.length, o = w.relative[e[0].type], s = o || w.relative[" "], a = o ? 1 : 0, u = h(function(e) {
          return e === t
        }, s, !0), l = h(function(e) {
          return K.call(t, e) > -1
        }, s, !0), c = [function(e, n, r) {
          return !o && (r || n !== k) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r))
        }]; a < i; a++)
        if (n = w.relative[e[a].type]) c = [h(g(c), n)];
        else {
          if ((n = w.filter[e[a].type].apply(null, e[a].matches))[P]) {
            for (r = ++a; r < i && !w.relative[e[r].type]; r++);
            return v(a > 1 && g(c), a > 1 && d(e.slice(0, a - 1).concat({
              value: " " === e[a - 2].type ? "*" : ""
            })).replace(oe, "$1"), n, a < r && y(e.slice(a, r)), r < i && y(e = e.slice(r)), r < i && d(e))
          }
          c.push(n)
        } return g(c)
    }
    var x, b, w, T, C, N, k, E, S, D, j, A, L, q, H, O, F, P = "sizzle" + -new Date,
      M = e.document,
      R = 0,
      _ = 0,
      W = n(),
      $ = n(),
      B = n(),
      I = function(e, t) {
        return e === t && (S = !0), 0
      },
      X = "undefined",
      z = 1 << 31,
      U = {}.hasOwnProperty,
      V = [],
      Y = V.pop,
      G = V.push,
      Q = V.push,
      J = V.slice,
      K = V.indexOf || function(e) {
        for (var t = 0, n = this.length; t < n; t++)
          if (this[t] === e) return t;
        return -1
      },
      Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      ee = "[\\x20\\t\\r\\n\\f]",
      te = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      ne = te.replace("w", "w#"),
      re = "\\[" + ee + "*(" + te + ")" + ee + "*(?:([*^$|!~]?=)" + ee + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ne + ")|)|)" + ee + "*\\]",
      ie = ":(" + te + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + re.replace(3, 8) + ")*)|.*)\\)|)",
      oe = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
      se = new RegExp("^" + ee + "*," + ee + "*"),
      ae = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
      ue = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
      le = new RegExp(ie),
      ce = new RegExp("^" + ne + "$"),
      fe = {
        ID: new RegExp("^#(" + te + ")"),
        CLASS: new RegExp("^\\.(" + te + ")"),
        TAG: new RegExp("^(" + te.replace("w", "w*") + ")"),
        ATTR: new RegExp("^" + re),
        PSEUDO: new RegExp("^" + ie),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + Z + ")$", "i"),
        needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
      },
      pe = /^(?:input|select|textarea|button)$/i,
      de = /^h\d$/i,
      he = /^[^{]+\{\s*\[native \w/,
      ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      me = /[+~]/,
      ve = /'|\\/g,
      ye = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
      xe = function(e, t, n) {
        var r = "0x" + t - 65536;
        return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
      };
    try {
      Q.apply(V = J.call(M.childNodes), M.childNodes), V[M.childNodes.length].nodeType
    } catch (e) {
      Q = {
        apply: V.length ? function(e, t) {
          G.apply(e, J.call(t))
        } : function(e, t) {
          for (var n = e.length, r = 0; e[n++] = t[r++];);
          e.length = n - 1
        }
      }
    }
    b = t.support = {}, C = t.isXML = function(e) {
      var t = e && (e.ownerDocument || e).documentElement;
      return !!t && "HTML" !== t.nodeName
    }, D = t.setDocument = function(e) {
      var t, n = e ? e.ownerDocument || e : M,
        r = n.defaultView;
      return n !== j && 9 === n.nodeType && n.documentElement ? (j = n, A = n.documentElement, L = !C(n), r && r !== r.top && (r.addEventListener ? r.addEventListener("unload", function() {
        D()
      }, !1) : r.attachEvent && r.attachEvent("onunload", function() {
        D()
      })), b.attributes = i(function(e) {
        return e.className = "i", !e.getAttribute("className")
      }), b.getElementsByTagName = i(function(e) {
        return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
      }), b.getElementsByClassName = he.test(n.getElementsByClassName) && i(function(e) {
        return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
      }), b.getById = i(function(e) {
        return A.appendChild(e).id = P, !n.getElementsByName || !n.getElementsByName(P).length
      }), b.getById ? (w.find.ID = function(e, t) {
        if (_typeof(t.getElementById) !== X && L) {
          var n = t.getElementById(e);
          return n && n.parentNode ? [n] : []
        }
      }, w.filter.ID = function(e) {
        var t = e.replace(ye, xe);
        return function(e) {
          return e.getAttribute("id") === t
        }
      }) : (delete w.find.ID, w.filter.ID = function(e) {
        var t = e.replace(ye, xe);
        return function(e) {
          var n = _typeof(e.getAttributeNode) !== X && e.getAttributeNode("id");
          return n && n.value === t
        }
      }), w.find.TAG = b.getElementsByTagName ? function(e, t) {
        if (_typeof(t.getElementsByTagName) !== X) return t.getElementsByTagName(e)
      } : function(e, t) {
        var n, r = [],
          i = 0,
          o = t.getElementsByTagName(e);
        if ("*" === e) {
          for (; n = o[i++];) 1 === n.nodeType && r.push(n);
          return r
        }
        return o
      }, w.find.CLASS = b.getElementsByClassName && function(e, t) {
        if (_typeof(t.getElementsByClassName) !== X && L) return t.getElementsByClassName(e)
      }, H = [], q = [], (b.qsa = he.test(n.querySelectorAll)) && (i(function(e) {
        e.innerHTML = "<select t=''><option selected=''></option></select>", e.querySelectorAll("[t^='']").length && q.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || q.push("\\[" + ee + "*(?:value|" + Z + ")"), e.querySelectorAll(":checked").length || q.push(":checked")
      }), i(function(e) {
        var t = n.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && q.push("name" + ee + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), q.push(",.*:")
      })), (b.matchesSelector = he.test(O = A.webkitMatchesSelector || A.mozMatchesSelector || A.oMatchesSelector || A.msMatchesSelector)) && i(function(e) {
        b.disconnectedMatch = O.call(e, "div"), O.call(e, "[s!='']:x"), H.push("!=", ie)
      }), q = q.length && new RegExp(q.join("|")), H = H.length && new RegExp(H.join("|")), t = he.test(A.compareDocumentPosition), F = t || he.test(A.contains) ? function(e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
          r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
      } : function(e, t) {
        if (t)
          for (; t = t.parentNode;)
            if (t === e) return !0;
        return !1
      }, I = t ? function(e, t) {
        if (e === t) return S = !0, 0;
        var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !b.sortDetached && t.compareDocumentPosition(e) === r ? e === n || e.ownerDocument === M && F(M, e) ? -1 : t === n || t.ownerDocument === M && F(M, t) ? 1 : E ? K.call(E, e) - K.call(E, t) : 0 : 4 & r ? -1 : 1)
      } : function(e, t) {
        if (e === t) return S = !0, 0;
        var r, i = 0,
          o = e.parentNode,
          a = t.parentNode,
          u = [e],
          l = [t];
        if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : E ? K.call(E, e) - K.call(E, t) : 0;
        if (o === a) return s(e, t);
        for (r = e; r = r.parentNode;) u.unshift(r);
        for (r = t; r = r.parentNode;) l.unshift(r);
        for (; u[i] === l[i];) i++;
        return i ? s(u[i], l[i]) : u[i] === M ? -1 : l[i] === M ? 1 : 0
      }, n) : j
    }, t.matches = function(e, n) {
      return t(e, null, null, n)
    }, t.matchesSelector = function(e, n) {
      if ((e.ownerDocument || e) !== j && D(e), n = n.replace(ue, "='$1']"), b.matchesSelector && L && (!H || !H.test(n)) && (!q || !q.test(n))) try {
        var r = O.call(e, n);
        if (r || b.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
      } catch (e) {}
      return t(n, j, null, [e]).length > 0
    }, t.contains = function(e, t) {
      return (e.ownerDocument || e) !== j && D(e), F(e, t)
    }, t.attr = function(e, t) {
      (e.ownerDocument || e) !== j && D(e);
      var n = w.attrHandle[t.toLowerCase()],
        r = n && U.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !L) : void 0;
      return void 0 !== r ? r : b.attributes || !L ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
    }, t.error = function(e) {
      throw new Error("Syntax error, unrecognized expression: " + e)
    }, t.uniqueSort = function(e) {
      var t, n = [],
        r = 0,
        i = 0;
      if (S = !b.detectDuplicates, E = !b.sortStable && e.slice(0), e.sort(I), S) {
        for (; t = e[i++];) t === e[i] && (r = n.push(i));
        for (; r--;) e.splice(n[r], 1)
      }
      return E = null, e
    }, T = t.getText = function(e) {
      var t, n = "",
        r = 0,
        i = e.nodeType;
      if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ("string" == typeof e.textContent) return e.textContent;
          for (e = e.firstChild; e; e = e.nextSibling) n += T(e)
        } else if (3 === i || 4 === i) return e.nodeValue
      } else
        for (; t = e[r++];) n += T(t);
      return n
    }, (w = t.selectors = {
      cacheLength: 50,
      createPseudo: r,
      match: fe,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function(e) {
          return e[1] = e[1].replace(ye, xe), e[3] = (e[4] || e[5] || "").replace(ye, xe), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
        },
        CHILD: function(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
        },
        PSEUDO: function(e) {
          var t, n = !e[5] && e[2];
          return fe.CHILD.test(e[0]) ? null : (e[3] && void 0 !== e[4] ? e[2] = e[4] : n && le.test(n) && (t = p(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
        }
      },
      filter: {
        TAG: function(e) {
          var t = e.replace(ye, xe).toLowerCase();
          return "*" === e ? function() {
            return !0
          } : function(e) {
            return e.nodeName && e.nodeName.toLowerCase() === t
          }
        },
        CLASS: function(e) {
          var t = W[e + " "];
          return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && W(e, function(e) {
            return t.test("string" == typeof e.className && e.className || _typeof(e.getAttribute) !== X && e.getAttribute("class") || "")
          })
        },
        ATTR: function(e, n, r) {
          return function(i) {
            var o = t.attr(i, e);
            return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
          }
        },
        CHILD: function(e, t, n, r, i) {
          var o = "nth" !== e.slice(0, 3),
            s = "last" !== e.slice(-4),
            a = "of-type" === t;
          return 1 === r && 0 === i ? function(e) {
            return !!e.parentNode
          } : function(t, n, u) {
            var l, c, f, p, d, h, g = o !== s ? "nextSibling" : "previousSibling",
              m = t.parentNode,
              v = a && t.nodeName.toLowerCase(),
              y = !u && !a;
            if (m) {
              if (o) {
                for (; g;) {
                  for (f = t; f = f[g];)
                    if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                  h = g = "only" === e && !h && "nextSibling"
                }
                return !0
              }
              if (h = [s ? m.firstChild : m.lastChild], s && y) {
                for (d = (l = (c = m[P] || (m[P] = {}))[e] || [])[0] === R && l[1], p = l[0] === R && l[2], f = d && m.childNodes[d]; f = ++d && f && f[g] || (p = d = 0) || h.pop();)
                  if (1 === f.nodeType && ++p && f === t) {
                    c[e] = [R, d, p];
                    break
                  }
              } else if (y && (l = (t[P] || (t[P] = {}))[e]) && l[0] === R) p = l[1];
              else
                for (;
                  (f = ++d && f && f[g] || (p = d = 0) || h.pop()) && ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++p || (y && ((f[P] || (f[P] = {}))[e] = [R, p]), f !== t)););
              return (p -= i) === r || p % r == 0 && p / r >= 0
            }
          }
        },
        PSEUDO: function(e, n) {
          var i, o = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
          return o[P] ? o(n) : o.length > 1 ? (i = [e, e, "", n], w.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
            for (var r, i = o(e, n), s = i.length; s--;) e[r = K.call(e, i[s])] = !(t[r] = i[s])
          }) : function(e) {
            return o(e, 0, i)
          }) : o
        }
      },
      pseudos: {
        not: r(function(e) {
          var t = [],
            n = [],
            i = N(e.replace(oe, "$1"));
          return i[P] ? r(function(e, t, n, r) {
            for (var o, s = i(e, null, r, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
          }) : function(e, r, o) {
            return t[0] = e, i(t, null, o, n), !n.pop()
          }
        }),
        has: r(function(e) {
          return function(n) {
            return t(e, n).length > 0
          }
        }),
        contains: r(function(e) {
          return function(t) {
            return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
          }
        }),
        lang: r(function(e) {
          return ce.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ye, xe).toLowerCase(),
            function(t) {
              var n;
              do {
                if (n = L ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
              } while ((t = t.parentNode) && 1 === t.nodeType);
              return !1
            }
        }),
        target: function(t) {
          var n = e.location && e.location.hash;
          return n && n.slice(1) === t.id
        },
        root: function(e) {
          return e === A
        },
        focus: function(e) {
          return e === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
        },
        enabled: function(e) {
          return !1 === e.disabled
        },
        disabled: function(e) {
          return !0 === e.disabled
        },
        checked: function(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected
        },
        selected: function(e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
        },
        empty: function(e) {
          for (e = e.firstChild; e; e = e.nextSibling)
            if (e.nodeType < 6) return !1;
          return !0
        },
        parent: function(e) {
          return !w.pseudos.empty(e)
        },
        header: function(e) {
          return de.test(e.nodeName)
        },
        input: function(e) {
          return pe.test(e.nodeName)
        },
        button: function(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t
        },
        text: function(e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
        },
        first: l(function() {
          return [0]
        }),
        last: l(function(e, t) {
          return [t - 1]
        }),
        eq: l(function(e, t, n) {
          return [n < 0 ? n + t : n]
        }),
        even: l(function(e, t) {
          for (var n = 0; n < t; n += 2) e.push(n);
          return e
        }),
        odd: l(function(e, t) {
          for (var n = 1; n < t; n += 2) e.push(n);
          return e
        }),
        lt: l(function(e, t, n) {
          for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
          return e
        }),
        gt: l(function(e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
          return e
        })
      }
    }).pseudos.nth = w.pseudos.eq;
    for (x in {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
      }) w.pseudos[x] = a(x);
    for (x in {
        submit: !0,
        reset: !0
      }) w.pseudos[x] = u(x);
    return f.prototype = w.filters = w.pseudos, w.setFilters = new f, N = t.compile = function(e, n) {
      var i, o = [],
        s = [],
        a = B[e + " "];
      if (!a) {
        for (n || (n = p(e)), i = n.length; i--;)(a = y(n[i]))[P] ? o.push(a) : s.push(a);
        a = B(e, function(e, n) {
          var i = n.length > 0,
            o = e.length > 0,
            s = function(r, s, a, u, l) {
              var c, f, p, d = 0,
                h = "0",
                g = r && [],
                v = [],
                y = k,
                x = r || o && w.find.TAG("*", l),
                b = R += null == y ? 1 : Math.random() || .1,
                T = x.length;
              for (l && (k = s !== j && s); h !== T && null != (c = x[h]); h++) {
                if (o && c) {
                  for (f = 0; p = e[f++];)
                    if (p(c, s, a)) {
                      u.push(c);
                      break
                    } l && (R = b)
                }
                i && ((c = !p && c) && d--, r && g.push(c))
              }
              if (d += h, i && h !== d) {
                for (f = 0; p = n[f++];) p(g, v, s, a);
                if (r) {
                  if (d > 0)
                    for (; h--;) g[h] || v[h] || (v[h] = Y.call(u));
                  v = m(v)
                }
                Q.apply(u, v), l && !r && v.length > 0 && d + n.length > 1 && t.uniqueSort(u)
              }
              return l && (R = b, k = y), g
            };
          return i ? r(s) : s
        }(s, o))
      }
      return a
    }, b.sortStable = P.split("").sort(I).join("") === P, b.detectDuplicates = !!S, D(), b.sortDetached = i(function(e) {
      return 1 & e.compareDocumentPosition(j.createElement("div"))
    }), i(function(e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
    }) || o("type|href|height|width", function(e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
    }), b.attributes && i(function(e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
    }) || o("value", function(e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
    }), i(function(e) {
      return null == e.getAttribute("disabled")
    }) || o(Z, function(e, t, n) {
      var r;
      if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
    }), t
  }(e);
  Y.find = K, Y.expr = K.selectors, Y.expr[":"] = Y.expr.pseudos, Y.unique = K.uniqueSort, Y.text = K.getText, Y.isXMLDoc = K.isXML, Y.contains = K.contains;
  var Z = Y.expr.match.needsContext,
    ee = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    te = /^.[^:#\[\.,]*$/;
  Y.filter = function(e, t, n) {
    var r = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? Y.find.matchesSelector(r, e) ? [r] : [] : Y.find.matches(e, Y.grep(t, function(e) {
      return 1 === e.nodeType
    }))
  }, Y.fn.extend({
    find: function(e) {
      var t, n = this.length,
        r = [],
        i = this;
      if ("string" != typeof e) return this.pushStack(Y(e).filter(function() {
        for (t = 0; t < n; t++)
          if (Y.contains(i[t], this)) return !0
      }));
      for (t = 0; t < n; t++) Y.find(e, i[t], r);
      return r = this.pushStack(n > 1 ? Y.unique(r) : r), r.selector = this.selector ? this.selector + " " + e : e, r
    },
    filter: function(e) {
      return this.pushStack(r(this, e || [], !1))
    },
    not: function(e) {
      return this.pushStack(r(this, e || [], !0))
    },
    is: function(e) {
      return !!r(this, "string" == typeof e && Z.test(e) ? Y(e) : e || [], !1).length
    }
  });
  var ne, re = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
  (Y.fn.init = function(e, t) {
    var n, r;
    if (!e) return this;
    if ("string" == typeof e) {
      if (!(n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : re.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || ne).find(e) : this.constructor(t).find(e);
      if (n[1]) {
        if (t = t instanceof Y ? t[0] : t, Y.merge(this, Y.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : V, !0)), ee.test(n[1]) && Y.isPlainObject(t))
          for (n in t) Y.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
        return this
      }
      return (r = V.getElementById(n[2])) && r.parentNode && (this.length = 1, this[0] = r), this.context = V, this.selector = e, this
    }
    return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : Y.isFunction(e) ? void 0 !== ne.ready ? ne.ready(e) : e(Y) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), Y.makeArray(e, this))
  }).prototype = Y.fn, ne = Y(V);
  var ie = /^(?:parents|prev(?:Until|All))/,
    oe = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
  Y.extend({
    dir: function(e, t, n) {
      for (var r = [], i = void 0 !== n;
        (e = e[t]) && 9 !== e.nodeType;)
        if (1 === e.nodeType) {
          if (i && Y(e).is(n)) break;
          r.push(e)
        } return r
    },
    sibling: function(e, t) {
      for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
      return n
    }
  }), Y.fn.extend({
    has: function(e) {
      var t = Y(e, this),
        n = t.length;
      return this.filter(function() {
        for (var e = 0; e < n; e++)
          if (Y.contains(this, t[e])) return !0
      })
    },
    closest: function(e, t) {
      for (var n, r = 0, i = this.length, o = [], s = Z.test(e) || "string" != typeof e ? Y(e, t || this.context) : 0; r < i; r++)
        for (n = this[r]; n && n !== t; n = n.parentNode)
          if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && Y.find.matchesSelector(n, e))) {
            o.push(n);
            break
          } return this.pushStack(o.length > 1 ? Y.unique(o) : o)
    },
    index: function(e) {
      return e ? "string" == typeof e ? $.call(Y(e), this[0]) : $.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    },
    add: function(e, t) {
      return this.pushStack(Y.unique(Y.merge(this.get(), Y(e, t))))
    },
    addBack: function(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }
  }), Y.each({
    parent: function(e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null
    },
    parents: function(e) {
      return Y.dir(e, "parentNode")
    },
    parentsUntil: function(e, t, n) {
      return Y.dir(e, "parentNode", n)
    },
    next: function(e) {
      return i(e, "nextSibling")
    },
    prev: function(e) {
      return i(e, "previousSibling")
    },
    nextAll: function(e) {
      return Y.dir(e, "nextSibling")
    },
    prevAll: function(e) {
      return Y.dir(e, "previousSibling")
    },
    nextUntil: function(e, t, n) {
      return Y.dir(e, "nextSibling", n)
    },
    prevUntil: function(e, t, n) {
      return Y.dir(e, "previousSibling", n)
    },
    siblings: function(e) {
      return Y.sibling((e.parentNode || {}).firstChild, e)
    },
    children: function(e) {
      return Y.sibling(e.firstChild)
    },
    contents: function(e) {
      return e.contentDocument || Y.merge([], e.childNodes)
    }
  }, function(e, t) {
    Y.fn[e] = function(n, r) {
      var i = Y.map(this, t, n);
      return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = Y.filter(r, i)), this.length > 1 && (oe[e] || Y.unique(i), ie.test(e) && i.reverse()), this.pushStack(i)
    }
  });
  var se = /\S+/g,
    ae = {};
  Y.Callbacks = function(e) {
    var t, n, r, i, o, s, a = [],
      u = !(e = "string" == typeof e ? ae[e] || function(e) {
        var t = ae[e] = {};
        return Y.each(e.match(se) || [], function(e, n) {
          t[n] = !0
        }), t
      }(e) : Y.extend({}, e)).once && [],
      l = function l(f) {
        for (t = e.memory && f, n = !0, s = i || 0, i = 0, o = a.length, r = !0; a && s < o; s++)
          if (!1 === a[s].apply(f[0], f[1]) && e.stopOnFalse) {
            t = !1;
            break
          } r = !1, a && (u ? u.length && l(u.shift()) : t ? a = [] : c.disable())
      },
      c = {
        add: function() {
          if (a) {
            var n = a.length;
            ! function t(n) {
              Y.each(n, function(n, r) {
                var i = Y.type(r);
                "function" === i ? e.unique && c.has(r) || a.push(r) : r && r.length && "string" !== i && t(r)
              })
            }(arguments), r ? o = a.length : t && (i = n, l(t))
          }
          return this
        },
        remove: function() {
          return a && Y.each(arguments, function(e, t) {
            for (var n;
              (n = Y.inArray(t, a, n)) > -1;) a.splice(n, 1), r && (n <= o && o--, n <= s && s--)
          }), this
        },
        has: function(e) {
          return e ? Y.inArray(e, a) > -1 : !(!a || !a.length)
        },
        empty: function() {
          return a = [], o = 0, this
        },
        disable: function() {
          return a = u = t = void 0, this
        },
        disabled: function() {
          return !a
        },
        lock: function() {
          return u = void 0, t || c.disable(), this
        },
        locked: function() {
          return !u
        },
        fireWith: function(e, t) {
          return !a || n && !u || (t = [e, (t = t || []).slice ? t.slice() : t], r ? u.push(t) : l(t)), this
        },
        fire: function() {
          return c.fireWith(this, arguments), this
        },
        fired: function() {
          return !!n
        }
      };
    return c
  }, Y.extend({
    Deferred: function(e) {
      var t = [
          ["resolve", "done", Y.Callbacks("once memory"), "resolved"],
          ["reject", "fail", Y.Callbacks("once memory"), "rejected"],
          ["notify", "progress", Y.Callbacks("memory")]
        ],
        n = "pending",
        r = {
          state: function() {
            return n
          },
          always: function() {
            return i.done(arguments).fail(arguments), this
          },
          then: function() {
            var e = arguments;
            return Y.Deferred(function(n) {
              Y.each(t, function(t, o) {
                var s = Y.isFunction(e[t]) && e[t];
                i[o[1]](function() {
                  var e = s && s.apply(this, arguments);
                  e && Y.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                })
              }), e = null
            }).promise()
          },
          promise: function(e) {
            return null != e ? Y.extend(e, r) : r
          }
        },
        i = {};
      return r.pipe = r.then, Y.each(t, function(e, o) {
        var s = o[2],
          a = o[3];
        r[o[1]] = s.add, a && s.add(function() {
          n = a
        }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
          return i[o[0] + "With"](this === i ? r : this, arguments), this
        }, i[o[0] + "With"] = s.fireWith
      }), r.promise(i), e && e.call(i, i), i
    },
    when: function(e) {
      var t, n, r, i = 0,
        o = R.call(arguments),
        s = o.length,
        a = 1 !== s || e && Y.isFunction(e.promise) ? s : 0,
        u = 1 === a ? e : Y.Deferred(),
        l = function(e, n, r) {
          return function(i) {
            n[e] = this, r[e] = arguments.length > 1 ? R.call(arguments) : i, r === t ? u.notifyWith(n, r) : --a || u.resolveWith(n, r)
          }
        };
      if (s > 1)
        for (t = new Array(s), n = new Array(s), r = new Array(s); i < s; i++) o[i] && Y.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --a;
      return a || u.resolveWith(r, o), u.promise()
    }
  });
  var ue;
  Y.fn.ready = function(e) {
    return Y.ready.promise().done(e), this
  }, Y.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function(e) {
      e ? Y.readyWait++ : Y.ready(!0)
    },
    ready: function(e) {
      (!0 === e ? --Y.readyWait : Y.isReady) || (Y.isReady = !0, !0 !== e && --Y.readyWait > 0 || (ue.resolveWith(V, [Y]), Y.fn.trigger && Y(V).trigger("ready").off("ready")))
    }
  }), Y.ready.promise = function(t) {
    return ue || (ue = Y.Deferred(), "complete" === V.readyState ? setTimeout(Y.ready) : (V.addEventListener("DOMContentLoaded", o, !1), e.addEventListener("load", o, !1))), ue.promise(t)
  }, Y.ready.promise();
  var le = Y.access = function(e, t, n, r, i, o, s) {
    var a = 0,
      u = e.length,
      l = null == n;
    if ("object" === Y.type(n)) {
      i = !0;
      for (a in n) Y.access(e, t, a, n[a], !0, o, s)
    } else if (void 0 !== r && (i = !0, Y.isFunction(r) || (s = !0), l && (s ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
        return l.call(Y(e), n)
      })), t))
      for (; a < u; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
    return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
  };
  Y.acceptData = function(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
  }, s.uid = 1, s.accepts = Y.acceptData, s.prototype = {
    key: function(e) {
      if (!s.accepts(e)) return 0;
      var t = {},
        n = e[this.expando];
      if (!n) {
        n = s.uid++;
        try {
          t[this.expando] = {
            value: n
          }, Object.defineProperties(e, t)
        } catch (r) {
          t[this.expando] = n, Y.extend(e, t)
        }
      }
      return this.cache[n] || (this.cache[n] = {}), n
    },
    set: function(e, t, n) {
      var r, i = this.key(e),
        o = this.cache[i];
      if ("string" == typeof t) o[t] = n;
      else if (Y.isEmptyObject(o)) Y.extend(this.cache[i], t);
      else
        for (r in t) o[r] = t[r];
      return o
    },
    get: function(e, t) {
      var n = this.cache[this.key(e)];
      return void 0 === t ? n : n[t]
    },
    access: function(e, t, n) {
      var r;
      return void 0 === t || t && "string" == typeof t && void 0 === n ? void 0 !== (r = this.get(e, t)) ? r : this.get(e, Y.camelCase(t)) : (this.set(e, t, n), void 0 !== n ? n : t)
    },
    remove: function(e, t) {
      var n, r, i, o = this.key(e),
        s = this.cache[o];
      if (void 0 === t) this.cache[o] = {};
      else {
        Y.isArray(t) ? r = t.concat(t.map(Y.camelCase)) : (i = Y.camelCase(t), r = t in s ? [t, i] : (r = i) in s ? [r] : r.match(se) || []), n = r.length;
        for (; n--;) delete s[r[n]]
      }
    },
    hasData: function(e) {
      return !Y.isEmptyObject(this.cache[e[this.expando]] || {})
    },
    discard: function(e) {
      e[this.expando] && delete this.cache[e[this.expando]]
    }
  };
  var ce = new s,
    fe = new s,
    pe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    de = /([A-Z])/g;
  Y.extend({
    hasData: function(e) {
      return fe.hasData(e) || ce.hasData(e)
    },
    data: function(e, t, n) {
      return fe.access(e, t, n)
    },
    removeData: function(e, t) {
      fe.remove(e, t)
    },
    _data: function(e, t, n) {
      return ce.access(e, t, n)
    },
    _removeData: function(e, t) {
      ce.remove(e, t)
    }
  }), Y.fn.extend({
    data: function(e, t) {
      var n, r, i, o = this[0],
        s = o && o.attributes;
      if (void 0 === e) {
        if (this.length && (i = fe.get(o), 1 === o.nodeType && !ce.get(o, "hasDataAttrs"))) {
          for (n = s.length; n--;) 0 === (r = s[n].name).indexOf("data-") && (r = Y.camelCase(r.slice(5)), a(o, r, i[r]));
          ce.set(o, "hasDataAttrs", !0)
        }
        return i
      }
      return "object" === (void 0 === e ? "undefined" : _typeof(e)) ? this.each(function() {
        fe.set(this, e)
      }) : le(this, function(t) {
        var n, r = Y.camelCase(e);
        if (o && void 0 === t) {
          if (void 0 !== (n = fe.get(o, e))) return n;
          if (void 0 !== (n = fe.get(o, r))) return n;
          if (void 0 !== (n = a(o, r, void 0))) return n
        } else this.each(function() {
          var n = fe.get(this, r);
          fe.set(this, r, t), -1 !== e.indexOf("-") && void 0 !== n && fe.set(this, e, t)
        })
      }, null, t, arguments.length > 1, null, !0)
    },
    removeData: function(e) {
      return this.each(function() {
        fe.remove(this, e)
      })
    }
  }), Y.extend({
    queue: function(e, t, n) {
      var r;
      if (e) return t = (t || "fx") + "queue", r = ce.get(e, t), n && (!r || Y.isArray(n) ? r = ce.access(e, t, Y.makeArray(n)) : r.push(n)), r || []
    },
    dequeue: function(e, t) {
      t = t || "fx";
      var n = Y.queue(e, t),
        r = n.length,
        i = n.shift(),
        o = Y._queueHooks(e, t),
        s = function() {
          Y.dequeue(e, t)
        };
      "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, s, o)), !r && o && o.empty.fire()
    },
    _queueHooks: function(e, t) {
      var n = t + "queueHooks";
      return ce.get(e, n) || ce.access(e, n, {
        empty: Y.Callbacks("once memory").add(function() {
          ce.remove(e, [t + "queue", n])
        })
      })
    }
  }), Y.fn.extend({
    queue: function(e, t) {
      var n = 2;
      return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? Y.queue(this[0], e) : void 0 === t ? this : this.each(function() {
        var n = Y.queue(this, e, t);
        Y._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && Y.dequeue(this, e)
      })
    },
    dequeue: function(e) {
      return this.each(function() {
        Y.dequeue(this, e)
      })
    },
    clearQueue: function(e) {
      return this.queue(e || "fx", [])
    },
    promise: function(e, t) {
      var n, r = 1,
        i = Y.Deferred(),
        o = this,
        s = this.length,
        a = function() {
          --r || i.resolveWith(o, [o])
        };
      for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = ce.get(o[s], e + "queueHooks")) && n.empty && (r++, n.empty.add(a));
      return a(), i.promise(t)
    }
  });
  var he = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    ge = ["Top", "Right", "Bottom", "Left"],
    me = function(e, t) {
      return e = t || e, "none" === Y.css(e, "display") || !Y.contains(e.ownerDocument, e)
    },
    ve = /^(?:checkbox|radio)$/i;
  ! function() {
    var e = V.createDocumentFragment().appendChild(V.createElement("div"));
    e.innerHTML = "<input type='radio' checked='checked' name='t'/>", U.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", U.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
  }();
  U.focusinBubbles = "onfocusin" in e;
  var ye = /^key/,
    xe = /^(?:mouse|contextmenu)|click/,
    be = /^(?:focusinfocus|focusoutblur)$/,
    we = /^([^.]*)(?:\.(.+)|)$/;
  Y.event = {
    global: {},
    add: function(e, t, n, r, i) {
      var o, s, a, u, l, c, f, p, d, h, g, m = ce.get(e);
      if (m)
        for (n.handler && (n = (o = n).handler, i = o.selector), n.guid || (n.guid = Y.guid++), (u = m.events) || (u = m.events = {}), (s = m.handle) || (s = m.handle = function(t) {
            return "undefined" !== (void 0 === Y ? "undefined" : _typeof(Y)) && Y.event.triggered !== t.type ? Y.event.dispatch.apply(e, arguments) : void 0
          }), l = (t = (t || "").match(se) || [""]).length; l--;) d = g = (a = we.exec(t[l]) || [])[1], h = (a[2] || "").split(".").sort(), d && (f = Y.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = Y.event.special[d] || {}, c = Y.extend({
          type: d,
          origType: g,
          data: r,
          handler: n,
          guid: n.guid,
          selector: i,
          needsContext: i && Y.expr.match.needsContext.test(i),
          namespace: h.join(".")
        }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, s) || e.addEventListener && e.addEventListener(d, s, !1)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), Y.event.global[d] = !0)
    },
    remove: function(e, t, n, r, i) {
      var o, s, a, u, l, c, f, p, d, h, g, m = ce.hasData(e) && ce.get(e);
      if (m && (u = m.events)) {
        for (l = (t = (t || "").match(se) || [""]).length; l--;)
          if (a = we.exec(t[l]) || [], d = g = a[1], h = (a[2] || "").split(".").sort(), d) {
            for (f = Y.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--;) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
            s && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, m.handle) || Y.removeEvent(e, d, m.handle), delete u[d])
          } else
            for (d in u) Y.event.remove(e, d + t[l], n, r, !0);
        Y.isEmptyObject(u) && (delete m.handle, ce.remove(e, "events"))
      }
    },
    trigger: function(t, n, r, i) {
      var o, s, a, u, l, c, f, p = [r || V],
        d = X.call(t, "type") ? t.type : t,
        h = X.call(t, "namespace") ? t.namespace.split(".") : [];
      if (s = a = r = r || V, 3 !== r.nodeType && 8 !== r.nodeType && !be.test(d + Y.event.triggered) && (d.indexOf(".") >= 0 && (d = (h = d.split(".")).shift(), h.sort()), l = d.indexOf(":") < 0 && "on" + d, t = t[Y.expando] ? t : new Y.Event(d, "object" === (void 0 === t ? "undefined" : _typeof(t)) && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : Y.makeArray(n, [t]), f = Y.event.special[d] || {}, i || !f.trigger || !1 !== f.trigger.apply(r, n))) {
        if (!i && !f.noBubble && !Y.isWindow(r)) {
          for (u = f.delegateType || d, be.test(u + d) || (s = s.parentNode); s; s = s.parentNode) p.push(s), a = s;
          a === (r.ownerDocument || V) && p.push(a.defaultView || a.parentWindow || e)
        }
        for (o = 0;
          (s = p[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? u : f.bindType || d, (c = (ce.get(s, "events") || {})[t.type] && ce.get(s, "handle")) && c.apply(s, n), (c = l && s[l]) && c.apply && Y.acceptData(s) && (t.result = c.apply(s, n), !1 === t.result && t.preventDefault());
        return t.type = d, i || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(p.pop(), n) || !Y.acceptData(r) || l && Y.isFunction(r[d]) && !Y.isWindow(r) && ((a = r[l]) && (r[l] = null), Y.event.triggered = d, r[d](), Y.event.triggered = void 0, a && (r[l] = a)), t.result
      }
    },
    dispatch: function(e) {
      e = Y.event.fix(e);
      var t, n, r, i, o, s = [],
        a = R.call(arguments),
        u = (ce.get(this, "events") || {})[e.type] || [],
        l = Y.event.special[e.type] || {};
      if (a[0] = e, e.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, e)) {
        for (s = Y.event.handlers.call(this, e, u), t = 0;
          (i = s[t++]) && !e.isPropagationStopped();)
          for (e.currentTarget = i.elem, n = 0;
            (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();) e.namespace_re && !e.namespace_re.test(o.namespace) || (e.handleObj = o, e.data = o.data, void 0 !== (r = ((Y.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a)) && !1 === (e.result = r) && (e.preventDefault(), e.stopPropagation()));
        return l.postDispatch && l.postDispatch.call(this, e), e.result
      }
    },
    handlers: function(e, t) {
      var n, r, i, o, s = [],
        a = t.delegateCount,
        u = e.target;
      if (a && u.nodeType && (!e.button || "click" !== e.type))
        for (; u !== this; u = u.parentNode || this)
          if (!0 !== u.disabled || "click" !== e.type) {
            for (r = [], n = 0; n < a; n++) void 0 === r[i = (o = t[n]).selector + " "] && (r[i] = o.needsContext ? Y(i, this).index(u) >= 0 : Y.find(i, this, null, [u]).length), r[i] && r.push(o);
            r.length && s.push({
              elem: u,
              handlers: r
            })
          } return a < t.length && s.push({
        elem: this,
        handlers: t.slice(a)
      }), s
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function(e, t) {
        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function(e, t) {
        var n, r, i, o = t.button;
        return null == e.pageX && null != t.clientX && (r = (n = e.target.ownerDocument || V).documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
      }
    },
    fix: function(e) {
      if (e[Y.expando]) return e;
      var t, n, r, i = e.type,
        o = e,
        s = this.fixHooks[i];
      for (s || (this.fixHooks[i] = s = xe.test(i) ? this.mouseHooks : ye.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new Y.Event(o), t = r.length; t--;) e[n = r[t]] = o[n];
      return e.target || (e.target = V), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, o) : e
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function() {
          if (this !== c() && this.focus) return this.focus(), !1
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function() {
          if (this === c() && this.blur) return this.blur(), !1
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function() {
          if ("checkbox" === this.type && this.click && Y.nodeName(this, "input")) return this.click(), !1
        },
        _default: function(e) {
          return Y.nodeName(e.target, "a")
        }
      },
      beforeunload: {
        postDispatch: function(e) {
          void 0 !== e.result && (e.originalEvent.returnValue = e.result)
        }
      }
    },
    simulate: function(e, t, n, r) {
      var i = Y.extend(new Y.Event, n, {
        type: e,
        isSimulated: !0,
        originalEvent: {}
      });
      r ? Y.event.trigger(i, null, t) : Y.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
    }
  }, Y.removeEvent = function(e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n, !1)
  }, Y.Event = function(e, t) {
    if (!(this instanceof Y.Event)) return new Y.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.getPreventDefault && e.getPreventDefault() ? u : l) : this.type = e, t && Y.extend(this, t), this.timeStamp = e && e.timeStamp || Y.now(), this[Y.expando] = !0
  }, Y.Event.prototype = {
    isDefaultPrevented: l,
    isPropagationStopped: l,
    isImmediatePropagationStopped: l,
    preventDefault: function() {
      var e = this.originalEvent;
      this.isDefaultPrevented = u, e && e.preventDefault && e.preventDefault()
    },
    stopPropagation: function() {
      var e = this.originalEvent;
      this.isPropagationStopped = u, e && e.stopPropagation && e.stopPropagation()
    },
    stopImmediatePropagation: function() {
      this.isImmediatePropagationStopped = u, this.stopPropagation()
    }
  }, Y.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  }, function(e, t) {
    Y.event.special[e] = {
      delegateType: t,
      bindType: t,
      handle: function(e) {
        var n, r = e.relatedTarget,
          i = e.handleObj;
        return r && (r === this || Y.contains(this, r)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
      }
    }
  }), U.focusinBubbles || Y.each({
    focus: "focusin",
    blur: "focusout"
  }, function(e, t) {
    var n = function(e) {
      Y.event.simulate(t, e.target, Y.event.fix(e), !0)
    };
    Y.event.special[t] = {
      setup: function() {
        var r = this.ownerDocument || this,
          i = ce.access(r, t);
        i || r.addEventListener(e, n, !0), ce.access(r, t, (i || 0) + 1)
      },
      teardown: function() {
        var r = this.ownerDocument || this,
          i = ce.access(r, t) - 1;
        i ? ce.access(r, t, i) : (r.removeEventListener(e, n, !0), ce.remove(r, t))
      }
    }
  }), Y.fn.extend({
    on: function(e, t, n, r, i) {
      var o, s;
      if ("object" === (void 0 === e ? "undefined" : _typeof(e))) {
        "string" != typeof t && (n = n || t, t = void 0);
        for (s in e) this.on(s, t, n, e[s], i);
        return this
      }
      if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), !1 === r) r = l;
      else if (!r) return this;
      return 1 === i && (o = r, (r = function(e) {
        return Y().off(e), o.apply(this, arguments)
      }).guid = o.guid || (o.guid = Y.guid++)), this.each(function() {
        Y.event.add(this, e, r, n, t)
      })
    },
    one: function(e, t, n, r) {
      return this.on(e, t, n, r, 1)
    },
    off: function(e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj) return r = e.handleObj, Y(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
      if ("object" === (void 0 === e ? "undefined" : _typeof(e))) {
        for (i in e) this.off(i, t, e[i]);
        return this
      }
      return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = l), this.each(function() {
        Y.event.remove(this, e, n, t)
      })
    },
    trigger: function(e, t) {
      return this.each(function() {
        Y.event.trigger(e, t, this)
      })
    },
    triggerHandler: function(e, t) {
      var n = this[0];
      if (n) return Y.event.trigger(e, t, n, !0)
    }
  });
  var Te = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    Ce = /<([\w:]+)/,
    Ne = /<|&#?\w+;/,
    ke = /<(?:script|style|link)/i,
    Ee = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Se = /^$|\/(?:java|ecma)script/i,
    De = /^true\/(.*)/,
    je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    Ae = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };
  Ae.optgroup = Ae.option, Ae.tbody = Ae.tfoot = Ae.colgroup = Ae.caption = Ae.thead, Ae.th = Ae.td, Y.extend({
    clone: function(e, t, n) {
      var r, i, o, s, a = e.cloneNode(!0),
        u = Y.contains(e.ownerDocument, e);
      if (!(U.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Y.isXMLDoc(e)))
        for (s = m(a), r = 0, i = (o = m(e)).length; r < i; r++) v(o[r], s[r]);
      if (t)
        if (n)
          for (o = o || m(e), s = s || m(a), r = 0, i = o.length; r < i; r++) g(o[r], s[r]);
        else g(e, a);
      return (s = m(a, "script")).length > 0 && h(s, !u && m(e, "script")), a
    },
    buildFragment: function(e, t, n, r) {
      for (var i, o, s, a, u, l, c = t.createDocumentFragment(), f = [], p = 0, d = e.length; p < d; p++)
        if ((i = e[p]) || 0 === i)
          if ("object" === Y.type(i)) Y.merge(f, i.nodeType ? [i] : i);
          else if (Ne.test(i)) {
        for (o = o || c.appendChild(t.createElement("div")), s = (Ce.exec(i) || ["", ""])[1].toLowerCase(), a = Ae[s] || Ae._default, o.innerHTML = a[1] + i.replace(Te, "<$1></$2>") + a[2], l = a[0]; l--;) o = o.lastChild;
        Y.merge(f, o.childNodes), (o = c.firstChild).textContent = ""
      } else f.push(t.createTextNode(i));
      for (c.textContent = "", p = 0; i = f[p++];)
        if ((!r || -1 === Y.inArray(i, r)) && (u = Y.contains(i.ownerDocument, i), o = m(c.appendChild(i), "script"), u && h(o), n))
          for (l = 0; i = o[l++];) Se.test(i.type || "") && n.push(i);
      return c
    },
    cleanData: function(e) {
      for (var t, n, r, i, o, s, a = Y.event.special, u = 0; void 0 !== (n = e[u]); u++) {
        if (Y.acceptData(n) && (o = n[ce.expando]) && (t = ce.cache[o])) {
          if ((r = Object.keys(t.events || {})).length)
            for (s = 0; void 0 !== (i = r[s]); s++) a[i] ? Y.event.remove(n, i) : Y.removeEvent(n, i, t.handle);
          ce.cache[o] && delete ce.cache[o]
        }
        delete fe.cache[n[fe.expando]]
      }
    }
  }), Y.fn.extend({
    text: function(e) {
      return le(this, function(e) {
        return void 0 === e ? Y.text(this) : this.empty().each(function() {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
        })
      }, null, e, arguments.length)
    },
    append: function() {
      return this.domManip(arguments, function(e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          f(this, e).appendChild(e)
        }
      })
    },
    prepend: function() {
      return this.domManip(arguments, function(e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = f(this, e);
          t.insertBefore(e, t.firstChild)
        }
      })
    },
    before: function() {
      return this.domManip(arguments, function(e) {
        this.parentNode && this.parentNode.insertBefore(e, this)
      })
    },
    after: function() {
      return this.domManip(arguments, function(e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
      })
    },
    remove: function(e, t) {
      for (var n, r = e ? Y.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || Y.cleanData(m(n)), n.parentNode && (t && Y.contains(n.ownerDocument, n) && h(m(n, "script")), n.parentNode.removeChild(n));
      return this
    },
    empty: function() {
      for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (Y.cleanData(m(e, !1)), e.textContent = "");
      return this
    },
    clone: function(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function() {
        return Y.clone(this, e, t)
      })
    },
    html: function(e) {
      return le(this, function(e) {
        var t = this[0] || {},
          n = 0,
          r = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
        if ("string" == typeof e && !ke.test(e) && !Ae[(Ce.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = e.replace(Te, "<$1></$2>");
          try {
            for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (Y.cleanData(m(t, !1)), t.innerHTML = e);
            t = 0
          } catch (e) {}
        }
        t && this.empty().append(e)
      }, null, e, arguments.length)
    },
    replaceWith: function() {
      var e = arguments[0];
      return this.domManip(arguments, function(t) {
        e = this.parentNode, Y.cleanData(m(this)), e && e.replaceChild(t, this)
      }), e && (e.length || e.nodeType) ? this : this.remove()
    },
    detach: function(e) {
      return this.remove(e, !0)
    },
    domManip: function(e, t) {
      e = _.apply([], e);
      var n, r, i, o, s, a, u = 0,
        l = this.length,
        c = this,
        f = l - 1,
        h = e[0],
        g = Y.isFunction(h);
      if (g || l > 1 && "string" == typeof h && !U.checkClone && Ee.test(h)) return this.each(function(n) {
        var r = c.eq(n);
        g && (e[0] = h.call(this, n, r.html())), r.domManip(e, t)
      });
      if (l && (n = Y.buildFragment(e, this[0].ownerDocument, !1, this), r = n.firstChild, 1 === n.childNodes.length && (n = r), r)) {
        for (o = (i = Y.map(m(n, "script"), p)).length; u < l; u++) s = n, u !== f && (s = Y.clone(s, !0, !0), o && Y.merge(i, m(s, "script"))), t.call(this[u], s, u);
        if (o)
          for (a = i[i.length - 1].ownerDocument, Y.map(i, d), u = 0; u < o; u++) s = i[u], Se.test(s.type || "") && !ce.access(s, "globalEval") && Y.contains(a, s) && (s.src ? Y._evalUrl && Y._evalUrl(s.src) : Y.globalEval(s.textContent.replace(je, "")))
      }
      return this
    }
  }), Y.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function(e, t) {
    Y.fn[e] = function(e) {
      for (var n, r = [], i = Y(e), o = i.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(!0), Y(i[s])[t](n), W.apply(r, n.get());
      return this.pushStack(r)
    }
  });
  var Le, qe = {},
    He = /^margin/,
    Oe = new RegExp("^(" + he + ")(?!px)[a-z%]+$", "i"),
    Fe = function(e) {
      return e.ownerDocument.defaultView.getComputedStyle(e, null)
    };
  ! function() {
    function t() {
      s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%", i.appendChild(o);
      var t = e.getComputedStyle(s, null);
      n = "1%" !== t.top, r = "4px" === t.width, i.removeChild(o)
    }
    var n, r, i = V.documentElement,
      o = V.createElement("div"),
      s = V.createElement("div");
    s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", U.clearCloneStyle = "content-box" === s.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", o.appendChild(s), e.getComputedStyle && Y.extend(U, {
      pixelPosition: function() {
        return t(), n
      },
      boxSizingReliable: function() {
        return null == r && t(), r
      },
      reliableMarginRight: function() {
        var t, n = s.appendChild(V.createElement("div"));
        return n.style.cssText = s.style.cssText = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box", n.style.marginRight = n.style.width = "0", s.style.width = "1px", i.appendChild(o), t = !parseFloat(e.getComputedStyle(n, null).marginRight), i.removeChild(o), s.innerHTML = "", t
      }
    })
  }(), Y.swap = function(e, t, n, r) {
    var i, o, s = {};
    for (o in t) s[o] = e.style[o], e.style[o] = t[o];
    i = n.apply(e, r || []);
    for (o in t) e.style[o] = s[o];
    return i
  };
  var Pe = /^(none|table(?!-c[ea]).+)/,
    Me = new RegExp("^(" + he + ")(.*)$", "i"),
    Re = new RegExp("^([+-])=(" + he + ")", "i"),
    _e = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
    We = {
      letterSpacing: 0,
      fontWeight: 400
    },
    $e = ["Webkit", "O", "Moz", "ms"];
  Y.extend({
    cssHooks: {
      opacity: {
        get: function(e, t) {
          if (t) {
            var n = b(e, "opacity");
            return "" === n ? "1" : n
          }
        }
      }
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {
      float: "cssFloat"
    },
    style: function(e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i, o, s, a = Y.camelCase(t),
          u = e.style;
        if (t = Y.cssProps[a] || (Y.cssProps[a] = T(u, a)), s = Y.cssHooks[t] || Y.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : u[t];
        "string" === (o = void 0 === n ? "undefined" : _typeof(n)) && (i = Re.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(Y.css(e, t)), o = "number"), null != n && n == n && ("number" !== o || Y.cssNumber[a] || (n += "px"), U.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (u[t] = "", u[t] = n))
      }
    },
    css: function(e, t, n, r) {
      var i, o, s, a = Y.camelCase(t);
      return t = Y.cssProps[a] || (Y.cssProps[a] = T(e.style, a)), (s = Y.cssHooks[t] || Y.cssHooks[a]) && "get" in s && (i = s.get(e, !0, n)), void 0 === i && (i = b(e, t, r)), "normal" === i && t in We && (i = We[t]), "" === n || n ? (o = parseFloat(i), !0 === n || Y.isNumeric(o) ? o || 0 : i) : i
    }
  }), Y.each(["height", "width"], function(e, t) {
    Y.cssHooks[t] = {
      get: function(e, n, r) {
        if (n) return 0 === e.offsetWidth && Pe.test(Y.css(e, "display")) ? Y.swap(e, _e, function() {
          return k(e, t, r)
        }) : k(e, t, r)
      },
      set: function(e, n, r) {
        var i = r && Fe(e);
        return C(0, n, r ? N(e, t, r, "border-box" === Y.css(e, "boxSizing", !1, i), i) : 0)
      }
    }
  }), Y.cssHooks.marginRight = w(U.reliableMarginRight, function(e, t) {
    if (t) return Y.swap(e, {
      display: "inline-block"
    }, b, [e, "marginRight"])
  }), Y.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function(e, t) {
    Y.cssHooks[e + t] = {
      expand: function(n) {
        for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + ge[r] + t] = o[r] || o[r - 2] || o[0];
        return i
      }
    }, He.test(e) || (Y.cssHooks[e + t].set = C)
  }), Y.fn.extend({
    css: function(e, t) {
      return le(this, function(e, t, n) {
        var r, i, o = {},
          s = 0;
        if (Y.isArray(t)) {
          for (r = Fe(e), i = t.length; s < i; s++) o[t[s]] = Y.css(e, t[s], !1, r);
          return o
        }
        return void 0 !== n ? Y.style(e, t, n) : Y.css(e, t)
      }, e, t, arguments.length > 1)
    },
    show: function() {
      return E(this, !0)
    },
    hide: function() {
      return E(this)
    },
    toggle: function(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
        me(this) ? Y(this).show() : Y(this).hide()
      })
    }
  }), Y.Tween = S, (S.prototype = {
    constructor: S,
    init: function(e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (Y.cssNumber[n] ? "" : "px")
    },
    cur: function() {
      var e = S.propHooks[this.prop];
      return e && e.get ? e.get(this) : S.propHooks._default.get(this)
    },
    run: function(e) {
      var t, n = S.propHooks[this.prop];
      return this.options.duration ? this.pos = t = Y.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : S.propHooks._default.set(this), this
    }
  }).init.prototype = S.prototype, (S.propHooks = {
    _default: {
      get: function(e) {
        var t;
        return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = Y.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 : e.elem[e.prop]
      },
      set: function(e) {
        Y.fx.step[e.prop] ? Y.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[Y.cssProps[e.prop]] || Y.cssHooks[e.prop]) ? Y.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
      }
    }
  }).scrollTop = S.propHooks.scrollLeft = {
    set: function(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
    }
  }, Y.easing = {
    linear: function(e) {
      return e
    },
    swing: function(e) {
      return .5 - Math.cos(e * Math.PI) / 2
    }
  }, Y.fx = S.prototype.init, Y.fx.step = {};
  var Be, Ie, Xe = /^(?:toggle|show|hide)$/,
    ze = new RegExp("^(?:([+-])=|)(" + he + ")([a-z%]*)$", "i"),
    Ue = /queueHooks$/,
    Ve = [function(e, t, n) {
      var r, i, o, s, a, u, l, c = this,
        f = {},
        p = e.style,
        d = e.nodeType && me(e),
        h = ce.get(e, "fxshow");
      n.queue || (null == (a = Y._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function() {
        a.unqueued || u()
      }), a.unqueued++, c.always(function() {
        c.always(function() {
          a.unqueued--, Y.queue(e, "fx").length || a.empty.fire()
        })
      })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "none" === (l = Y.css(e, "display")) && (l = x(e.nodeName)), "inline" === l && "none" === Y.css(e, "float") && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", c.always(function() {
        p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
      }));
      for (r in t)
        if (i = t[r], Xe.exec(i)) {
          if (delete t[r], o = o || "toggle" === i, i === (d ? "hide" : "show")) {
            if ("show" !== i || !h || void 0 === h[r]) continue;
            d = !0
          }
          f[r] = h && h[r] || Y.style(e, r)
        } if (!Y.isEmptyObject(f)) {
        h ? "hidden" in h && (d = h.hidden) : h = ce.access(e, "fxshow", {}), o && (h.hidden = !d), d ? Y(e).show() : c.done(function() {
          Y(e).hide()
        }), c.done(function() {
          var t;
          ce.remove(e, "fxshow");
          for (t in f) Y.style(e, t, f[t])
        });
        for (r in f) s = A(d ? h[r] : 0, r, c), r in h || (h[r] = s.start, d && (s.end = s.start, s.start = "width" === r || "height" === r ? 1 : 0))
      }
    }],
    Ye = {
      "*": [function(e, t) {
        var n = this.createTween(e, t),
          r = n.cur(),
          i = ze.exec(t),
          o = i && i[3] || (Y.cssNumber[e] ? "" : "px"),
          s = (Y.cssNumber[e] || "px" !== o && +r) && ze.exec(Y.css(n.elem, e)),
          a = 1,
          u = 20;
        if (s && s[3] !== o) {
          o = o || s[3], i = i || [], s = +r || 1;
          do {
            s /= a = a || ".5", Y.style(n.elem, e, s + o)
          } while (a !== (a = n.cur() / r) && 1 !== a && --u)
        }
        return i && (s = n.start = +s || +r || 0, n.unit = o, n.end = i[1] ? s + (i[1] + 1) * i[2] : +i[2]), n
      }]
    };
  Y.Animation = Y.extend(L, {
      tweener: function(e, t) {
        Y.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
        for (var n, r = 0, i = e.length; r < i; r++) n = e[r], Ye[n] = Ye[n] || [], Ye[n].unshift(t)
      },
      prefilter: function(e, t) {
        t ? Ve.unshift(e) : Ve.push(e)
      }
    }), Y.speed = function(e, t, n) {
      var r = e && "object" === (void 0 === e ? "undefined" : _typeof(e)) ? Y.extend({}, e) : {
        complete: n || !n && t || Y.isFunction(e) && e,
        duration: e,
        easing: n && t || t && !Y.isFunction(t) && t
      };
      return r.duration = Y.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in Y.fx.speeds ? Y.fx.speeds[r.duration] : Y.fx.speeds._default, null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
        Y.isFunction(r.old) && r.old.call(this), r.queue && Y.dequeue(this, r.queue)
      }, r
    }, Y.fn.extend({
      fadeTo: function(e, t, n, r) {
        return this.filter(me).css("opacity", 0).show().end().animate({
          opacity: t
        }, e, n, r)
      },
      animate: function(e, t, n, r) {
        var i = Y.isEmptyObject(e),
          o = Y.speed(t, n, r),
          s = function() {
            var t = L(this, Y.extend({}, e), o);
            (i || ce.get(this, "finish")) && t.stop(!0)
          };
        return s.finish = s, i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
      },
      stop: function(e, t, n) {
        var r = function(e) {
          var t = e.stop;
          delete e.stop, t(n)
        };
        return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
          var t = !0,
            i = null != e && e + "queueHooks",
            o = Y.timers,
            s = ce.get(this);
          if (i) s[i] && s[i].stop && r(s[i]);
          else
            for (i in s) s[i] && s[i].stop && Ue.test(i) && r(s[i]);
          for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
          !t && n || Y.dequeue(this, e)
        })
      },
      finish: function(e) {
        return !1 !== e && (e = e || "fx"), this.each(function() {
          var t, n = ce.get(this),
            r = n[e + "queue"],
            i = n[e + "queueHooks"],
            o = Y.timers,
            s = r ? r.length : 0;
          for (n.finish = !0, Y.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
          for (t = 0; t < s; t++) r[t] && r[t].finish && r[t].finish.call(this);
          delete n.finish
        })
      }
    }), Y.each(["toggle", "show", "hide"], function(e, t) {
      var n = Y.fn[t];
      Y.fn[t] = function(e, r, i) {
        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(j(t, !0), e, r, i)
      }
    }), Y.each({
      slideDown: j("show"),
      slideUp: j("hide"),
      slideToggle: j("toggle"),
      fadeIn: {
        opacity: "show"
      },
      fadeOut: {
        opacity: "hide"
      },
      fadeToggle: {
        opacity: "toggle"
      }
    }, function(e, t) {
      Y.fn[e] = function(e, n, r) {
        return this.animate(t, e, n, r)
      }
    }), Y.timers = [], Y.fx.tick = function() {
      var e, t = 0,
        n = Y.timers;
      for (Be = Y.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || Y.fx.stop(), Be = void 0
    }, Y.fx.timer = function(e) {
      Y.timers.push(e), e() ? Y.fx.start() : Y.timers.pop()
    }, Y.fx.interval = 13, Y.fx.start = function() {
      Ie || (Ie = setInterval(Y.fx.tick, Y.fx.interval))
    }, Y.fx.stop = function() {
      clearInterval(Ie), Ie = null
    }, Y.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }, Y.fn.delay = function(e, t) {
      return e = Y.fx ? Y.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
        var r = setTimeout(t, e);
        n.stop = function() {
          clearTimeout(r)
        }
      })
    },
    function() {
      var e = V.createElement("input"),
        t = V.createElement("select"),
        n = t.appendChild(V.createElement("option"));
      e.type = "checkbox", U.checkOn = "" !== e.value, U.optSelected = n.selected, t.disabled = !0, U.optDisabled = !n.disabled, (e = V.createElement("input")).value = "t", e.type = "radio", U.radioValue = "t" === e.value
    }();
  var Ge, Qe = Y.expr.attrHandle;
  Y.fn.extend({
    attr: function(e, t) {
      return le(this, Y.attr, e, t, arguments.length > 1)
    },
    removeAttr: function(e) {
      return this.each(function() {
        Y.removeAttr(this, e)
      })
    }
  }), Y.extend({
    attr: function(e, t, n) {
      var r, i, o = e.nodeType;
      if (e && 3 !== o && 8 !== o && 2 !== o) return "undefined" === _typeof(e.getAttribute) ? Y.prop(e, t, n) : (1 === o && Y.isXMLDoc(e) || (t = t.toLowerCase(), r = Y.attrHooks[t] || (Y.expr.match.bool.test(t) ? Ge : void 0)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = Y.find.attr(e, t)) ? void 0 : i : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void Y.removeAttr(e, t))
    },
    removeAttr: function(e, t) {
      var n, r, i = 0,
        o = t && t.match(se);
      if (o && 1 === e.nodeType)
        for (; n = o[i++];) r = Y.propFix[n] || n, Y.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
    },
    attrHooks: {
      type: {
        set: function(e, t) {
          if (!U.radioValue && "radio" === t && Y.nodeName(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t
          }
        }
      }
    }
  }), Ge = {
    set: function(e, t, n) {
      return !1 === t ? Y.removeAttr(e, n) : e.setAttribute(n, n), n
    }
  }, Y.each(Y.expr.match.bool.source.match(/\w+/g), function(e, t) {
    var n = Qe[t] || Y.find.attr;
    Qe[t] = function(e, t, r) {
      var i, o;
      return r || (o = Qe[t], Qe[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, Qe[t] = o), i
    }
  });
  var Je = /^(?:input|select|textarea|button)$/i;
  Y.fn.extend({
    prop: function(e, t) {
      return le(this, Y.prop, e, t, arguments.length > 1)
    },
    removeProp: function(e) {
      return this.each(function() {
        delete this[Y.propFix[e] || e]
      })
    }
  }), Y.extend({
    propFix: {
      for: "htmlFor",
      class: "className"
    },
    prop: function(e, t, n) {
      var r, i, o = e.nodeType;
      if (e && 3 !== o && 8 !== o && 2 !== o) return (1 !== o || !Y.isXMLDoc(e)) && (t = Y.propFix[t] || t, i = Y.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
    },
    propHooks: {
      tabIndex: {
        get: function(e) {
          return e.hasAttribute("tabindex") || Je.test(e.nodeName) || e.href ? e.tabIndex : -1
        }
      }
    }
  }), U.optSelected || (Y.propHooks.selected = {
    get: function(e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null
    }
  }), Y.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    Y.propFix[this.toLowerCase()] = this
  });
  var Ke = /[\t\r\n\f]/g;
  Y.fn.extend({
    addClass: function(e) {
      var t, n, r, i, o, s, a = "string" == typeof e && e,
        u = 0,
        l = this.length;
      if (Y.isFunction(e)) return this.each(function(t) {
        Y(this).addClass(e.call(this, t, this.className))
      });
      if (a)
        for (t = (e || "").match(se) || []; u < l; u++)
          if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ke, " ") : " ")) {
            for (o = 0; i = t[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
            s = Y.trim(r), n.className !== s && (n.className = s)
          } return this
    },
    removeClass: function(e) {
      var t, n, r, i, o, s, a = 0 === arguments.length || "string" == typeof e && e,
        u = 0,
        l = this.length;
      if (Y.isFunction(e)) return this.each(function(t) {
        Y(this).removeClass(e.call(this, t, this.className))
      });
      if (a)
        for (t = (e || "").match(se) || []; u < l; u++)
          if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ke, " ") : "")) {
            for (o = 0; i = t[o++];)
              for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
            s = e ? Y.trim(r) : "", n.className !== s && (n.className = s)
          } return this
    },
    toggleClass: function(e, t) {
      var n = void 0 === e ? "undefined" : _typeof(e);
      return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : Y.isFunction(e) ? this.each(function(n) {
        Y(this).toggleClass(e.call(this, n, this.className, t), t)
      }) : this.each(function() {
        if ("string" === n)
          for (var t, r = 0, i = Y(this), o = e.match(se) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
        else "undefined" !== n && "boolean" !== n || (this.className && ce.set(this, "__className__", this.className), this.className = this.className || !1 === e ? "" : ce.get(this, "__className__") || "")
      })
    },
    hasClass: function(e) {
      for (var t = " " + e + " ", n = 0, r = this.length; n < r; n++)
        if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Ke, " ").indexOf(t) >= 0) return !0;
      return !1
    }
  });
  var Ze = /\r/g;
  Y.fn.extend({
    val: function(e) {
      var t, n, r, i = this[0];
      if (arguments.length) return r = Y.isFunction(e), this.each(function(n) {
        var i;
        1 === this.nodeType && (null == (i = r ? e.call(this, n, Y(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Y.isArray(i) && (i = Y.map(i, function(e) {
          return null == e ? "" : e + ""
        })), (t = Y.valHooks[this.type] || Y.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
      });
      if (i) return (t = Y.valHooks[i.type] || Y.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(Ze, "") : null == n ? "" : n
    }
  }), Y.extend({
    valHooks: {
      select: {
        get: function(e) {
          for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || i < 0, s = o ? null : [], a = o ? i + 1 : r.length, u = i < 0 ? a : o ? i : 0; u < a; u++)
            if (((n = r[u]).selected || u === i) && (U.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !Y.nodeName(n.parentNode, "optgroup"))) {
              if (t = Y(n).val(), o) return t;
              s.push(t)
            } return s
        },
        set: function(e, t) {
          for (var n, r, i = e.options, o = Y.makeArray(t), s = i.length; s--;)((r = i[s]).selected = Y.inArray(Y(r).val(), o) >= 0) && (n = !0);
          return n || (e.selectedIndex = -1), o
        }
      }
    }
  }), Y.each(["radio", "checkbox"], function() {
    Y.valHooks[this] = {
      set: function(e, t) {
        if (Y.isArray(t)) return e.checked = Y.inArray(Y(e).val(), t) >= 0
      }
    }, U.checkOn || (Y.valHooks[this].get = function(e) {
      return null === e.getAttribute("value") ? "on" : e.value
    })
  }), Y.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
    Y.fn[t] = function(e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
    }
  }), Y.fn.extend({
    hover: function(e, t) {
      return this.mouseenter(e).mouseleave(t || e)
    },
    bind: function(e, t, n) {
      return this.on(e, null, t, n)
    },
    unbind: function(e, t) {
      return this.off(e, null, t)
    },
    delegate: function(e, t, n, r) {
      return this.on(t, e, n, r)
    },
    undelegate: function(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
    }
  });
  var et = Y.now(),
    tt = /\?/;
  Y.parseJSON = function(e) {
    return JSON.parse(e + "")
  }, Y.parseXML = function(e) {
    var t;
    if (!e || "string" != typeof e) return null;
    try {
      t = (new DOMParser).parseFromString(e, "text/xml")
    } catch (e) {
      t = void 0
    }
    return t && !t.getElementsByTagName("parsererror").length || Y.error("Invalid XML: " + e), t
  };
  var nt, rt, it = /#.*$/,
    ot = /([?&])_=[^&]*/,
    st = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    at = /^(?:GET|HEAD)$/,
    ut = /^\/\//,
    lt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    ct = {},
    ft = {},
    pt = "*/".concat("*");
  try {
    rt = location.href
  } catch (e) {
    (rt = V.createElement("a")).href = "", rt = rt.href
  }
  nt = lt.exec(rt.toLowerCase()) || [], Y.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: rt,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(nt[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": pt,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /xml/,
        html: /html/,
        json: /json/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": Y.parseJSON,
        "text xml": Y.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function(e, t) {
      return t ? O(O(e, Y.ajaxSettings), t) : O(Y.ajaxSettings, e)
    },
    ajaxPrefilter: q(ct),
    ajaxTransport: q(ft),
    ajax: function(e, t) {
      function n(e, t, n, s) {
        var u, c, v, y, b, T = t;
        2 !== x && (x = 2, a && clearTimeout(a), r = void 0, o = s || "", w.readyState = e > 0 ? 4 : 0, u = e >= 200 && e < 300 || 304 === e, n && (y = function(e, t, n) {
          for (var r, i, o, s, a = e.contents, u = e.dataTypes;
            "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
          if (r)
            for (i in a)
              if (a[i] && a[i].test(r)) {
                u.unshift(i);
                break
              } if (u[0] in n) o = u[0];
          else {
            for (i in n) {
              if (!u[0] || e.converters[i + " " + u[0]]) {
                o = i;
                break
              }
              s || (s = i)
            }
            o = o || s
          }
          if (o) return o !== u[0] && u.unshift(o), n[o]
        }(f, w, n)), y = function(e, t, n, r) {
          var i, o, s, a, u, l = {},
            c = e.dataTypes.slice();
          if (c[1])
            for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
          for (o = c.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
              if ("*" === o) o = u;
              else if ("*" !== u && u !== o) {
            if (!(s = l[u + " " + o] || l["* " + o]))
              for (i in l)
                if ((a = i.split(" "))[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                  !0 === s ? s = l[i] : !0 !== l[i] && (o = a[0], c.unshift(a[1]));
                  break
                } if (!0 !== s)
              if (s && e.throws) t = s(t);
              else try {
                t = s(t)
              } catch (e) {
                return {
                  state: "parsererror",
                  error: s ? e : "No conversion from " + u + " to " + o
                }
              }
          }
          return {
            state: "success",
            data: t
          }
        }(f, y, w, u), u ? (f.ifModified && ((b = w.getResponseHeader("Last-Modified")) && (Y.lastModified[i] = b), (b = w.getResponseHeader("etag")) && (Y.etag[i] = b)), 204 === e || "HEAD" === f.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = y.state, c = y.data, u = !(v = y.error))) : (v = T, !e && T || (T = "error", e < 0 && (e = 0))), w.status = e, w.statusText = (t || T) + "", u ? h.resolveWith(p, [c, T, w]) : h.rejectWith(p, [w, T, v]), w.statusCode(m), m = void 0, l && d.trigger(u ? "ajaxSuccess" : "ajaxError", [w, f, u ? c : v]), g.fireWith(p, [w, T]), l && (d.trigger("ajaxComplete", [w, f]), --Y.active || Y.event.trigger("ajaxStop")))
      }
      "object" === (void 0 === e ? "undefined" : _typeof(e)) && (t = e, e = void 0), t = t || {};
      var r, i, o, s, a, u, l, c, f = Y.ajaxSetup({}, t),
        p = f.context || f,
        d = f.context && (p.nodeType || p.jquery) ? Y(p) : Y.event,
        h = Y.Deferred(),
        g = Y.Callbacks("once memory"),
        m = f.statusCode || {},
        v = {},
        y = {},
        x = 0,
        b = "canceled",
        w = {
          readyState: 0,
          getResponseHeader: function(e) {
            var t;
            if (2 === x) {
              if (!s)
                for (s = {}; t = st.exec(o);) s[t[1].toLowerCase()] = t[2];
              t = s[e.toLowerCase()]
            }
            return null == t ? null : t
          },
          getAllResponseHeaders: function() {
            return 2 === x ? o : null
          },
          setRequestHeader: function(e, t) {
            var n = e.toLowerCase();
            return x || (e = y[n] = y[n] || e, v[e] = t), this
          },
          overrideMimeType: function(e) {
            return x || (f.mimeType = e), this
          },
          statusCode: function(e) {
            var t;
            if (e)
              if (x < 2)
                for (t in e) m[t] = [m[t], e[t]];
              else w.always(e[w.status]);
            return this
          },
          abort: function(e) {
            var t = e || b;
            return r && r.abort(t), n(0, t), this
          }
        };
      if (h.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, f.url = ((e || f.url || rt) + "").replace(it, "").replace(ut, nt[1] + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = Y.trim(f.dataType || "*").toLowerCase().match(se) || [""], null == f.crossDomain && (u = lt.exec(f.url.toLowerCase()), f.crossDomain = !(!u || u[1] === nt[1] && u[2] === nt[2] && (u[3] || ("http:" === u[1] ? "80" : "443")) === (nt[3] || ("http:" === nt[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = Y.param(f.data, f.traditional)), H(ct, f, t, w), 2 === x) return w;
      (l = f.global) && 0 == Y.active++ && Y.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !at.test(f.type), i = f.url, f.hasContent || (f.data && (i = f.url += (tt.test(i) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (f.url = ot.test(i) ? i.replace(ot, "$1_=" + et++) : i + (tt.test(i) ? "&" : "?") + "_=" + et++)), f.ifModified && (Y.lastModified[i] && w.setRequestHeader("If-Modified-Since", Y.lastModified[i]), Y.etag[i] && w.setRequestHeader("If-None-Match", Y.etag[i])), (f.data && f.hasContent && !1 !== f.contentType || t.contentType) && w.setRequestHeader("Content-Type", f.contentType), w.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + pt + "; q=0.01" : "") : f.accepts["*"]);
      for (c in f.headers) w.setRequestHeader(c, f.headers[c]);
      if (f.beforeSend && (!1 === f.beforeSend.call(p, w, f) || 2 === x)) return w.abort();
      b = "abort";
      for (c in {
          success: 1,
          error: 1,
          complete: 1
        }) w[c](f[c]);
      if (r = H(ft, f, t, w)) {
        w.readyState = 1, l && d.trigger("ajaxSend", [w, f]), f.async && f.timeout > 0 && (a = setTimeout(function() {
          w.abort("timeout")
        }, f.timeout));
        try {
          x = 1, r.send(v, n)
        } catch (e) {
          if (!(x < 2)) throw e;
          n(-1, e)
        }
      } else n(-1, "No Transport");
      return w
    },
    getJSON: function(e, t, n) {
      return Y.get(e, t, n, "json")
    },
    getScript: function(e, t) {
      return Y.get(e, void 0, t, "script")
    }
  }), Y.each(["get", "post"], function(e, t) {
    Y[t] = function(e, n, r, i) {
      return Y.isFunction(n) && (i = i || r, r = n, n = void 0), Y.ajax({
        url: e,
        type: t,
        dataType: i,
        data: n,
        success: r
      })
    }
  }), Y.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
    Y.fn[t] = function(e) {
      return this.on(t, e)
    }
  }), Y._evalUrl = function(e) {
    return Y.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      async: !1,
      global: !1,
      throws: !0
    })
  }, Y.fn.extend({
    wrapAll: function(e) {
      var t;
      return Y.isFunction(e) ? this.each(function(t) {
        Y(this).wrapAll(e.call(this, t))
      }) : (this[0] && (t = Y(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
        for (var e = this; e.firstElementChild;) e = e.firstElementChild;
        return e
      }).append(this)), this)
    },
    wrapInner: function(e) {
      return Y.isFunction(e) ? this.each(function(t) {
        Y(this).wrapInner(e.call(this, t))
      }) : this.each(function() {
        var t = Y(this),
          n = t.contents();
        n.length ? n.wrapAll(e) : t.append(e)
      })
    },
    wrap: function(e) {
      var t = Y.isFunction(e);
      return this.each(function(n) {
        Y(this).wrapAll(t ? e.call(this, n) : e)
      })
    },
    unwrap: function() {
      return this.parent().each(function() {
        Y.nodeName(this, "body") || Y(this).replaceWith(this.childNodes)
      }).end()
    }
  }), Y.expr.filters.hidden = function(e) {
    return e.offsetWidth <= 0 && e.offsetHeight <= 0
  }, Y.expr.filters.visible = function(e) {
    return !Y.expr.filters.hidden(e)
  };
  var dt = /%20/g,
    ht = /\[\]$/,
    gt = /\r?\n/g,
    mt = /^(?:submit|button|image|reset|file)$/i,
    vt = /^(?:input|select|textarea|keygen)/i;
  Y.param = function(e, t) {
    var n, r = [],
      i = function(e, t) {
        t = Y.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
      };
    if (void 0 === t && (t = Y.ajaxSettings && Y.ajaxSettings.traditional), Y.isArray(e) || e.jquery && !Y.isPlainObject(e)) Y.each(e, function() {
      i(this.name, this.value)
    });
    else
      for (n in e) F(n, e[n], t, i);
    return r.join("&").replace(dt, "+")
  }, Y.fn.extend({
    serialize: function() {
      return Y.param(this.serializeArray())
    },
    serializeArray: function() {
      return this.map(function() {
        var e = Y.prop(this, "elements");
        return e ? Y.makeArray(e) : this
      }).filter(function() {
        var e = this.type;
        return this.name && !Y(this).is(":disabled") && vt.test(this.nodeName) && !mt.test(e) && (this.checked || !ve.test(e))
      }).map(function(e, t) {
        var n = Y(this).val();
        return null == n ? null : Y.isArray(n) ? Y.map(n, function(e) {
          return {
            name: t.name,
            value: e.replace(gt, "\r\n")
          }
        }) : {
          name: t.name,
          value: n.replace(gt, "\r\n")
        }
      }).get()
    }
  }), Y.ajaxSettings.xhr = function() {
    try {
      return new XMLHttpRequest
    } catch (e) {}
  };
  var yt = 0,
    xt = {},
    bt = {
      0: 200,
      1223: 204
    },
    wt = Y.ajaxSettings.xhr();
  e.ActiveXObject && Y(e).on("unload", function() {
    for (var e in xt) xt[e]()
  }), U.cors = !!wt && "withCredentials" in wt, U.ajax = wt = !!wt, Y.ajaxTransport(function(e) {
    var t;
    if (U.cors || wt && !e.crossDomain) return {
      send: function(n, r) {
        var i, o = e.xhr(),
          s = ++yt;
        if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
          for (i in e.xhrFields) o[i] = e.xhrFields[i];
        e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
        for (i in n) o.setRequestHeader(i, n[i]);
        t = function(e) {
          return function() {
            t && (delete xt[s], t = o.onload = o.onerror = null, "abort" === e ? o.abort() : "error" === e ? r(o.status, o.statusText) : r(bt[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {
              text: o.responseText
            } : void 0, o.getAllResponseHeaders()))
          }
        }, o.onload = t(), o.onerror = t("error"), t = xt[s] = t("abort"), o.send(e.hasContent && e.data || null)
      },
      abort: function() {
        t && t()
      }
    }
  }), Y.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /(?:java|ecma)script/
    },
    converters: {
      "text script": function(e) {
        return Y.globalEval(e), e
      }
    }
  }), Y.ajaxPrefilter("script", function(e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
  }), Y.ajaxTransport("script", function(e) {
    if (e.crossDomain) {
      var t, n;
      return {
        send: function(r, i) {
          t = Y("<script>").prop({
            async: !0,
            charset: e.scriptCharset,
            src: e.url
          }).on("load error", n = function(e) {
            t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
          }), V.head.appendChild(t[0])
        },
        abort: function() {
          n && n()
        }
      }
    }
  });
  var Tt = [],
    Ct = /(=)\?(?=&|$)|\?\?/;
  Y.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
      var e = Tt.pop() || Y.expando + "_" + et++;
      return this[e] = !0, e
    }
  }), Y.ajaxPrefilter("json jsonp", function(t, n, r) {
    var i, o, s, a = !1 !== t.jsonp && (Ct.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ct.test(t.data) && "data");
    if (a || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = Y.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Ct, "$1" + i) : !1 !== t.jsonp && (t.url += (tt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
      return s || Y.error(i + " was not called"), s[0]
    }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
      s = arguments
    }, r.always(function() {
      e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Tt.push(i)), s && Y.isFunction(o) && o(s[0]), s = o = void 0
    }), "script"
  }), Y.parseHTML = function(e, t, n) {
    if (!e || "string" != typeof e) return null;
    "boolean" == typeof t && (n = t, t = !1), t = t || V;
    var r = ee.exec(e),
      i = !n && [];
    return r ? [t.createElement(r[1])] : (r = Y.buildFragment([e], t, i), i && i.length && Y(i).remove(), Y.merge([], r.childNodes))
  };
  var Nt = Y.fn.load;
  Y.fn.load = function(e, t, n) {
    if ("string" != typeof e && Nt) return Nt.apply(this, arguments);
    var r, i, o, s = this,
      a = e.indexOf(" ");
    return a >= 0 && (r = e.slice(a), e = e.slice(0, a)), Y.isFunction(t) ? (n = t, t = void 0) : t && "object" === (void 0 === t ? "undefined" : _typeof(t)) && (i = "POST"), s.length > 0 && Y.ajax({
      url: e,
      type: i,
      dataType: "html",
      data: t
    }).done(function(e) {
      o = arguments, s.html(r ? Y("<div>").append(Y.parseHTML(e)).find(r) : e)
    }).complete(n && function(e, t) {
      s.each(n, o || [e.responseText, t, e])
    }), this
  }, Y.expr.filters.animated = function(e) {
    return Y.grep(Y.timers, function(t) {
      return e === t.elem
    }).length
  };
  var kt = e.document.documentElement;
  Y.offset = {
    setOffset: function(e, t, n) {
      var r, i, o, s, a, u, l = Y.css(e, "position"),
        c = Y(e),
        f = {};
      "static" === l && (e.style.position = "relative"), a = c.offset(), o = Y.css(e, "top"), u = Y.css(e, "left"), ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1 ? (s = (r = c.position()).top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(u) || 0), Y.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
    }
  }, Y.fn.extend({
    offset: function(e) {
      if (arguments.length) return void 0 === e ? this : this.each(function(t) {
        Y.offset.setOffset(this, e, t)
      });
      var t, n, r = this[0],
        i = {
          top: 0,
          left: 0
        },
        o = r && r.ownerDocument;
      if (o) return t = o.documentElement, Y.contains(t, r) ? ("undefined" !== _typeof(r.getBoundingClientRect) && (i = r.getBoundingClientRect()), n = P(o), {
        top: i.top + n.pageYOffset - t.clientTop,
        left: i.left + n.pageXOffset - t.clientLeft
      }) : i
    },
    position: function() {
      if (this[0]) {
        var e, t, n = this[0],
          r = {
            top: 0,
            left: 0
          };
        return "fixed" === Y.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), Y.nodeName(e[0], "html") || (r = e.offset()), r.top += Y.css(e[0], "borderTopWidth", !0), r.left += Y.css(e[0], "borderLeftWidth", !0)), {
          top: t.top - r.top - Y.css(n, "marginTop", !0),
          left: t.left - r.left - Y.css(n, "marginLeft", !0)
        }
      }
    },
    offsetParent: function() {
      return this.map(function() {
        for (var e = this.offsetParent || kt; e && !Y.nodeName(e, "html") && "static" === Y.css(e, "position");) e = e.offsetParent;
        return e || kt
      })
    }
  }), Y.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function(t, n) {
    var r = "pageYOffset" === n;
    Y.fn[t] = function(i) {
      return le(this, function(t, i, o) {
        var s = P(t);
        if (void 0 === o) return s ? s[n] : t[i];
        s ? s.scrollTo(r ? e.pageXOffset : o, r ? o : e.pageYOffset) : t[i] = o
      }, t, i, arguments.length, null)
    }
  }), Y.each(["top", "left"], function(e, t) {
    Y.cssHooks[t] = w(U.pixelPosition, function(e, n) {
      if (n) return n = b(e, t), Oe.test(n) ? Y(e).position()[t] + "px" : n
    })
  }), Y.each({
    Height: "height",
    Width: "width"
  }, function(e, t) {
    Y.each({
      padding: "inner" + e,
      content: t,
      "": "outer" + e
    }, function(n, r) {
      Y.fn[r] = function(r, i) {
        var o = arguments.length && (n || "boolean" != typeof r),
          s = n || (!0 === r || !0 === i ? "margin" : "border");
        return le(this, function(t, n, r) {
          var i;
          return Y.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? Y.css(t, n, s) : Y.style(t, n, r, s)
        }, t, o ? r : void 0, o, null)
      }
    })
  }), Y.fn.size = function() {
    return this.length
  }, Y.fn.andSelf = Y.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
    return Y
  });
  var Et = e.jQuery,
    St = e.$;
  return Y.noConflict = function(t) {
    return e.$ === Y && (e.$ = St), t && e.jQuery === Y && (e.jQuery = Et), Y
  }, "undefined" === (void 0 === t ? "undefined" : _typeof(t)) && (e.jQuery = e.$ = Y), Y
}); < /script>

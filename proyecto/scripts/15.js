< script type = "text/javascript" >
  var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
    return typeof n
  } : function(n) {
    return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
  };
! function(n, t) {
  function r(r, g, h) {
    var b = [],
      v = u(e((g = 1 == g ? {
        entropy: !0
      } : g || {}).entropy ? [r, i(n)] : null == r ? function() {
        try {
          if (f) return i(f.randomBytes(a));
          var t = new Uint8Array(a);
          return (c.crypto || c.msCrypto).getRandomValues(t), i(t)
        } catch (t) {
          var r = c.navigator,
            o = r && r.plugins;
          return [+new Date, c, o, c.screen, i(n)]
        }
      }() : r, 3), b),
      S = new function(n) {
        var t, r = n.length,
          o = this,
          e = 0,
          u = o.i = o.j = 0,
          i = o.S = [];
        r || (n = [r++]);
        for (; e < a;) i[e] = e++;
        for (e = 0; e < a; e++) i[e] = i[u = m & u + n[e % r] + (t = i[e])], i[u] = t;
        (o.g = function(n) {
          for (var t, r = 0, e = o.i, u = o.j, i = o.S; n--;) t = i[e = m & e + 1], r = r * a + i[m & (i[e] = i[u = m & u + t]) + (i[u] = t)];
          return o.i = e, o.j = u, r
        })(a)
      }(b),
      j = function() {
        for (var n = S.g(y), t = p, r = 0; n < d;) n = (n + r) * a, t *= a, r = S.g(1);
        for (; n >= s;) n /= 2, t /= 2, r >>>= 1;
        return (n + r) / t
      };
    return j.int32 = function() {
      return 0 | S.g(4)
    }, j.quick = function() {
      return S.g(4) / 4294967296
    }, j.double = j, u(i(S.S), n), (g.pass || h || function(n, r, e, u) {
      return u && (u.S && o(u, S), n.state = function() {
        return o(S, {})
      }), e ? (t[l] = n, r) : n
    })(j, v, "global" in g ? g.global : this == t, g.state)
  }

  function o(n, t) {
    return t.i = n.i, t.j = n.j, t.S = n.S.slice(), t
  }

  function e(n, t) {
    var r, o = [],
      u = void 0 === n ? "undefined" : _typeof(n);
    if (t && "object" == u)
      for (r in n) try {
        o.push(e(n[r], t - 1))
      } catch (n) {}
    return o.length ? o : "string" == u ? n : n + "\0"
  }

  function u(n, t) {
    for (var r, o = n + "", e = 0; e < o.length;) t[m & e] = m & (r ^= 19 * t[m & e]) + o.charCodeAt(e++);
    return i(t)
  }

  function i(n) {
    return String.fromCharCode.apply(0, n)
  }
  var f, c = this,
    a = 256,
    y = 6,
    l = "random",
    p = t.pow(a, y),
    d = t.pow(2, 52),
    s = 2 * d,
    m = a - 1;
  if (t["seed" + l] = r, u(t.random(), n), "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports) {
    module.exports = r;
    try {
      f = require("crypto")
    } catch (n) {}
  } else "function" == typeof define && define.amd && define(function() {
    return r
  })
}([], Math); < /script>

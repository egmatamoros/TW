< script type = "text/javascript" > ! function() {
  "use strict";

  function r(r) {
    var t = r.length;
    if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    return "=" === r[t - 2] ? 2 : "=" === r[t - 1] ? 1 : 0
  }

  function t(r) {
    return e[r >> 18 & 63] + e[r >> 12 & 63] + e[r >> 6 & 63] + e[63 & r]
  }

  function n(r, n, e) {
    for (var o, a = [], h = n; h < e; h += 3) o = (r[h] << 16) + (r[h + 1] << 8) + r[h + 2], a.push(t(o));
    return a.join("")
  }
  window.byteLength = function(t) {
    return 3 * t.length / 4 - r(t)
  }, window.toByteArray = function(t) {
    var n, e, h, c, i, u, d = t.length;
    i = r(t), u = new a(3 * d / 4 - i), h = i > 0 ? d - 4 : d;
    var A = 0;
    for (n = 0, e = 0; n < h; n += 4, e += 3) c = o[t.charCodeAt(n)] << 18 | o[t.charCodeAt(n + 1)] << 12 | o[t.charCodeAt(n + 2)] << 6 | o[t.charCodeAt(n + 3)], u[A++] = c >> 16 & 255, u[A++] = c >> 8 & 255, u[A++] = 255 & c;
    return 2 === i ? (c = o[t.charCodeAt(n)] << 2 | o[t.charCodeAt(n + 1)] >> 4, u[A++] = 255 & c) : 1 === i && (c = o[t.charCodeAt(n)] << 10 | o[t.charCodeAt(n + 1)] << 4 | o[t.charCodeAt(n + 2)] >> 2, u[A++] = c >> 8 & 255, u[A++] = 255 & c), u
  }, window.fromByteArray = function(r) {
    for (var t, o = r.length, a = o % 3, h = "", c = [], i = 0, u = o - a; i < u; i += 16383) c.push(n(r, i, i + 16383 > u ? u : i + 16383));
    return 1 === a ? (t = r[o - 1], h += e[t >> 2], h += e[t << 4 & 63], h += "==") : 2 === a && (t = (r[o - 2] << 8) + r[o - 1], h += e[t >> 10], h += e[t >> 4 & 63], h += e[t << 2 & 63], h += "="), c.push(h), c.join("")
  };
  for (var e = [], o = [], a = "undefined" != typeof Uint8Array ? Uint8Array : Array, h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", c = 0, i = h.length; c < i; ++c) e[c] = h[c], o[h.charCodeAt(c)] = c;
  o["-".charCodeAt(0)] = 62, o["_".charCodeAt(0)] = 63
}(); < /script>

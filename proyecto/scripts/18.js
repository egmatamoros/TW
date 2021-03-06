< script type = "text/javascript" > function TextEncoderLite() {}

function TextDecoderLite() {}! function() {
  "use strict";

  function e(e, n) {
    n = n || 1 / 0;
    for (var t, r = e.length, i = null, o = [], u = 0; u < r; u++) {
      if ((t = e.charCodeAt(u)) > 55295 && t < 57344) {
        if (!i) {
          if (t > 56319) {
            (n -= 3) > -1 && o.push(239, 191, 189);
            continue
          }
          if (u + 1 === r) {
            (n -= 3) > -1 && o.push(239, 191, 189);
            continue
          }
          i = t;
          continue
        }
        if (t < 56320) {
          (n -= 3) > -1 && o.push(239, 191, 189), i = t;
          continue
        }
        t = i - 55296 << 10 | t - 56320 | 65536, i = null
      } else i && ((n -= 3) > -1 && o.push(239, 191, 189), i = null);
      if (t < 128) {
        if ((n -= 1) < 0) break;
        o.push(t)
      } else if (t < 2048) {
        if ((n -= 2) < 0) break;
        o.push(t >> 6 | 192, 63 & t | 128)
      } else if (t < 65536) {
        if ((n -= 3) < 0) break;
        o.push(t >> 12 | 224, t >> 6 & 63 | 128, 63 & t | 128)
      } else {
        if (!(t < 2097152)) throw new Error("Invalid code point");
        if ((n -= 4) < 0) break;
        o.push(t >> 18 | 240, t >> 12 & 63 | 128, t >> 6 & 63 | 128, 63 & t | 128)
      }
    }
    return o
  }

  function n(e) {
    try {
      return decodeURIComponent(e)
    } catch (e) {
      return String.fromCharCode(65533)
    }
  }
  TextEncoderLite.prototype.encode = function(n) {
    return "undefined" == typeof Uint8Array ? e(n) : new Uint8Array(e(n))
  }, TextDecoderLite.prototype.decode = function(e) {
    return function(e, t, r) {
      var i = "",
        o = "";
      r = Math.min(e.length, r || 1 / 0);
      for (var u = t = t || 0; u < r; u++) e[u] <= 127 ? (i += n(o) + String.fromCharCode(e[u]), o = "") : o += "%" + e[u].toString(16);
      return i + n(o)
    }(e, 0, e.length)
  }
}(); < /script>

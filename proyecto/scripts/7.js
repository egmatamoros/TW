< script type = "text/javascript" >
  var saveAs = saveAs || "undefined" != typeof navigator && navigator.msSaveOrOpenBlob && navigator.msSaveOrOpenBlob.bind(navigator) || function(e) {
    "use strict";
    if ("undefined" == typeof navigator || !/MSIE [1-9]\./.test(navigator.userAgent)) {
      var t = e.document,
        n = function() {
          return e.URL || e.webkitURL || e
        },
        o = t.createElementNS("http://www.w3.org/1999/xhtml", "a"),
        r = !e.externalHost && "download" in o,
        i = e.webkitRequestFileSystem,
        a = e.requestFileSystem || i || e.mozRequestFileSystem,
        u = function(t) {
          (e.setImmediate || e.setTimeout)(function() {
            throw t
          }, 0)
        },
        c = 0,
        s = [],
        d = function() {
          for (var e = s.length; e--;) {
            var t = s[e];
            "string" == typeof t ? n().revokeObjectURL(t) : t.remove()
          }
          s.length = 0
        },
        f = function(e, t, n) {
          for (var o = (t = [].concat(t)).length; o--;) {
            var r = e["on" + t[o]];
            if ("function" == typeof r) try {
              r.call(e, n || e)
            } catch (e) {
              u(e)
            }
          }
        },
        l = function(u, d) {
          var l, v, p, w = this,
            y = u.type,
            m = !1,
            h = function() {
              var e = n().createObjectURL(u);
              return s.push(e), e
            },
            E = function() {
              f(w, "writestart progress write writeend".split(" "))
            },
            g = function() {
              !m && l || (l = h()), v ? v.location.href = l : window.open(l, "_blank"), w.readyState = w.DONE, E()
            },
            O = function(e) {
              return function() {
                if (w.readyState !== w.DONE) return e.apply(this, arguments)
              }
            },
            S = {
              create: !0,
              exclusive: !1
            };
          if (w.readyState = w.INIT, d || (d = "download"), r) return l = h(), o.href = l, o.download = d,
            function(n) {
              var o = t.createEvent("MouseEvents");
              o.initMouseEvent("click", !0, !1, e, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), n.dispatchEvent(o)
            }(o), w.readyState = w.DONE, void E();
          e.chrome && y && "application/octet-stream" !== y && (p = u.slice || u.webkitSlice, u = p.call(u, 0, u.size, "application/octet-stream"), m = !0), i && "download" !== d && (d += ".download"), ("application/octet-stream" === y || i) && (v = e), a ? (c += u.size, a(e.TEMPORARY, c, O(function(e) {
            e.root.getDirectory("saved", S, O(function(e) {
              var t = function() {
                e.getFile(d, S, O(function(e) {
                  e.createWriter(O(function(t) {
                    t.onwriteend = function(t) {
                      v.location.href = e.toURL(), s.push(e), w.readyState = w.DONE, f(w, "writeend", t)
                    }, t.onerror = function() {
                      var e = t.error;
                      e.code !== e.ABORT_ERR && g()
                    }, "writestart progress write abort".split(" ").forEach(function(e) {
                      t["on" + e] = w["on" + e]
                    }), t.write(u), w.abort = function() {
                      t.abort(), w.readyState = w.DONE
                    }, w.readyState = w.WRITING
                  }), g)
                }), g)
              };
              e.getFile(d, {
                create: !1
              }, O(function(e) {
                e.remove(), t()
              }), O(function(e) {
                e.code === e.NOT_FOUND_ERR ? t() : g()
              }))
            }), g)
          }), g)) : g()
        },
        v = l.prototype,
        p = function(e, t) {
          return new l(e, t)
        };
      return v.abort = function() {
        this.readyState = this.DONE, f(this, "abort")
      }, v.readyState = v.INIT = 0, v.WRITING = 1, v.DONE = 2, v.error = v.onwritestart = v.onprogress = v.onwrite = v.onabort = v.onerror = v.onwriteend = null, e.addEventListener("unload", d, !1), p.unload = function() {
        d(), e.removeEventListener("unload", d, !1)
      }, p
    }
  }("undefined" != typeof self && self || "undefined" != typeof window && window || this.content);
"undefined" != typeof module && null !== module ? module.exports = saveAs : "undefined" != typeof define && null !== define && null != define.amd && define([], function() {
  return saveAs
}); < /script>

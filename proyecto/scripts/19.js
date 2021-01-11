< script type = "text/javascript" > ! function() {
  "use strict";
  window.phetio = window.phetio || {};
  var n = "general";
  window.phetio.PhetioIDUtils = {
    append: function(n) {
      for (var e = arguments.length, t = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) t[r - 1] = arguments[r];
      return t.forEach(function(e) {
        n += "." + e
      }), n
    },
    getComponentName: function(n) {
      var e = n.lastIndexOf(".");
      return -1 === e ? n : n.substring(e + 1, n.length)
    },
    getParentID: function(n) {
      var e = n.lastIndexOf(".");
      return -1 === e ? null : n.substring(0, e)
    },
    getDOMElementID: function(n) {
      return "phetioID:" + n
    },
    getGeneralID: function(e) {
      for (var t, r = arguments.length, i = Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) i[o - 1] = arguments[o];
      return (t = phetio.PhetioIDUtils).append.apply(t, [e.CAMEL_CASE_SIMULATION_NAME].concat([n].concat(i)))
    },
    getScreenID: function(n) {
      for (var e = [], t = n.split("."), r = 0; r < t.length; r++) {
        var i = t[r];
        e.push(i);
        var o = i.indexOf("Screen");
        if (o > 0 && o + "Screen".length === i.length) return e.join(".")
      }
      return null
    },
    isDynamicElement: function(n) {
      return n.indexOf("_") >= 0
    },
    SEPARATOR: ".",
    GROUP_SEPARATOR: "_",
    GENERAL_COMPONENT_NAME: n,
    GLOBAL_COMPONENT_NAME: "global"
  }
}(); < /script>

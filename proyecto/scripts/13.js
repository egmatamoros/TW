< script type = "text/javascript" >
  var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
    return typeof o
  } : function(o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o
  };
! function() {
  "use strict";
  window.phet = window.phet || {}, window.phet.preloads = window.phet.preloads || {}, window.phet.preloads.phetCore = window.phet.preloads.phetCore || {}, window.phet.preloads.phetCore.copyWithSortedKeys = function(o) {
    if (Array.isArray(o)) return o.map(window.phet.preloads.phetCore.copyWithSortedKeys);
    if ("object" !== (void 0 === o ? "undefined" : _typeof(o)) || null === o) return o;
    var e = {};
    return Object.keys(o).sort().forEach(function(t) {
      var r = o[t];
      e[t] = window.phet.preloads.phetCore.copyWithSortedKeys(r)
    }), e
  }
}(); < /script>

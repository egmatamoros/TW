< script type = "text/javascript" > ! function() {
  "use strict";
  var e = JSON.parse(phet.chipper.queryParameters.strings || "{}"),
    r = "undefined" != typeof window && phet.chipper.queryParameters.stringTest ? phet.chipper.queryParameters.stringTest : null;
  phet.chipper.strings.get = function(p) {
    if (e[p]) return e[p];
    var t = phet.chipper.strings[phet.chipper.locale];
    return t || (t = phet.chipper.strings[phet.chipper.locale.slice(0, 2)]) || (t = phet.chipper.strings.en), phet.chipper.mapString(t[p], r)
  }
}(); < /script>

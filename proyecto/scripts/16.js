< script type = "text/javascript" > ! function() {
  "use strict";
  var e = window.phet.chipper.queryParameters.gameUpLogging,
    a = function(a) {
      e && console.log(a)
    };
  if (window.phet.chipper.queryParameters.gameUp) {
    a("Enabled Game Up Camera");
    var t = !1,
      n = 0,
      i = function(e) {
        if (-1 !== e.origin.indexOf(".brainpop.com", e.origin.length - ".brainpop.com".length))
          if ("captureImage" === e.data) {
            var n = window.phet.joist.ScreenshotGenerator.generateScreenshot(window.phet.joist.sim, "image/jpeg");
            o(n, e.origin, e.source), a("Sent image")
          } else "GameUpCaptureReady" === e.data && (a("GameUpCaptureReady"), t = !0)
      },
      o = function(e, a, t) {
        e = e.replace("data:image/jpeg;base64,", ""), t.postMessage(e, a)
      };
    window.addEventListener ? window.addEventListener("message", i, !1) : window.attachEvent && window.attachEvent("onmessage", i),
      function e() {
        !t && n < 10 && (parent.postMessage("captureReady", "*"), a("Posted captureReady, number of checks: " + ++n), setTimeout(e, 1e3))
      }()
  }
}(); < /script>

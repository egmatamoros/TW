< script type = "text/javascript" > ! function() {
  "use strict";

  function e() {
    function e(e) {
      document.createElement("img").src = e
    }
    var o = !1;
    window.addEventListener("error", function(e) {
      e && e.target && e.target.src && e.target.src.indexOf && e.target.src.indexOf("google-analytics") >= 0 && (o = !0)
    }, !0);
    var n = !1,
      i = "pingver=3&project=" + encodeURIComponent(phet.chipper.project) + "&brand=" + encodeURIComponent(phet.chipper.brand) + "&version=" + encodeURIComponent(phet.chipper.version) + "&locale=" + encodeURIComponent(phet.chipper.locale) + "&buildTimestamp=" + encodeURIComponent(phet.chipper.buildTimestamp) + "&domain=" + encodeURIComponent(document.domain) + "&href=" + encodeURIComponent(window.location.href) + "&type=html&timestamp=" + encodeURIComponent(Date.now()) + "&loadType=" + encodeURIComponent(t) + "&ref=" + encodeURIComponent(document.referrer);
    e("https://phet.colorado.edu/yotta/immediate.gif?" + i), window.addEventListener("load", function(t) {
        e("https://phet.colorado.edu/yotta/sanity.gif?" + i + "&gaError=" + encodeURIComponent(o) + "&gaLoaded=" + encodeURIComponent(n))
      }, !1),
      function(e, o, n, t, i, a, c) {
        e.GoogleAnalyticsObject = i, e[i] = e[i] || function() {
          (e[i].q = e[i].q || []).push(arguments)
        }, e[i].l = 1 * new Date, a = o.createElement(n), c = o.getElementsByTagName(n)[0], a.async = 1, a.src = t, c.parentNode.insertBefore(a, c)
      }(window, document, "script", ("https:" === document.location.protocol ? "https:" : "http:") + "//www.google-analytics.com/analytics.js", "googleAnalytics");
    var a = {};
    phet.chipper.project && (a.dimension1 = phet.chipper.project), phet.chipper.version && (a.dimension2 = phet.chipper.version), phet.chipper.locale && (a.dimension3 = phet.chipper.locale), phet.chipper.buildTimestamp && (a.dimension4 = phet.chipper.buildTimestamp), a.dimension5 = t, a.dimension6 = document.referrer;
    var c = "offline/html/" + phet.chipper.project + "_" + phet.chipper.locale;
    window.googleAnalytics(function() {
      n = !0
    }), window.googleAnalytics("create", {
      trackingId: "UA-5033201-1",
      storage: "none",
      cookieDomain: "none"
    }), "file:" === window.location.protocol && (window.googleAnalytics("set", "checkProtocolTask", null), window.googleAnalytics("set", "checkStorageTask", null), window.googleAnalytics("set", "location", c)), window.googleAnalytics("set", "anonymizeIp", !0), window.googleAnalytics("send", "pageview", a), "phet-io" === phet.chipper.brand && (window.googleAnalytics("create", {
      trackingId: "UA-37615182-3",
      storage: "none",
      cookieDomain: "none",
      name: "io"
    }), "file:" === window.location.protocol && (window.googleAnalytics("io.set", "checkProtocolTask", null), window.googleAnalytics("io.set", "checkStorageTask", null), window.googleAnalytics("io.set", "location", c)), window.googleAnalytics("io.set", "anonymizeIp", !0), window.googleAnalytics("io.send", "pageview", a)), "file:" === window.location.protocol || document.domain.match(/(.*\.colorado\.edu\.?$)|(^localhost$)|(^127\.0\.0\.1$)/) || (window.googleAnalytics("create", {
      trackingId: "UA-37615182-2",
      storage: "none",
      cookieDomain: "none",
      name: "thirdParty"
    }), window.googleAnalytics("thirdParty.set", "anonymizeIp", !0), window.googleAnalytics("thirdParty.send", "pageview", a)), window.googleAnalytics("create", {
      trackingId: "UA-5033010-35",
      storage: "none",
      cookieDomain: "phet.colorado.edu",
      name: "hewlett"
    }), window.googleAnalytics("hewlett.set", "anonymizeIp", !0), window.googleAnalytics("hewlett.send", "pageview"), phet.chipper.queryParameters.ga && (window.googleAnalytics("create", {
      trackingId: phet.chipper.queryParameters.ga,
      storage: "none",
      cookieDomain: "none",
      name: "external"
    }), window.googleAnalytics("external.set", "anonymizeIp", !0), window.googleAnalytics("external.send", "pageview", phet.chipper.queryParameters.gaPage || void 0))
  }
  var o = navigator.userAgent,
    n = !!(o.match(/MSIE/) || o.match(/Trident\//) || o.match(/Edge\//));
  if (!("file:" === window.location.protocol && n || "phet" !== phet.chipper.brand && "phet-io" !== phet.chipper.brand)) {
    var t = void 0;
    "phet-app" === (t = phet.chipper.queryParameters["phet-app"] ? "phet-app" : phet.chipper.queryParameters["phet-android-app"] ? "phet-android-app" : top !== self ? "embedded" : "default") ? window.addEventListener("load", function() {
      setTimeout(e, 0)
    }, !1): e()
  }
}(); < /script>

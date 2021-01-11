< script type = "text/javascript" > ! function() {
  "use strict";

  function e(e) {
    var t = new Date,
      a = void 0;
    do {
      a = new Date
    } while (a - t < e)
  }
  var t = {
    accessibility: {
      type: "flag"
    },
    a11y: {
      type: "flag"
    },
    audioVolume: {
      type: "number",
      defaultValue: 1,
      isValidValue: function(e) {
        return e >= 0 && e <= 1
      }
    },
    binder: {
      type: "flag"
    },
    brand: {
      type: "string",
      defaultValue: "adapted-from-phet",
      validValues: ["phet", "phet-io", "adapted-from-phet"]
    },
    buildCompatible: {
      type: "flag"
    },
    cacheBust: {
      type: "boolean",
      defaultValue: !0
    },
    colorProfile: {
      type: "string",
      defaultValue: "default"
    },
    dev: {
      type: "flag"
    },
    ea: {
      type: "flag"
    },
    eall: {
      type: "flag"
    },
    enhancedSoundInitiallyEnabled: {
      type: "boolean",
      defaultValue: !1
    },
    fuzz: {
      type: "flag"
    },
    fuzzBoard: {
      type: "flag"
    },
    fuzzMouse: {
      type: "flag"
    },
    fuzzPointers: {
      type: "number",
      defaultValue: 1
    },
    fuzzTouch: {
      type: "flag"
    },
    fuzzRate: {
      type: "number",
      defaultValue: 100,
      isValidValue: function(e) {
        return e > 0
      }
    },
    ga: {
      type: "string",
      defaultValue: null
    },
    gameUp: {
      type: "flag"
    },
    gameUpLogging: {
      type: "flag"
    },
    gaPage: {
      type: "string",
      defaultValue: null
    },
    homeScreen: {
      type: "boolean",
      defaultValue: !0
    },
    initialScreen: {
      type: "number",
      defaultValue: 0
    },
    legendsOfLearning: {
      type: "flag"
    },
    locale: {
      type: "string",
      defaultValue: "en"
    },
    log: {
      type: "flag"
    },
    memoryLimit: {
      type: "number",
      defaultValue: 0
    },
    mobileA11yTest: {
      type: "flag"
    },
    "phet-app": {
      type: "flag"
    },
    "phet-android-app": {
      type: "flag"
    },
    playbackInputEventLog: {
      type: "flag"
    },
    playbackMode: {
      type: "boolean",
      defaultValue: !1
    },
    postMessageOnBeforeUnload: {
      type: "flag"
    },
    postMessageOnError: {
      type: "flag"
    },
    postMessageOnLoad: {
      type: "flag"
    },
    postMessageOnReady: {
      type: "flag"
    },
    preserveDrawingBuffer: {
      type: "flag"
    },
    profiler: {
      type: "flag"
    },
    qrCode: {
      type: "flag"
    },
    randomSeed: {
      type: "number",
      defaultValue: Math.random()
    },
    recordInputEventLog: {
      type: "flag"
    },
    rootRenderer: {
      type: "string",
      defaultValue: null,
      validValues: [null, "canvas", "svg", "dom", "webgl"]
    },
    sceneryLog: {
      type: "array",
      elementSchema: {
        type: "string"
      },
      defaultValue: null
    },
    sceneryStringLog: {
      type: "flag"
    },
    screens: {
      type: "array",
      elementSchema: {
        type: "number"
      },
      defaultValue: null,
      isValidValue: function(e) {
        return null === e || e.length === _.uniq(e).length
      }
    },
    showAnswers: {
      type: "flag",
      private: !0
    },
    showCanvasNodeBounds: {
      type: "flag"
    },
    showFittedBlockBounds: {
      type: "flag"
    },
    showHitAreas: {
      type: "flag"
    },
    showPointerAreas: {
      type: "flag"
    },
    showPointers: {
      type: "flag"
    },
    showVisibleBounds: {
      type: "flag"
    },
    shuffleListeners: {
      type: "flag"
    },
    sound: {
      type: "string",
      defaultValue: "enabled",
      validValues: ["enabled", "disabled", "muted"]
    },
    speed: {
      type: "number",
      defaultValue: 1,
      isValidValue: function(e) {
        return e > 0
      }
    },
    strings: {
      type: "string",
      defaultValue: null
    },
    stringTest: {
      type: "string",
      defaultValue: null
    },
    supportsEnhancedSound: {
      type: "flag"
    },
    supportsSound: {
      type: "flag"
    },
    vibration: {
      type: "string",
      defaultValue: null,
      validValues: [null, "objects", "manipulation", "interaction-changes", "result"]
    },
    webgl: {
      type: "boolean",
      defaultValue: !0
    }
  };
  window.phet = window.phet || {}, window.phet.chipper = window.phet.chipper || {}, window.phet.chipper.queryParameters = QueryStringMachine.getAll(t), window.phet.chipper.queryParameters.log && (window.phet.log = function(e, t) {
      t = _.extend({
        color: "#009900"
      }, t), console.log("%c" + e, "color: " + t.color)
    }), window.phet.chipper.getCacheBustArgs = function() {
      return phet.chipper.queryParameters.cacheBust ? "bust=" + Date.now() : ""
    }, window.phet.chipper.brand = window.phet.chipper.brand || phet.chipper.queryParameters.brand || "adapted-from-phet", window.phet.chipper.mapString = function(e, t) {
      return null === t ? e : "double" === t ? e + ":" + e : "long" === t ? "12345678901234567890123456789012345678901234567890" : "rtl" === t ? "‫تست (زبان)‬" : "xss" === t ? e + '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIW2NkYGD4DwABCQEBtxmN7wAAAABJRU5ErkJggg==" onload="window.location.href=atob(\'aHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1kUXc0dzlXZ1hjUQ==\')" />' : "none" === t ? e : t
    }, QueryStringMachine.containsKey("locale") && (window.phet.chipper.locale = phet.chipper.queryParameters.locale), window.phet.chipper.randomSeed = phet.chipper.queryParameters.randomSeed, window.phet.chipper.makeEverythingSlow = function() {
      window.setInterval(function() {
        e(64)
      }, 16)
    }, window.phet.chipper.makeRandomSlowness = function() {
      window.setInterval(function() {
        e(Math.ceil(100 + 200 * Math.random()))
      }, Math.ceil(100 + 200 * Math.random()))
    }, window.phet.chipper.isProduction = "production" === $("meta[name=phet-sim-level]").attr("content"),
    function() {
      var e = !phet.chipper.isProduction && phet.chipper.queryParameters.eall;
      (e || !phet.chipper.isProduction && phet.chipper.queryParameters.ea || phet.chipper.isDebugBuild) && window.assertions.enableAssert(), e && window.assertions.enableAssertSlow(), phet.chipper.queryParameters.postMessageOnError && window.addEventListener("error", function(e) {
        var t = "",
          a = "";
        e && e.message && (t = e.message), e && e.error && e.error.stack && (a = e.error.stack), window.parent && window.parent.postMessage(JSON.stringify({
          type: "error",
          url: window.location.href,
          message: t,
          stack: a
        }), "*")
      }), phet.chipper.queryParameters.postMessageOnBeforeUnload && window.addEventListener("beforeunload", function(e) {
        window.parent && window.parent.postMessage(JSON.stringify({
          type: "beforeUnload"
        }), "*")
      })
    }()
}(); < /script>

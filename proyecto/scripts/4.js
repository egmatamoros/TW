< script type = "text/javascript" > ! function() {
  "use strict";
  var t = .2605,
    e = "http://www.w3.org/2000/svg",
    r = .435,
    i = 0,
    n = 0,
    s = document.createElement("div");
  s.id = "splash-container", s.style.position = "fixed", s.style.left = "0px", s.style.top = "0px", s.style["-webkit-transform-origin"] = "0 0", s.style["-ms-transform-origin"] = "0 0", s.style["transform-origin"] = "0 0";
  var o = document.createElement("img");
  o.style.display = "block", o.alt = "";
  var d = function() {
    ! function(e, s) {
      0 === i && 0 === n && (i = s.width, n = s.height);
      var o = i,
        d = n,
        a = window.innerHeight,
        l = window.innerWidth,
        c = l / o,
        h = a / d,
        w = Math.min(c, h) * t,
        p = "translate(" + Math.round((l - o * w) / 2) + "px, " + Math.round((a - d * w) * r) + "px) scale3d(" + w + ", " + w + ", 1)";
      e.style["-webkit-transform"] = p, e.style["-ms-transform"] = p, e.style.transform = p
    }(s, o)
  };
  o.onload = function() {
    d(), window.addEventListener("resize", d), window.addEventListener("load", d);
    var t = document.getElementById("splash-container");
    t && t.parentNode.removeChild(t), document.body.appendChild(s)
  };
  var a = document.createElement("div");
  a.setAttribute("style", "width:273px;height:10px"), a.style.display = "block";
  var l = document.createElementNS(e, "svg");
  l.style["margin-left"] = "-1px";
  var c = document.createElementNS(e, "rect");
  c.setAttribute("id", "progressBarBackground"), c.setAttribute("x", "1"), c.setAttribute("y", "25"), c.setAttribute("width", "273"), c.setAttribute("height", "10"), c.setAttribute("rx", "3"), c.setAttribute("ry", "3"), c.setAttribute("style", "stroke: white;stroke-width:1");
  var h = document.createElementNS(e, "rect");
  h.setAttribute("id", "progressBarForeground"), h.setAttribute("x", "1"), h.setAttribute("y", "25"), h.setAttribute("width", "0"), h.setAttribute("height", "10"), h.setAttribute("rx", "3"), h.setAttribute("ry", "3"), h.setAttribute("style", "fill:#6acef5;"), l.appendChild(c), l.appendChild(h);
  var w = setInterval(function() {
    c.style["stroke-width"] = (.55 * Math.sin(Date.now() / 1e3 * 4) + 1).toFixed(2)
  }, 16);
  if (window.phetSplashScreenDownloadComplete = function() {
      clearInterval(w), c.style["stroke-width"] = 1
    }, s.appendChild(o), s.appendChild(l), window.PHET_SPLASH_DATA_URI) o.src = window.PHET_SPLASH_DATA_URI;
  else {
    var p = location.search.match(/brand=([^&]+)/),
      u = p ? decodeURIComponent(p[1]) : "adapted-from-phet";
    o.src = "../brand/" + u + "/images/splash.svg"
  }
  window.phetSplashScreen = {
    dispose: function() {
      window.PHET_SPLASH_DATA_URI && delete window.PHET_SPLASH_DATA_URI, window.removeEventListener("resize", d), window.removeEventListener("load", d), document.body.removeChild(s), delete window.phetSplashScreen
    }
  }
}(); < /script>

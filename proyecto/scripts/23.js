< script type = "text/javascript" > ! function() {
  "use strict";

  function t() {
    !i && function() {
      if (!document.body) return !1;
      var t = document.createElementNS(e, "svg");
      t.setAttribute("width", "2"), t.setAttribute("height", "2"), t.setAttribute("style", "visibility: hidden; pointer-events: none; position: absolute; left: -65535px; right: -65535px;");
      var i = document.createElementNS(e, "text");
      i.appendChild(document.createTextNode("")), i.setAttribute("dominant-baseline", "alphabetic"), i.setAttribute("text-rendering", "geometricPrecision"), i.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), t.appendChild(i), document.body.appendChild(t), i.setAttribute("direction", "ltr"), i.setAttribute("font-family", "Arial"), i.setAttribute("font-size", "16px"), i.setAttribute("font-style", "normal"), i.setAttribute("font-weight", "normal"), i.setAttribute("font-stretch", "normal"), i.lastChild.nodeValue = "m";
      var n = i.getBBox(),
        r = 0 !== n.width || 0 !== n.height;
      return document.body.removeChild(t), r
    }() && (i = !0, phet.chipper.runRequireJS())
  }
  var e = "http://www.w3.org/2000/svg",
    i = !1;
  ! function e() {
    t(), i || setTimeout(e, 1e3)
  }(), i || window.addEventListener("resize", function e() {
    t(), i && window.removeEventListener("resize", e)
  })
}(); < /script>

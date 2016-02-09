

var PIXEL_RATIO = (function () {
    var ctx = document.createElement("canvas").getContext("2d"),
        dpr = window.devicePixelRatio || 1,
        bsr = ctx.webkitBackingStorePixelRatio ||
              ctx.mozBackingStorePixelRatio ||
              ctx.msBackingStorePixelRatio ||
              ctx.oBackingStorePixelRatio ||
              ctx.backingStorePixelRatio || 1;

    return dpr / bsr;
})();


setHiDPICanvas = function(w, h, ratio) {
    if (!ratio) { ratio = PIXEL_RATIO; }
    
    spider.canvas.width = w * ratio;
    spider.canvas.height = h * ratio;
    spider.canvas.style.width = w + "px";
    spider.canvas.style.height = h + "px";
    spider.context.setTransform(ratio, 0, 0, ratio, 0, 0);
    
    spider.canvas.mozOpaque = true;
    spider.context.fillStyle = 'white';
    spider.context.fillRect(0, 0, w, h);
}

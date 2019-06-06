// Copyright 2018-2019 TAP, Inc. All Rights Reserved.

const CanvasRectSystem = CES.System.extend({
  update: function() {
    CANVAS.width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    CANVAS.height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  },
});

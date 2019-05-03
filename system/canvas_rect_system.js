// Copyright 2018-2019 TAP, Inc. All Rights Reserved.

const CanvasRectSystem = CES.System.extend({
  update: function() {
    this.world.getEntities("WebGL").some(entity => {
      const canvas = entity.getComponent("WebGL").canvas;
      canvas.width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      canvas.height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

      return true;
    });
  },
});

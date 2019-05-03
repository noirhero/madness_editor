// Copyright 2018-2019 TAP, Inc. All Rights Reserved.

const RenderSpriteSystem = CES.System.extend({
  update: function() {
    this.world.getEntities("WebGL").some(entity => {
      const webgl_comp = entity.getComponent("WebGL");
      const canvas = webgl_comp.canvas;
      const GL = webgl_comp.gl;

      GL.depthFunc(GL.GREATER);
      GL.disable(GL.CULL_FACE);
      GL.frontFace(GL.CW);
      GL.enable(GL.BLEND);
      GL.enable(GL.DEPTH_TEST);
      GL.blendFuncSeparate(GL.SRC_ALPHA, GL.ONE_MINUS_SRC_ALPHA, GL.ONE, GL.ONE_MINUS_SRC_ALPHA);

      GL.viewport(0, 0, canvas.width, canvas.height);
      GL.clearColor(0.75, 0.75, 0.75, 1);
      GL.clearDepth(0);
      GL.clear(GL.COLOR_BUFFER_BIT | GL.DEPTH_BUFFER_BIT);

      return true;
    });
  },
});

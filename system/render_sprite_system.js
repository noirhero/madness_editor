// Copyright 2018-2019 TAP, Inc. All Rights Reserved.

const RenderSpriteSystem = CES.System.extend({
  init: function() {
    this.program = new RenderProgram("../assets/sprite.vert", "../assets/sprite.frag");
    this.world_tm = glMatrix.mat4.create();
  },
  update: function() {
    if(false === this.program.UseProgram()) {
      return;
    }

    GL.viewport(0, 0, CANVAS.width, CANVAS.height);
    GL.clearColor(0.75, 0.75, 0.75, 1);
    GL.clearDepth(0);
    GL.clear(GL.COLOR_BUFFER_BIT | GL.DEPTH_BUFFER_BIT);

    GL.blendFuncSeparate(GL.SRC_ALPHA, GL.ONE_MINUS_SRC_ALPHA, GL.ONE, GL.ONE_MINUS_SRC_ALPHA);

    const world_tm = this.world_tm;
    this.world.getEntities("Pos", "Scale").forEach(entity => {
      const rot_comp  = entity.getComponent("Rot");
      const rot = rot_comp ? rot_comp.rot : INIT_QUAT;
      const pos = entity.getComponent("Pos").pos;
      const scale = entity.getComponent("Scale").scale;

      glMatrix.mat4.fromRotationTranslationScale(world_tm, rot, pos, scale);
    });
  },
});

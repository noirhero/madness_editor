// Copyright 2018-2019 TAP, Inc. All Rights Reserved.

const RenderSpriteSystem = CES.System.extend({
  init: function() {
    this.program = new RenderProgram("../assets/sprite.vert", "../assets/sprite.frag");

    this.world_tm = glMatrix.mat4.create();
    this.worls_pos = glMatrix.vec3.create();
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
    const world_pos = this.world_pos;
    this.world.getEntities("Pos", "Scale").forEach(entity => {
      const rot_comp  = entity.getComponent("Rot");
      const rot = rot_comp ? rot_comp.rot : INIT_QUAT;
      const pos = entity.getComponent("Pos").pos;
      const scale = entity.getComponent("Scale").scale;

      glMatrix.mat4.fromRotationTranslationScale(world_tm, rot, pos, scale);

      for(let i = 0; i < 4; ++i) {
        glMatrix.vec3.transformMat4(world_pos, INIT_POS[i], world_tm);

        XYZUVI_VB[offset++] = world_pos[0];
        XYZUVI_VB[offset++] = world_pos[1];
        //XYZUVI_VB[offset++] = (0 === pos[2]) ? world_transform[13] : pos[2];
        XYZUVI_VB[offset++] = pos[2];
        XYZUVI_VB[offset++] = texcoord[i][0];
        XYZUVI_VB[offset++] = texcoord[i][1];
        XYZUVI_VB[offset++] = texture_index;
      }
    });
  },
});

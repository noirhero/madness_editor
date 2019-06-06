// Copyright 2018-2019 TAP, Inc. All Rights Reserved.

const ViewportSystem = CES.System.extend({
  update: function() {
    let camera_comp = null;
    if(false === this.world.getEntities("Camera").some(entity => {
      camera_comp = entity.getComponent("Camera");
      return true;
    })) {
      return;
    }

    this.world.getEntities("Viewport").forEach(entity => {
      const viewport_comp = entity.getComponent("Viewport");

      glMatrix.vec3.add(camera_comp.target, camera_comp.pos, camera_comp.dir);

      glMatrix.mat4.lookAt(viewport_comp.view_tm, camera_comp.pos, camera_comp.target, camera_comp.up);
      glMatrix.mat4.ortho(viewport_comp.proj_tm, 0, CANVAS.width, 0, CANVAS.height, viewport_comp.near, viewport_comp.far);
      glMatrix.mat4.multiply(viewport_comp.vp_tm, viewport_comp.proj_tm, viewport_comp.view_tm);  
    });
  },
});

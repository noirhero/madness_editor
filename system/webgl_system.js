// Copyright 2018-2019 TAP, Inc. All Rights Reserved.

const WebGLSystem = CES.System.extend({
  update: function(body_id, canvas_id) {
    this.world.getEntities("WebGL").some(entity => {
      const webgl_comp = entity.getComponent("WebGL");
      const canvas = document.getElementById(canvas_id || "main_canvas");

      const options = {
        premultipliedAlpha: false,
        antialias: false,
      };

      let gl = canvas.getContext("webgl", options);
      if(!gl) {
        gl = canvas.getContext("experiment-webgl", options);
      }

      if(!gl) {
        alert("In browser WebGL not supported.");
      }

      webgl_comp.canvas = canvas;
      webgl_comp.gl = gl;

      this.world.removeSystem(this);
      return true;
    });
  },
});

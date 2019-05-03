// Copyright 2018-2019 TAP, Inc. All Rights Reserved.

const CameraComp = CES.Component.extend({
  name: "Camera",
  init: function(x, y, z) {
    this.pos = glMatrix.vec3.fromValues(x || 0, y || 0, z || 0);
    this.up = glMatrix.vec3.fromValues(0, 1, 0);
    this.dir = glMatrix.vec3.fromValues(0, 0, -1);
    this.target = glMatrix.vec3.create();
  },
});

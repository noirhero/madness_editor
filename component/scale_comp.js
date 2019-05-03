// Copyright 2018-2019 TAP, Inc. All Rights Reserved.

const ScaleComp = CES.Component.extend({
  name: "Scale",
  init: function(x, y, z) {
    this.scale = glMatrix.vec3.fromValues(x || 1, y || 1, z || 1);
  },
});

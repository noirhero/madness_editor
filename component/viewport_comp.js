// Copyright 2018-2019 TAP, Inc. All Rights Reserved.

const ViewportComp = CES.Component.extend({
  name: "Viewport",
  init: function(near, far) {
    this.near = near || 1000;
    this.far = far || -1000;

    this.view_tm = glMatrix.mat4.create();
    this.proj_tm = glMatrix.mat4.create();
    this.vp_tm = glMatrix.mat4.create();
  },
});

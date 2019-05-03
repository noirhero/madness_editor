// Copyright 2018-2019 TAP, Inc. All Rights Reserved.

const RotComp = CES.Component.extend({
  name: "Rot",
  init: function(x_deg, y_deg, z_deg) {
    this.rot = glMatrix.quat.fromEuler(glMatrix.quat.create(), x_deg || 0, y_deg || 0, z_deg || 0);
  },
})

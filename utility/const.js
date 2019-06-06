// Copyright 2018-2019 TAP, Inc. All Rights Reserved.

const GAME_UNIT = 10;

const INIT_QUAT = glMatrix.quat.create();

const INIT_TEXCOORD = [
  glMatrix.vec2.fromValues(0.0, 1.0),
  glMatrix.vec2.fromValues(1.0, 1.0),
  glMatrix.vec2.fromValues(0.0, 0.0),
  glMatrix.vec2.fromValues(1.0, 0.0),
];

const INIT_POS = [
  glMatrix.vec3.fromValues(-0.5, 0.5, 0.0),
  glMatrix.vec3.fromValues(0.5, 0.5, 0.0),
  glMatrix.vec3.fromValues(-0.5, -0.5, 0.0),
  glMatrix.vec3.fromValues(0.5, -0.5, 0.0),
];

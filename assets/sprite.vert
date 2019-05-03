// Copyright 2018-2019 TAP, Inc. All Rights Reserved.

attribute vec3 world_pos;
attribute vec2 tex_coord;
attribute float tex_index;

uniform mat4 vp_transform;

varying vec2 fs_tex_coord;
varying float fs_tex_index;

void main() {
  gl_Position = vp_transform * vec4(world_pos, 1.0);
  fs_tex_coord = tex_coord;
  fs_tex_index = tex_index;
}

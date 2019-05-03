// Copyright 2018-2019 TAP, Inc. All Rights Reserved.

precision mediump float;

uniform sampler2D sampler_sprite[8];

varying vec2 fs_tex_coord;
varying float fs_tex_index;

vec4 FindTexture(int tex_index) {
  for(int i = 0; i < 8; ++i) {
    if(i == tex_index) {
      return texture2D(sampler_sprite[i], fs_tex_coord);
    }
  }
  return vec4(1.0);
}

void main() {
  gl_FragColor = FindTexture(int(fs_tex_index));
  if(0.0 == gl_FragColor.a) {
    discard;
  }
}

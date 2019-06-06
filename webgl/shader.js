// Copyright 2018-2019 TAP, Inc. All Rights Reserved.

const VERTEX_SHADERS = [];
const FRAGMENT_SHADERS = [];

function CreateShader(src, type) {
  "use strict";

  const shader = GL.createShader(type);
  GL.shaderSource(shader, src);
  GL.compileShader(shader);

  if (!GL.getShaderParameter(shader, GL.COMPILE_STATUS)) {
    alert(`Compile shader failed : ${src}
      ${GL.getShaderInfoLog(shader)}`);
  }

  return shader;
}

function VertexShader(url) {
  "use strict";

  this.shader = null;
  HTTPRequest(url, src => {
    this.shader = CreateShader(src, GL.VERTEX_SHADER);
  }, true);
}

function FragmentShader(url) {
  "use strict";

  this.shader = null;
  HTTPRequest(url, src => {
    this.shader = CreateShader(src, GL.FRAGMENT_SHADER);
  }, true);
}

class RenderProgram {
  constructor(vs_url, fs_url) {
    this.vs = null;
    this.fs = null;
    this.program = null;

    if(!VERTEX_SHADERS[vs_url]) {
      VERTEX_SHADERS[vs_url] = new VertexShader(vs_url);
    }
    this.vs = VERTEX_SHADERS[vs_url];

    if(!FRAGMENT_SHADERS[fs_url]) {
      FRAGMENT_SHADERS[fs_url] = new FragmentShader(fs_url);
    }
    this.fs = FRAGMENT_SHADERS[fs_url];
  }

  UseProgram() {
    if(this.program) {
      GL.useProgram(this.program);
      return true;
    }

    const vs = this.vs.shader;
    const fs = this.fs.shader;
    if(!vs || !fs) {
      return false;
    }

    const program = GL.createProgram();
    GL.attachShader(program, vs);
    GL.attachShader(program, fs);
    GL.linkProgram(program);

    if (!GL.getProgramParameter(program, GL.LINK_STATUS)) {
      alert("Prgram link failed.");
      return false;
    }

    GL.useProgram(program);

    this.program = program;
    return true;
  }
}

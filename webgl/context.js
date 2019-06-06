// Copyright 2018-2019 TAP, Inc. All Rights Reserved.

var CANVAS = null;
var GL = null;

function InitializeWebGL(canvas_id) {
  canvas_id = canvas_id || "main_canvas";
  CANVAS = document.getElementById(canvas_id);
  if(!CANVAS) {
    alert(`Find canvas failed : ${canvas_id}`);
    return false;
  }

  const options = {
    premultipliedAlpha: false,
    antialias: false,
  };

  GL = CANVAS.getContext("webgl", options);
  if(!GL) {
    GL = CANVAS.getContext("experiment-webgl", options);
  }

  if(!GL) {
    alert("This browser is not supported for WebGL.");
    return false;
  }

  GL.depthFunc(GL.GREATER);
  GL.disable(GL.CULL_FACE);
  GL.frontFace(GL.CW);
  GL.enable(GL.BLEND);
  GL.enable(GL.DEPTH_TEST);

  return true;
}

// Copyright 2018-2019 TAP, Inc. All Rights Reserved.

const WebGL = {
  Initialize: (body_id, canvas_id) => {
    const body = document.getElementById(body_id || "main");
    body.ontouchmove = (event) => {
      event.preventDefault();
    };

    const canvas = document.getElementById(canvas_id || "main_canvas");

    const options = {
      premultipliedAlpha: false,
      antialias: false,
    };
    let context = canvas.getContext("webgl", options);
    if(!context) {
      context = canvas.getContext("experiment-webgl", options);
    }

    if(!context) {
      alert("In browser is WebGL not supported.");
      return undefined;
    }

    return {
      Canvas: canvas,
      GL: context,
    };
  },
};

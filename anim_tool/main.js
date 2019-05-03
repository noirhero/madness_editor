// Copyright 2018-2019 TAP, Inc. All Rights Reserved.

function Main() {
  "use strict";

  document.getElementById("main").ontouchmove = event => {
    event.preventDefault();
  };

  const gui = new ControlKit();
  const timer = new Timer();
  const world = new CES.World();
  const entity = new CES.Entity();

  entity.addComponent(new WebGLComp());
  entity.addComponent(new PosComp());
  entity.addComponent(new ScaleComp());
  entity.addComponent(new TexcoordComp());
  world.addEntity(entity);
  world.addSystem(new WebGLSystem());
  world.addSystem(new CanvasRectSystem());
  world.addSystem(new RenderSpriteSystem());

  const frame_fn = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  const loop_fn = () => {
    gui.update();
    world.update(timer.Update().Delta);

    frame_fn(loop_fn);
  };
  loop_fn();
}
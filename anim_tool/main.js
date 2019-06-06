// Copyright 2018-2019 TAP, Inc. All Rights Reserved.

function Main() {
  "use strict";

  if(false === InitializeWebGL()) {
    return;
  }

  // Ignore screen touch move.
  document.getElementById("main").ontouchmove = event => {
    event.preventDefault();
  };

  const gui = new ControlKit();
  const timer = new Timer();
  const world = new CES.World();
  const entity = new CES.Entity();

  entity.addComponent(new CameraComp());
  entity.addComponent(new ViewportComp());
  entity.addComponent(new PosComp());
  entity.addComponent(new ScaleComp());
  entity.addComponent(new TexcoordComp());
  world.addEntity(entity);

  world.addSystem(new CanvasRectSystem());
  world.addSystem(new ViewportSystem());
  world.addSystem(new RenderSpriteSystem());

  const frame_fn = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  const loop_fn = () => {
    gui.update();
    world.update(timer.Update().Delta);

    frame_fn(loop_fn);
  };
  loop_fn();
}

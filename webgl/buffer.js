// Copyright 2018-2019 TAP, Inc. All Rights Reserved.

const NUM_BATCH = 256;
const XYZUV_VB = new Float32Array(NUM_BATCH * 5/*xyz uv*/ * 4/*quad*/);
const XYZUVI_VB = new Float32Array(NUM_BATCH * 6/*xyz uv ti*/ * 4/*quad*/);
const U16_IB = (() => {
  const indices = new Uint16Array(NUM_BATCH * 6/*two polygon*/);

  let offset = 0;
  let offset_idx = 0;
  for(let i = 0; i < NUM_BATCH; ++i) {
    indices[offset++] = offset_idx;
    indices[offset++] = offset_idx + 1;
    indices[offset++] = offset_idx + 2;
    indices[offset++] = offset_idx + 1;
    indices[offset++] = offset_idx + 3;
    indices[offset++] = offset_idx + 2;

    offset_idx += 4/*quad*/;
  }
  return indices;
})();

// Copyright 2018-2019 TAP, Inc. All Rights Reserved.

function HTTPRequest(url, callback, is_async) {
  "use strict";

  const request = new XMLHttpRequest();
  request.onload = () => {
    console.log(`On Load : ${url}`);
    callback(request.response);
  };
  request.open("GET", url, is_async);
  request.send();
}

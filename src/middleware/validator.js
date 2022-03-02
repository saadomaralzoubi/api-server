"use strict";

function name(req, res, next) {
  if (req.query.name) {
    next();
  } else {
    next("input your name");
  }
}

module.exports = name;

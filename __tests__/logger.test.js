"use strict";
const { expect } = require("@jest/globals");
const logger = require("../src/middleware/logger.js");

describe("testing next", () => {
  let req = {};
  let res = {};
  let next = jest.fn();
  it("test", async () => {
    logger(req, res, next);
    expect(next).toHaveBeenCalled();
  });
});

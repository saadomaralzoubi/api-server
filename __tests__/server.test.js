"use strict";
const server = require("../src/server");
const supertest = require("supertest");
const request = supertest(server.app);
const { db } = require("../src/models/index");
let id;

beforeAll(async () => {
  await db.sync();
});
afterAll(async () => {
  await db.drop();
});

describe("test 404", () => {
  it("testing 404", async () => {
    const response = await request.post("/");
    expect(response.status).toEqual(404);
  });

  it("testing bad method", async () => {
    id = 1;
    const response = await request.post("/");
    expect(response.status).toBe(404);
  });
});

describe("test food routes", () => {
  it("test get all food", async () => {
    const response = await request.get("/api/v1/food");
    expect(response.status).toEqual(200);
  });
  it("add new food", async () => {
    const response = await request.post("/api/v1/food").send({
      foodName: "test",
      dishFamily: "test",
    });
    expect(response.status).toEqual(201);
    id = response.body.id;
  });

  it("testfood get by id ", async () => {
    const response = await request.get(`/api/v1/food/${id}`);
    expect(response.status).toEqual(200);
  });

  it("update new food", async () => {
    const response = await request.put(`/api/v1/food/${id}`).send({
      foodName: "test",
      dishFamily: "test",
    });
    expect(response.status).toEqual(201);
  });

  it("delete food by id", async () => {
    const response = await request.delete(`/api/v1/food/${id}`);
    expect(response.status).toEqual(204);
  });
});

describe("testing clothes routes", () => {
  it("testing get all clothes", async () => {
    const response = await request.get("/api/v1/clothes");
    expect(response.status).toEqual(200);
  });
  it("post new clothes", async () => {
    const response = await request.post("/api/v1/clothes").send({
      clothesType: "test",
      clothesBrand: "test",
    });
    expect(response.status).toEqual(201);
    id = response.body.id;
  });

  it("test clothes get by id ", async () => {
    const response = await request.get(`/api/v1/clothes/${id}`);
    expect(response.status).toEqual(200);
  });

  it("update new clothes", async () => {
    const response = await request.put(`/api/v1/clothes/${id}`).send({
      clothesType: "test",
      clothesBrand: "test",
    });
    expect(response.status).toEqual(201);
  });
  it("delete clothes by id", async () => {
    const response = await request.delete(`/api/v1/clothes/${id}`);
    expect(response.status).toEqual(204);
  });
});

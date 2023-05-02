import "chai/register-assert.js";
import "chai/register-should.js";
import { faker } from "@faker-js/faker";
import { test, teardown } from "tap";
import app from "../src/app.js";

const assert = chai.assert;
chai.should();

teardown(() => app.close());

test("Request the /hello route", async () => {
  const response = await app.inject({
    method: "GET",
    url: "/hello",
  });

  assert.equal(response.statusCode, 200);
  assert.equal(response.body, "hello");
});

test("List all users from /dbTest", async () => {
  const response = await app.inject({
    method: "GET",
    url: "/dbTest",
  });

  assert.equal(response.statusCode, 200);
});

test("Creating a new user", async () => {
  const payload = {
    name: "Testname",
    email: faker.internet.email(),
    petType: "Dog",
  };

  const response = await app.inject({
    method: "POST",
    url: "/users",
    payload,
  });

  assert.equal(response.statusCode, 200);
  response.payload.should.not.equal(payload);

  const resPayload = response.json();
  assert.equal(resPayload.email, payload.email);
  assert.equal(resPayload.petType, "Dog");
});

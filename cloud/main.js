// Example cloud functions
Parse.Cloud.define("hello", async (request) => {
  return `Hello ${request.params.name || "world"}!`;
});

Parse.Cloud.define("calculate", async (request) => {
  return {
    sum: request.params.a + request.params.b,
    product: request.params.a * request.params.b,
  };
});

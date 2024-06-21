const fdk = require("@fnproject/fdk");
const { getData } = require("./getObj");
require("dotenv").config();

fdk.handle(async function (input) {
  const POST = "post";
  const GET = "get";
  const DELETE = "delete";
  const PUT = "put";
  try {
    if (input === GET) {
      console.log("get method");
      result = await getData();
    }
    return result;
  } catch (error) {
    return error;
  }
});

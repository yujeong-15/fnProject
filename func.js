const fdk = require("@fnproject/fdk");
const { getData } = require("./getObj");

fdk.handle(function (input) {
  const POST = "post";
  const GET = "get";
  const DELETE = "delete";
  const PUT = "put";
  try {
    if (input === GET) {
      console.log("get method");
      getData();
    }
  } catch (error) {
    return error;
  }
});

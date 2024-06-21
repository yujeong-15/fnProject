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
      result = await getData(); // result {"objects":[{"name":"111testpdf-test.pdf"},{"name":"111test●2024年作業報告書_蔡有淨.xlsx"},{"name":"test-object-pdfpdf-test.pdf"}]}
    }
    return result;
  } catch (error) {
    return error;
  }
});

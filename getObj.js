const axios = require("axios");
require("dotenv").config();

//{"objects":[{"name":"111testpdf-test.pdf"},{"name":"111test●2024年作業報告書_蔡有淨.xlsx"},{"name":"test-object-pdfpdf-test.pdf"}]}
async function getData() {
  const PRE_AUTH_PW = process.env.PRE_AUTH_PW;
  const NAMESPACE = process.env.NAMESPACE;
  const objects = [];
  const newArray = [];
  try {
    const response = await axios.get(
      `https://objectstorage.ap-tokyo-1.oraclecloud.com/p/${PRE_AUTH_PW}/n/${NAMESPACE}/b/input-bucket/o`
    );

    objects = response.data.objects;
    console.log(typeof objects + objects);
    for (let i = 0; i < objects.length; i += 1) {
      const response2 = await axios.get(
        `https://objectstorage.ap-tokyo-1.oraclecloud.com/p/${PRE_AUTH_PW}/n/${NAMESPACE}/b/input-bucket/o/${objects[i].name}`
      );
      newArray.push(response2.data);
    }
    return newArray;
  } catch (error) {
    console.log(error);
    return `get메소드 실행중 에러입니다: ${error}`;
  }
}

module.exports = {
  getData,
};

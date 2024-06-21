const axios = require('axios');
require("dotenv").config();
 
async function getData() {
  const PRE_AUTH_PW = process.env.PRE_AUTH_PW;
  const NAMESPACE = process.env.NAMESPACE;
  try {
    const response = await axios.get(
      `https://objectstorage.ap-tokyo-1.oraclecloud.com/p/${PRE_AUTH_PW}/n/${NAMESPACE}/b/input-bucket/o`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return `get메소드 실행중 에러입니다: ${error}`;
  }
}


module.exports={
    getData
};
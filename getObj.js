import axios from "axios";

require("dotenv").config();
export async function getData() {
  const PRE_AUTH_PW = process.env.PRE_AUTH_PW;
  const NAMESPACE = process.env.NAMESPACE;
  await axios
    .get(
      `https://objectstorage.ap-tokyo-1.oraclecloud.com/p/${PRE_AUTH_PW}/n/${NAMESPACE}/b/input-bucket/o/`
    )
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
      return `get메소드 실행중 에러입니다${error}`;
    });
}

/*
mongodb는 NoSQL의 종류로써, 많은 규칙과 relationship을 요하지 않는다.
그래서 채팅프로그램을 만든다면 MongoDB가 적합할 것이다.

Mongoose는 mongoDB와 JS를 연결시켜주는 패키지이다.

mongod
mongo
로 접속하고 exit로 빠져나올 수 있다.
*/

import mongoose from "mongoose";

// port정보는 mongod로 확인가능 , mongodb://주소:포트/db이름
mongoose.connect( "mongodb://localhost:27017/we-tube" , {
  useNewUrlParser: true,
  useFindAndModify: false
});

const db = mongoose.connection;

const handleOpen = () => {console.log("✅  Connection to DB");}
const handleError = (error) => {console.log( `❌  Error on DB Connection ${error}` );}
db.once("open", handleOpen)//한번만 실행
db.error("error", handleError);
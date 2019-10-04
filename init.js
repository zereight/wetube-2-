import app from "./app";
import "./db"; // DB 로딩시키려고 그냥 import
import "./models/Video"; // Model을 mongoose에 등록하는 역할.
import "./models/Comment";

const handleListening = () => {
    console.log(`✅  Listening port: 4000`);
};

app.listen(process.env.PORT, handleListening);

import app from "./app";
import "./db"; // DB 로딩시키려고 그냥 import
const handleListening = () => {
    console.log(`✅  Listening port: 4000`);
};

app.listen(process.env.PORT, handleListening);

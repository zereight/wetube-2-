import app from "./app";

const handleListening = () => {
    console.log(`✅  Listening port: 4000`);
};

app.listen(4000, handleListening);

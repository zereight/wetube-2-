// babel이 안먹히므로 여기서는 옛날 js사용.

// webpack은 파일을 바꿔주는 역할을 하기 때문에,
// 파일의 entry와 output경로, 그리고 규칙들을 지정해줘야함.
const path = require("path");
// 입력 파일 File
const ENTRY_FILE = path.resolve(__dirname,"assets",'js','main.js' ); // __dirname은 언제어디서든 현재경로를 반환해주는 전역변수
// 출력 경로
const OUTPUT_DIR = path.join(__dirname, "static");

const config= {
    entry: ENTRY_FILE,
    // output은 object형이여야함
    output: {
        path: OUTPUT_DIR,
        filename: "[name].js"
    }
};

module.exports = config; // export defualt 의 옛날버젼
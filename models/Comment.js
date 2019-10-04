import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
    text: {
        type: String,
        required: "Tet is required"
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    // video: { // 다른 model과의 관련성을 정의해줘야함
    //     type: mongoose.Schema.Types.ObjectId, // 다른모댈의 id를 가지고오겠다.
    //     ref: "Video" // 다른 모델이름
    // }
});

const model = mongoose.model("Comment", CommentSchema);

export default model;
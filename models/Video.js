import mongoose from "mongoose";

// Video라는 json 모델을 만들고 밑에서 mongoose로 등록
const VideoSchema = new mongoose.Schema({
    fileUrl: {
        type: String,
        required: 'File URL is required'
    },
    title: {
        type: String,
        required: "Title is required"
    },
    description: String,
    views: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    comments: [ // 다른 모델과의 관련성을 표시한다. 1개의 video는 comment여러개의 id를 배열로 가질 것이다.
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
});
// mongoDB에 저장할 모델을 만든다.
const model = mongoose.model("Video", VideoSchema);

export default model;
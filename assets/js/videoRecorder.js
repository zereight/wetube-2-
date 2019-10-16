const recorderContainer = document.getElementById("jsRecorderContainer");
const recordBtn = document.getElementById("jsRecordBtn");
const videoPreview = document.getElementById("jsVideoPreview");


const startRecording= async() => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
            // video: true
            video:{width:1280, height:720}
        });
        videoPreview.srcObject = stream;
        videoPreview.muted = true; // 녹화하면서 내 목소리가 나한테 안들리게 해줌
        videoPreview.play();

    } catch (error) {
        // console.log(error);
        recordBtn.innerHTML= ":( Cant Record"
        recordBtn.removeEventListener("click", startRecording);
    }
}

function init() {
    recordBtn.addEventListener("click", startRecording);

}

if( recorderContainer ){
    init();
}
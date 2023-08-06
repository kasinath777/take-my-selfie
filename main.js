var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var textbox = document.getElementById('textbox');

function start() {
    textbox.innerHTML = "";
    recognition.start();
}

recognition.onresult = function (event) {
console.log(event);
    var content = event.results[0][0].transcript;
    textbox.innerHTML = content;
console.log(content);
    if (content == "take my selfie") {
        speak();
    }
}

function speak(){
var synth= window.speechSynthesis;
var speakdata= "taking your selfie in five seconds";
var utterthis= new SpeechSynthesisUtterance(speakdata);
synth.speak(utterthis);
Webcam.attach(camera);
setTimeout(function (){
take_selfie();
save();
},5000)
}

Webcam.set({
width: 360,
height:250,
image_format: "png",
png_quality: 100
})
camera= document.getElementById("camera");

function take_selfie(){
Webcam.snap(function(data_uri){
document.getElementById("selfie").innerHTML="<img id='pic' src='"+data_uri+"'/>"
})
}

function save(){
link= document.getElementById("link");
image= document.getElementById("pic").src;
link.href=image;
link.click();
}
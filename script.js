let btn = document.querySelector(".btn");
let para = document.querySelector(".para");
let voice =document.querySelector(".voice");
function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate = 1
    text_speak.pitch = 1
    text_speak.volume = 1
    text_speak.lang = "hi-GB"
    window.speechSynthesis.speak(text_speak)
}
function wishMe() {
    let day = new Date()
    let hours = day.getHours()
    if (hours >= 0 && hours < 12) {
        speak("Good morning Sir")
    }
    else if (hours >= 12 && hours < 16) {
        // else if(hours >= 12  && hours < 4){
        speak("Good Afternoon Sir")
    }
    else {
        speak("Good evening sir")
    }

}
// window.addEventListener("load", () => {
//     wishMe();
// });
let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex =event.resultIndex
    let transcript = event.results[currentIndex][0].transcript
    para.innerText=transcript
    takeCommand(transcript.toLowerCase())
}
btn.addEventListener("click",()=>{
    recognition.start()
    voice.style.display= "block"
    btn.style.display = "none"
    
    

})
function takeCommand(msg) {
    btn.style.display = "flex"
    voice.style.display = "none"
    if (msg.includes("hello ") || msg.includes("hi") || msg.includes("hey")) {
        speak("Hello sir, how can I help you?");
    }
     else if (msg.includes("Who are you") || msg.includes("hu r u")) {
        speak("I am a virtual assistant, created by Nitesh.");
    } 
    else if (msg.includes("open youtube")) {
        speak("Opening YouTube...");
        window.open("https://www.youtube.com/", "_blank");
    }
     else if (msg.includes("open google")) {
        speak("Opening Google...");
        window.open("https://www.google.com", "_blank");
    }
     else if (msg.includes("open facebook")) {
        speak("Opening Facebook...");
        window.open("https://www.facebook.com", "_blank");
    }
     else if (msg.includes("open instagram")) {
        speak("Opening Instagram...");
        window.open("https://www.instagram.com", "_blank");
    }
     else if (msg.includes("open calculator")) {
        speak("Opening calculator...");
        window.open("calculator://");
    }
     else if (msg.includes("open camera")) {
        speak("Opening camera...");
        window.open("camera://");
    }
     else if (msg.includes("time")) {
        let time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"});
        speak(time);
    }
     else if (msg.includes("date")) {
        let date = new Date().toLocaleString(undefined, {day: "numeric", month: "short"});
        speak(date);
    }
    else{
        let finalText="this is what i found on internet regarding" + msg.replace("keli","") || msg.replace("kely","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${msg.replace("keli","")}`,"_blank")
    }
}
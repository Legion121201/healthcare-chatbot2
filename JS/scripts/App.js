const chatbot = document.getElementById('chatbot');
const conversation = document.getElementById('conversation');
const inputForm = document.getElementById('input-form');
const inputField = document.getElementById('input-field');
var textbox=$("#textInput");
var speechRecognition=window.webkitSpeechRecognition;
var recognition=new speechRecognition();
var content='';
recognition.contionuous=true;

$(document).ready(() => {
  $(".chat-btn").click(() => {
      $(".msger").slideToggle("slow")
  })
})




recognition.onresult=function(event)
{
    var current=event.resultIndex;
    var transcript=event.results[current][0].transcript;
    content+=transcript;
    textbox.val(content);
}

$("#record-button").click(function(event)
{
  
  if(content.length)
  {
      content=' ';
      
  }
    recognition.start();
    
}
)
$("#pause-button").click(function(event)
{
    
    recognition.stop();
}
)


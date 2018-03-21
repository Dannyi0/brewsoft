doBlink = false;
doneTyping = false;
txt = "< B R E W S O F T >"
typedText = "";
i = 0;
function typeText(){
    if(i < txt.length){
        console.log(i);
        typedText = typedText + txt.charAt(i);
        document.getElementById("splash-msg").innerHTML = typedText;
        //console.log(typedText.length);
        i = i+1;
    }else{
        doneTyping = true;
    }
}
var typing = setInterval(typeText,50);

var blinking = setInterval(function(){
    if(doneTyping){
        if(!doBlink){
            document.getElementById("splash-msg").innerHTML = "< B R E W S O F T > |"
            doBlink = true;
        }else{
            document.getElementById("splash-msg").innerHTML = "< B R E W S O F T >"
            doBlink = false;
        }
    }
}, 750);

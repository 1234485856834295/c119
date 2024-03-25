function preload() {
    classifier=ml5.imageClassifier('DoodleNet');
}

function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    canvas.mouseReleased(classifyCanvas);
    speak=window.speechSynthesis;
}

function draw(){
    strokeWeight(13);

    stroke(0);

    if(mouseIsPressed){
        line(pmouseX,pmouseY, mouseX,mouseY);
    }
}

function classifyCanvas(){
    classifier.classify(canvas, gotresult);
}

function gotresult(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
    document.getElementById("label").innerHTML='Label: '+results[0].label;
    document.getElementById("confidence").innerHTML='Confidence '+Math.round(results[0].confidence*100)+'%';


    donotutterthis= new SpeechSynthesisUtterance(results[0].label);
    speak.speak(donotutterthis);
}

watch=document.getElementById("stopwatch");
watch="Timer: "+counter;

var counter =0;
var value = 1; //the number to add.  You can change it by modifying the variable
setInterval(function() {
  counter+ value;
},1000);
function preload(){

}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();

    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/x_O1ez1P_/model.json' , ModelLoaded);
}

function draw(){
image(video , 0 , 0 , 300 , 300);
classifier.classify(video , gotResult);
}

function gotResult(error,results){
    if(error){
     console.log(error);
    }else{
      console.log(results);
      document.getElementById("object_name_answer").innerHTML=results[0].label;
      document.getElementById("object_accuracy_answer").innerHTML=results[0].confidence.toFixed(2);
    }
}

function ModelLoaded(){
console.log("Model Is Loaded");
}
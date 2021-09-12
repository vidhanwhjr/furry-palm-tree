Webcam.set({
    height: 400,
    width:300,
    image_format: 'png',
    png_quality: 90,
});
camera = document.getElementById("Wecam");
Webcam.attach("Wecam");
function clickpic(){
    Webcam.snap(function(data_uri){
       document.getElementById("IMG").innerHTML = '<img id ="moo" src ="'+ data_uri + '">'; 
    });
}
console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/tblLOplTs/model.json', idk);

function idk(){
    console.log("MODEL_LOADED_8579");
}

function identify(){
    img = document.getElementById("moo");
    classifier.classify(img, roo);    
 }
 
 function roo(error,results){
     if(error){
         console.error(error);
     }
     else{
         console.log(results);
         document.getElementById("revserve_space1").innerHTML = results[0].label;
         document.getElementById("reserve_space2").innerHTML = (results[0].confidence*100).toFixed(2) + "%";
     }
 }
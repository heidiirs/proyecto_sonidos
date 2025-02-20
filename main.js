function starClasification ()
{
    navigator.mediaDevices.getUserMedia({audio: true});https://teachablemachine.withgoogle.com/models/XQzPO9-Am/
    classifier = ml5.soundClassifier("https://storage.googleapis.com/tm-model/XQzPO9-Am/model.json", modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if (error) {
        console.error(error);
      } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
    
        document.getElementById("result_label").innerHTML = 'Escucho:  '+ results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Presición:  '+ (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    
        img = document.getElementById('enfermero1') 
        img1 = document.getElementById('enfermero2')
        img2 = document.getElementById('enfermero3')
        img3 = document.getElementById('enfermero4')
        img4 = document.getElementById('enfermero5')
    
        if (results[0].label == "Hiperventilando") {
          img.src = '1YBD.gif';
          img1.src = 'pokemon.png';
          img2.src = 'imagen2proyecto.png';
          img3.src = 'imagen3proyecto.jpeg';
          img4.src = 'imagen1proyecto.png';
        } else if (results[0].label == "Ruido de fondo") {
          img.src = 'imagen4proyecto.png';
          img1.src = 'pokemon.png';
          img2.src = 'imagen2proyecto.png';
          img3.src = 'jigglypuff.gif';
          img4.src = 'imagen1proyecto.png';
        } else if (results[0].label == "Respiracionagitada") {
          img.src = 'imagen4proyecto.png';
          img1.src = 'audino.gif';
          img2.src = 'imagen2proyecto.png';
          img3.src = 'imagen3proyecto.jpeg';
          img4.src = 'imagen1proyecto.png';
        }else if (results[0].label == "Respiracionaterrada") {
          img.src = 'imagen4proyecto.png';
          img1.src = 'pokemon.png';
          img2.src = 'blissey.gif';
          img3.src = 'imagen3proyecto.jpeg';
          img4.src = 'imagen1proyecto.png';
        } else if (results[0].label == "Agitado") {
          img.src = 'imagen4proyecto.png';
          img1.src = 'pokemon.png';
          img2.src = 'imagen2proyecto.png';
          img3.src = 'imagen3proyecto.jpeg';
          img4.src = 'kirby.gif';
        }
      }
       
}

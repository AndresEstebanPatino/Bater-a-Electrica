document.addEventListener('click', function(event){
    let boton = event.target.dataset.boton;
    let sonido = document.querySelector("audio[data-boton=" + boton +"]"); 
    sonido.currentTime = 0;
    sonido.play();
});

document.addEventListener('click', function(event){
    let cambioClase = event.target.attributes.class;
    if (cambioClase == 'bombo'){
        document.getElementsByClassName('hited');
    }
    else return;

    console.log(event.target.attributes.class);

})

    document.addEventListener("keypress", function(event) {
        let key = event.code;
        if (key == 'KeyL'){
            document.getElementById('bombo').play();
            document.getElementById('bombo').currentTime = 0;
        }
        else return;     
    })

    document.addEventListener("keypress", function(event) {      
        let key = event.code;
        if (key == 'KeyK'){
            document.getElementById('crash').play();
            document.getElementById('crash').currentTime = 0;
        }
        else return;     
    })
    
    document.addEventListener("keypress", function(event) {
        let key = event.code;
        if (key == 'KeyA'){
            document.getElementById('hit-hat').play();
            document.getElementById('hit-hat').currentTime = 0;
        }
        else return;     
    })
   
    document.addEventListener("keypress", function(event) {
        let key = event.code;
        if (key == 'KeyS'){
            document.getElementById('redoblante').play();
            document.getElementById('redoblante').currentTime = 0;
        }
        else return;     
    })
 
    document.addEventListener("keypress", function(event) {
        let key = event.code;
        if (key == 'KeyW'){
            document.getElementById('tom1').play();
            document.getElementById('tom1').currentTime = 0;
        }
        else return;     
    })

    document.addEventListener("keypress", function(event) {
        let key = event.code;
        if (key == 'KeyE'){
            document.getElementById('tom2').play();
            document.getElementById('tom2').currentTime = 0;
        }
        else return;     
    })
    
    document.addEventListener("keypress", function(event) {  
        let key = event.code;
        if (key == 'KeyO'){
            document.getElementById('tom3').play();
            document.getElementById('tom3').currentTime = 0;
        }
        else return;     
    })

    document.addEventListener("keypress", function(event) {    
        let key = event.code;
        if (key == 'KeyI'){
            document.getElementById('tom4').play();
            document.getElementById('tom4').currentTime = 0;
        }
        else return;     
    })


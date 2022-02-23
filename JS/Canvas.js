var iniciarJuego = document.querySelector("#iniciarJuego");

var pantalla = document.querySelector("canvas");

var pincel = pantalla.getContext("2d");




iniciarJuego.addEventListener("click",function(event){


    event.preventDefault();    
    palabra = tableroJuego();
    palabraSecreta(palabra);

    

    
       

    console.log(palabra);
    
    iniciarJuego.addEventListener("keydown", function (event) {
        
        var evento = event.key;

        var regex = /[qwertyuiopasdfghjklzxcvbnm/]/

        var letraPresionada = evento.match(regex);

        letraPresionadaCorrecta(palabra,letraPresionada);

        letraPresionadaIncorrecta(palabra,letraPresionada);



        
    });

    
});

function tableroJuego(){

    var palabra = elegirPalabraAzar().toLocaleLowerCase();
     
    pincel.fillStyle = "white";
    pincel.fillRect(0,0,1200,800);
    
    return palabra;
}

function dibujarLineas(x){

    pincel.fillStyle = "black";
    pincel.fillRect(x,700,50,3);
    
    //dibujarLetra("v",x);
    
}


function dibujarLetra(letra, x, y) {

    pincel.font = " 60px Arial";
    pincel.fillStyle = "black";
    letraInvisible = pincel.fillText(letra,x+10,y);

    
}

function baseHorca(){

    //base de la horca
    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.moveTo(150,500);
    pincel.lineTo(200,600);
    pincel.lineTo(100,600);
    pincel.fill();

    pincel.fillStyle = "white";
    pincel.beginPath();
    pincel.moveTo(150,530);
    pincel.lineTo(180,590);
    pincel.lineTo(120,590);
    pincel.fill();
}

function CuerdaPrimeraVertical() {
        //Cuerda primera vertical
        pincel.fillStyle = "black";
        pincel.fillRect(145,150,10,380);
}

function cuerdaSegundaHorizontal() {

    //Cuerda segunda horizotal
    pincel.fillStyle = "black";
    pincel.fillRect(145,150,400,10);
}

function CuerdaPequena() {
    //cuerda pequena vertical
    pincel.fillStyle = "black";
    pincel.fillRect(535,150,10,100);
}

function cabezaMuneco() {
    //Cabeza
    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.arc(540,280,40,0,2*3.14);
    pincel.fill();

    pincel.fillStyle = "white";
    pincel.beginPath();
    pincel.arc(540,280,30,0,2*3.14);
    pincel.fill();
}

function brasosMuneco(){
    
    //brasos
    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.moveTo(540,335);
    pincel.lineTo(580,400);
    pincel.lineTo(500,400);
    pincel.fill();

    pincel.fillStyle = "white";
    pincel.beginPath();
    pincel.moveTo(540,350);
    pincel.lineTo(580,425);
    pincel.lineTo(500,425);
    pincel.fill();
}

function TroncoMuneco() {
    //Tronco
    pincel.fillStyle = "black";
    pincel.fillRect(535,320,10,120);
}

function PiernaMuneco(){

    //piernas
    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.moveTo(540,420);
    pincel.lineTo(580,500);
    pincel.lineTo(500,500);
    pincel.fill();
    
    pincel.fillStyle = "white";
    pincel.beginPath();
    pincel.moveTo(540,450);
    pincel.lineTo(580,525);
    pincel.lineTo(500,525);
    pincel.fill();

}

function PerderGanar(letra, x, y,color) {

    pincel.font = " 60px Arial";
    pincel.fillStyle = color;
    letraInvisible = pincel.fillText(letra,x+10,y);  
}


function finDelJuego(letra,x,y) {

    pincel.font = " 70px Arial";
    pincel.fillStyle = "red";
    letraInvisible = pincel.fillText(letra,x,y);
 
}








var palabras = ["Nala","Edu","Fernandez","VanessaPeluqueria"];


var arregloPalabrasIncorrectas = [];

var arregloPalabrasCorrectas = [];


var vidaJugador = 8;



function elegirPalabraAzar() {
    
    var palabrasAlAzar = palabras[Math.floor(Math.random() * palabras.length)];

    return palabrasAlAzar;
}


function palabraSecreta(palabra){
    
    
    var split = palabra.split("");
    
    // var cantidadLetras = palabra.length
    var ejeX = 50;

    for (let i = 0; i < split.length; i++) {

        if (i < split.length) {

            letra = split[i];
            dibujarLineas(ejeX);

            //letraEscondida = frase.classList.add(("invisible"));

            ejeX = ejeX + 65;
        }
    }

    
}



function letraPresionadaCorrecta(palabra,letraPresionada){

    var split = palabra.split("");

    var ejeX = 50;
    var ejeY = 690;
    var letraCorrecta = Letras(palabra,letraPresionada);

    for (let i = 0; i < split.length; i++) {

        if (i < split.length) {

            var letra = split[i];

            for (let j = 0; j < letraPresionada.length; j++) {
            
                if (letraPresionada[j] == split[i]) {

                        dibujarLetra(letra, ejeX, ejeY);

                        if (letraCorrecta) {

                            arregloPalabrasCorrectas.push(letra);

                            if (arregloPalabrasCorrectas.length == split.length) {
                                
                                PerderGanar("Ganaste", 700, 400, "green"); 

                            }
                
                        }

                        
                }

            }
            ejeX = ejeX + 65;
        }

    }

    return true;
}




function letraPresionadaIncorrecta(palabra,letraPresionada) {

    var ejeX = 700;
    var ejeY = 200;

    var letraIncorrecta = Letras(palabra,letraPresionada);

    for (let i = 0; i < letraPresionada.length; i++) {
        
        var letra = letraPresionada[i];
        
    }

    if (!letraIncorrecta) {

        if (arregloPalabrasIncorrectas.length <= 7) {

            arregloPalabrasIncorrectas.push(letra);
            
        } else{

            PerderGanar("Perdiste", 700, 400,"red"); 
            finDelJuego("Fin del juego",700,600); 
        }
        
    }

    for (let i = 0; i < arregloPalabrasIncorrectas.length; i++) {
        
        dibujarLetra(arregloPalabrasIncorrectas[i], ejeX, ejeY);

        if (i == 0) {
            baseHorca();
        }
        if (i==1) {
            CuerdaPrimeraVertical();
        }
        if (i==2) {
            cuerdaSegundaHorizontal();
        }
        if (i==3) {
            
            CuerdaPequena();
        }
        if (i==4) {
            cabezaMuneco();
        }
        if (i==5) {
            TroncoMuneco();
        }
        if (i==6) {
            PiernaMuneco();
        }
        if (i==7) {
            
            brasosMuneco();
            TroncoMuneco();
            
        }

        
        ejeX += 50;

       
    }

}



function Letras(palabra,letraPresionada) {
    var split = palabra.split("");

    for (let i = 0; i < letraPresionada.length; i++) {

        letra = letraPresionada[i];
    }

    for (let i = 0; i < split.length; i++) {

        if (split[i] == letra){

            return agregar = true;
        }
    }

    return false;
}
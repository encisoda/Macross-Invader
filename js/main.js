function initCanvas(){
    var ctx = document.getElementById('canvas').getContext('2d');
    var fondoCanvas = new Image();
    var naveImagen = new Image();
    var enemigoImagen1 = new Image();
    var enemigoImagen2 = new Image();

    fondoCanvas.src = "../img/fondoCanvas.jpg";
    naveImagen.src = "../img/nave.png";
    enemigoImagen1.src = "../img/enemigo1.png";
    enemigoImagen2.src = "../img/enemigo2.png";

    var cW = ctx.canvas.width;
    var cH = ctx.canvas.heigth;

    var enemigoTemplate = function (opciones){
        return{
            id: opciones.id || '',
            x: opciones.x || '',
            y: opciones.y || '',
            w: opciones.w || '',
            h: opciones.h || '',
            image: opciones.image || enemigoImagen1
        }
    }

    var enemigos = [
        new enemigoTemplate({id: "enemigo1", x : 350, y: 50, w: 80, h: 30})
    ];

    var mostrarEnemigos = function(arrayEnemigos){
        for(var i = 0; i < arrayEnemigos.length; i++){
            var enemigo = arrayEnemigos[i];
            ctx.drawImage(enemigo.image, enemigo.x, enemigo.y, enemigo.w, enemigo.h)
        }
    }


    function animar(){
        ctx.clearRect(0, 0, cW, cH);
        mostrarEnemigos(enemigos);
    }

    var animacionInterna = setInterval(animar, 6);

}

window.addEventListener('load', function(event){
    initCanvas();
});
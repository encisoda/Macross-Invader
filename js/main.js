function initCanvas(){
    const ctx = document.getElementById('canvas').getContext('2d');
    const fondoCanvas = new Image();
    const naveImagen = new Image();
    const enemigoImagen1 = new Image();
    const enemigoImagen2 = new Image();

    fondoCanvas.src = "../img/fondoCanvas.jpg";
    naveImagen.src = "../img/nave.png";
    enemigoImagen1.src = "../img/enemigo1.png";
    enemigoImagen2.src = "../img/enemigo2.png";

    const cW = ctx.canvas.width;
    const cH = ctx.canvas.heigth;

    const enemigoTemplate = function (opciones){
        return{
            id: opciones.id || '',
            x: opciones.x || '',
            y: opciones.y || '',
            w: opciones.w || '',
            h: opciones.h || '',
            image: opciones.image || enemigoImagen1
        }
    }

    const enemigos = [
        new enemigoTemplate({id: "enemigo1", x : 350, y: 50, w: 80, h: 30})
    ];

    var mostrarEnemigos = function(arrayEnemigos){
        for(let i = 0; i < arrayEnemigos.length; i++){
            let enemigo = arrayEnemigos[i];
            ctx.drawImage(enemigo.image, enemigo.x, enemigo.y, enemigo.w, enemigo.h)
        }
    }
    
    function animar(){
        ctx.clearRect(0, 0, cW, cH);
        mostrarEnemigos(enemigos);
    }

    const animacionInterna = setInterval(animar, 6);

}

window.addEventListener('load', function(event){
    initCanvas();
});
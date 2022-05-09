const typed = new Typed('.typed', {
    strings: [
        '<i class="prospecto">Sr Recriuter</i>',
        '<i class="prospecto">¿Mejorar tu reclutamiento?</i>',
        '<i class="prospecto">¿Bajar la rotación de personal?</i>',
        '<i class="prospecto">¿Reducción de costos?</i>',
        '<i class="prospecto">¿Aumento de resultados?</i>',
        '<i class="prospecto">¿Optimización de tiempos?</i>',
        '<i class="prospecto">Contactanos ahora mismo</i>',
        '<i class="prospecto">Somos la marca caza talentos</i>',
    ],


    //stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
    typeSpeed: 40, // Velocidad en mlisegundos para poner una letra,
    startDelay: 0, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
    backSpeed: 100, // Velocidad en milisegundos para borrrar una letra,
    //smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
    shuffle: true, // Alterar el orden en el que escribe las palabras en forma al azar.
    backDelay: 100, // Tiempo de espera despues de que termina de escribir una palabra.
    loop: true, // Repetir el array de strings
    loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
    showCursor: true, // Mostrar cursor palpitanto
    cursorChar: '|', // Caracter para el cursor
    contentType: 'html', // 'html' o 'null' para texto sin formato
});
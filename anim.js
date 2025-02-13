// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  
  { text: "Come up to meet you, tell ya I'm sorry", time: 27 },
  { text: "You don't know how lovely you are", time: 36 },
  { text: "I had to find you, tell ya I need you", time: 40 },
  { text: "Tell you I set you apart", time: 45 },
  { text: "Tell me your secrets ", time: 54 },
  { text: "and ask me your questions", time: 56 },
  { text: "In the mood for the flowers love", time: 59 },
  { text: "Oh, let's go back to the start", time: 60 },
  { text: "Runnin' in circles,", time: 67 },
  { text: "comin' up tails", time: 69 },
  { text: "Heads on a science apart", time: 73 },
  { text: "Nobody said it was easy", time: 79 },
  { text: "It's such a shame for us to part", time: 85 },
  { text: "Nobody said it was easy", time: 92 },
  { text: "No one ever said it would be this hard", time: 98 },
  { text: "Oh, take me back to the start", time: 108 },
  { text: "i love u 3.211 <3", time: 116 },
  
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
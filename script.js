// Mini-libreria — Settimana VII Giorno I
//
// Devi fare 4 cose:
// 1. Definire una classe Libro (titolo, autore, anno, letto)
// 2. Definire una classe LibroDigitale che estende Libro (aggiunge formato, dimensioneMb)
// 3. Aggiungere un listener al form che crea una nuova istanza e la aggiunge all'array
// 4. Renderizzare la lista nel <ul id="lista-libri"> via innerHTML
//
// Bonus: bottone "Segna come letto" su ogni elemento, gestito con event delegation.


// === Classi ===




const libri =[];
class Libro {
    letto = false;

    constructor(titolo, autore, anno) {
        this.id = crypto.randomUUID();
        this.titolo = titolo;
        this.autore = autore;
        this.anno = anno;
    }
    segnacomeletto() {
        this.letto = true;
    }

    metodo_formato() {
        return "cartaceo"
    }
}

class libroDigitale extends Libro {
    constructor(titolo, autore, anno, dimensioniMb) {
        super(titolo, autore, anno),
            this.dimensioniMb = dimensioniMb
    }
}

const elimina =document.querySelector(`.Elimina`)
const bottone =document.querySelector("#aggiungi")
bottone.addEventListener("click", () => {
  const titolo = document.querySelector("#Titolo").value;
  const autore = document.querySelector("#Autore").value;
  const anno = document.querySelector("#Anno").value;

  document.querySelector("#lista-libri").innerHTML += `
    <li class="lista">${titolo} — ${autore} — ${anno}</li>
    <button class="Elimina">Elimina</button>
  `;

});

// === Stato (array di libri) ===



// === Render ===


// === Eventi ===

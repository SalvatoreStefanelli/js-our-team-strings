// MILESTONE 0:
// Creare l’array di stringhe contenente i nomi dei membri del team.

const name = ['Salvatore', 'Fabio', 'Gabriele', 'Alessio', 'Giovanni'];

// MILESTONE 1:
// Stampare le informazioni su DOM come card.
const team = document.getElementById('team');

for (let i = 0; i < name.length; i++) {
    const element = name[i];    


    const elementCard = document.createElement('div');
    elementCard.className = ('card');

    elementCard.append(element);

    team.appendChild(elementCard);
// MILESTONE 3:
// Aggiungere un evento click sulla card che aggiunge/rimuove una classe per evidenziare un componente del team.
    elementCard.addEventListener('click', function(e) {
        console.log(e.target);   
        
        e.target.classList.toggle('bg-success');
    })
}



// BONUS 1:
// In generale curare la parte di UI e organizzare i singoli membri in card/schede.

// BONUS 2:
// Inserire un form per l’aggiunta di un elemento alla lista.


const cards = document.querySelectorAll(".card");
const btnText = document.getElementById("btn-text");

btnText.onclick = () => {

    for (let i = 0; i < cards.length; i++) {

        cards[i].textContent = "Hola chicas";  
            
    }
}

for (let i = 0; i < cards.length; i++) {

    cards[i].onclick = () => {

        cards[i].style.background = 'green';

    }    
}
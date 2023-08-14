document.getElementById('adicionar').addEventListener('click', function () {
    let divCards = document.querySelectorAll('.card');
    let divCard = document.createElement('div');
    divCard.classList.add('card');
    divCard.innerText = divCards.length +1;
    document.getElementById('cards').appendChild(divCard);

});

document.getElementById('remover').addEventListener('click', function () {
    let divCards = document.querySelectorAll('.card');
    if (divCards.length > 0) {
        divCards[divCards.length - 1].remove();
        cardCount--;
    }
});
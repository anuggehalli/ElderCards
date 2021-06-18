//to save and cards in any function
let Cards = []
//CONNECT TO THE API BY LOADING 20 CARDS AT A TIME
const loadCards = async (numCards = 20) => {
    try{
        showSpinner();
        let i = 0;
        while(i < numCards){
            const res = await fetch('https://api.elderscrollslegends.io/v1/cards');
            const Data = await res.json();
            Cards = Data.cards;
            i++;
        }
        console.log(Cards);
        displayCards(Cards);
    } catch (err) {
        console.error(err);
    }
};

//SPINNER when communicating with API
//called in loadCards function
const spinner = document.getElementById("spinner");
function showSpinner() {
    spinner.className = "show";
    setTimeout(() => {
        spinner.className = spinner.className.replace("show", "");
    }, 5000);
}

//Display cards browser
//called in loadCards function and in search bar function
const cardList = document.getElementById('cardList'); //To access cardlist in HTML
const displayCards = (cards) => {
    const htmlString = cards
        .map((card) => {
            return `
            <li class="card">
                <h2>${card.name}</h2>
                <p><b>Text:</b> ${card.text}</p>
                <p><b>Set Name:</b> ${card.set.name}</p>
                <p><b>Type:</b> ${card.type}</p>
                <img src="${card.imageUrl}"></img>
            </li>`;
        })
        .join('');
    cardList.innerHTML = htmlString;
};

//INFINTE SCROLL
const container = document.querySelector('.container'); //access to html
window.addEventListener('scroll', () => {
    console.log("scorlled", window.scrollY);
    console.log(window.innerHeight);
    if(window.scroolY + window.innerHeight >= document.documentElement.scrollHeight){
        loadCards();
    }
})

//SEARCH BAR
const searchBar = document.getElementById('searchBar'); //to aceess search in HTML
searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    const filteredCards = Cards.filter( card => {
        return card.name.toLowerCase().includes(searchString);
    });
    displayCards(filteredCards);
});

//MAIN FUNCTION TO RUN ENTIRE THING
const main = async () => {
    const cards = await loadCards();
}

main();


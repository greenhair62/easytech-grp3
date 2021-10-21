const articles = [
{
    id: 1,
    denomination: "ACER PREDATOR GALEA 350",
    marque: 'ACER',
    couleur: 'Noir',
    type: 'filaire',
    poids: '352 Grammes',
    dispo: 'EN STOCK',
    price: 59.99,
    img: './img/CASQUE_acer_predator.jpg'
},
{
    id: 2,
    denomination: "ROCCAT ELO 7.1 AIR NOIR",
    marque: 'ROCCAT',
    couleur: 'Noir',
    type: 'filaire',
    poids: '345 Grammes',
    dispo: 'EN STOCK',
    price: 52.75,
    img: './img/casque_roccat_noir.jpg'
},
{
    id: 3,
    denomination: "LOGITECH G PRO X LIGHTSPEED",
    marque: 'LOGITECH G',
    couleur: 'Noir, bleu',
    type: 'sans fil',
    poids: '379 Grammes',
    dispo: 'EN STOCK',
    price: 115.23,
    img: './img/casque_logitech_sansfil.jpg'
},
{
    id: 4,
    denomination: "CORSAIR GAMING HS70 PRO",
    marque: 'CORSAIR',
    couleur: 'Noir',
    type: 'sans fil',
    poids: '590 Grammes',
    dispo: 'EN STOCK',
    price: 101.99,
    img: './img/casque_corsair_noir.jpg'
},
{
    id: 5,
    denomination: "HYPER X CLOUD FLIGHT",
    marque: 'HYPER X',
    couleur: 'Noir, rouge',
    type: 'sans fil, filaire',
    poids: '315 Grammes',
    dispo: 'EN STOCK',
    price: 96.70,
    img: './img/casque_hyperx_rouge.jpg'
},
]

const articleContainer = document.querySelector('.articles-container');

const displayArticle = () => {
const articlesNode = articles.map( (article) => {
        return createArticleElement(article);
});
articleContainer.innerHTML = "";
articleContainer.append (...articlesNode);

}

const createArticleElement = (article) => { //fonction qui crée un article


const divArticle = document.createElement('div');
divArticle.classList.add('article');

const image =document.createElement('img');
image.src = article.img;
image.alt = "tv lg";

const h2 = document.createElement('h2');
h2.innerText = article.denomination;

const paragraph = document.createElement('p');
paragraph.innerText = `Dispo : ${article.dispo}`;

const divAction = document.createElement('div');
divAction.classList.add('article-action');

const price = document.createElement('p');
price.innerText = article.price;

const btn = document.createElement('button');
btn.innerText = "Ajouter au panier";

divAction.append(price, btn);
divArticle.append(image, h2, paragraph, divAction);

    //changement de bouton panier
    const btnDelete = document.createElement('button');
    btnDelete.style.backgroundColor = 'red';
    btnDelete.innerText = "Supprimer du panier";
    divAction.append(price, btn, btnDelete);
    btnDelete.classList.add('dnone');

    btn.addEventListener('click', (event) => {
        event.preventDefault();
        btn.classList.add('dnone');
        btnDelete.classList.remove('dnone');
    })

        btnDelete.addEventListener('click', (event) => {
        event.preventDefault();
        btnDelete.classList.add('dnone');
        btn.classList.remove('dnone');
    })



return divArticle;
}

displayArticle();



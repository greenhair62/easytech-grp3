const articles = [
    {
        id: 1,
        denomination: "SHARP 55 - TV OLED 4K - 139cm",
        marque: 'SHARP',
        resolution: 'FULL HD',
        taille: 55,
        dispo: 'EN STOCK',
        price: 399.95,
        img: 'img/sharp.jpg'
    },

    {
        id: 2,
        denomination: "SONY 32 - TV LED HD - 80cm",
        marque: 'SONY',
        resolution: 'HD',
        taille: 32,
        dispo: 'STOCK EPUISE',
        price: 399.99,
        img: 'img/sony.jpg'

    },

    
    {   id: 3,
        denomination: "PHILLIPS 55 - TV OLED 4K - 130cm",
        marque: 'PHILLIPS',
        resolution: 'FULL HD',
        taille: 55,
        dispo: 'EN STOCK',
        price: 599.95,
        img: 'img/phillips.jpg'

    },
        
    {
        id: 4,
        denomination: "PANASONIC 32 - TV LED HD - 160cm",
        marque: 'PANASONIC',
        resolution: '4K',
        taille: 65,
        dispo: ' EN STOCK',
        price: 799.99,
        img: 'img/panasonic_55_oled.jpg'
    },


    {
        id: 5,
        denomination: "LG 55nano - TV 4K 139cm",
        marque: "LG",
        resolution: "4K",
        taille: 55,
        dispo: "EN STOCK",
        price: 849.95,
        img: "img/lg_55_oled.jpg"
    },

    {
        id: 6,
        denomination: "TV SAMSUNG QLED 4K UHD HDR - 108 cm",
        marque: "SAMSUNG",
        resolution: "4K",
        taille: 55,
        dispo: "EN STOCK",
        price: 799.95,
        img: "img/Samsung QE43Q65 - TV QLED 4K UHD HDR - 108 cm.jpg"
    },

    {
        id: 7,
        denomination: "TV LG 4K UHD HDR - 109 cm",
        marque: "LG",
        resolution: "4K",
        taille: 55,
        dispo: "EN STOCK",
        price: 599.99,
        img: "img/LG 43UN711C - TV 4K UHD HDR - 109 cm.jpg"
    },

    {
        id: 8,
        denomination: "polaroid-smart-tv-led-55-140cm-4k",
        marque: "POLAROID",
        resolution: "4K",
        taille: 55,
        dispo: "EN STOCK",
        price: 699.99,
        img: "img/polaroid-smart-tv-led-55-140cm-4k-uhd.jpg"
    },

    {
        id: 9,
        denomination: "thomson-43uz6430-tv-led-uhd-4k-43-108cm",
        marque: "THOMSON",
        resolution: "4K",
        taille: 55,
        dispo: "EN STOCK",
        price: 599.99,
        img: "img/thomson-43uz6430-tv-led-uhd-4k-43-108cm.jpg"
    },

    {
        id: 10,
        denomination: "samsung-ue65tu8372-tv-led-4k-uhd-65-163-cm.",
        marque: "SAMSUNG INCURVE",
        resolution: "4K",
        taille: 65,
        dispo: "EN STOCK",
        price: 899.99,
        img: "img/samsung-ue65tu8372-tv-led-4k-uhd-65-163-cm.jpg"
    },

    {
        id: 11,
        denomination: "Samsung QE65Q6 - TV QLED UHD 4K (163cm)",
        marque: "SAMSUNG",
        resolution: "4K",
        taille: 65,
        dispo: "EN STOCK",
        price: 999.99,
        img: "img/samsung-qe65q6-tv-qled-uhd-4k-65-163cm-h.jpg"
    },

    {
        id: 12,
        denomination: "SAMSUNG 32N4005 TV LED HD - 32",
        marque: "SAMSUNG",
        resolution: "TV LED FULL HD",
        taille: 32,
        dispo: "EN STOCK",
        price: 699.99,
        img: "img/samsung-32n4005-tv-led-hd-32-80cm-color-enh.jpg"
    },
  
    
]

const art = document.querySelector('.articles-container');

const displayArticle = () => {
    const articlesNode = articles.map( (article) => {
        return createArticleElement(article);
    });
    art.append(...articlesNode);
}


const createArticleElement = (article) => {

const div = document.createElement('div');


div.classList.add('article');
const img = document.createElement('img');
img.src = article.img;
img.alt = 'tv lg';


const title = document.createElement('h2');
title.innerText = article.denomination;


const paragr = document.createElement('p');
paragr.innerText = `dispo : ${article.dispo}`;


const div2 = document.createElement('div');
div2.classList.add('article-action')

const paragr2 = document.createElement('p');
paragr2.innerText = article.price;

const button = document.createElement('button');
button.innerText = 'Ajouter au panier';
div.append(img, title, paragr, div2);
div2.append(paragr2, button);


return div;
}

displayArticle();
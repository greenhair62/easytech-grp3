const articles = [
    {
        id: 1,
        denomination: "Ecran PC Gamer Incurvé - VIEWSONIC VX3218 - PC - MHD - 32",
        marque: 'VIEWSONIC',
        resolution: 'FULL HD',
        taille: 32,
        dispo: 'EN STOCK',
        price: 222.99,
        img: 'img/ecran-pc-gamer-incurve-viewsonic-vx3218-pc-m.jpg'
    },

    {
        id: 2,
        denomination: "Ecran PC Gamer Incurvé - SAMSUNG C49RG90SSR - 49",
        marque: 'SAMSUNG',
        resolution: '5K',
        taille: 49,
        dispo: ' EN STOCK',
        price: 1029.99,
        img: 'img/ecran-pc-gamer-incurve-samsung-c49rg90ssr-49.jpg'

    },

    
    {   id: 3,
        denomination: "Ecran PC Gamer - MSI Optix G241VC - 23",
        marque: 'MSI',
        resolution: 'FULL HD',
        taille: 23,
        dispo: 'EN STOCK',
        price: 169.99,
        img: 'img/ecran-pc-gamer-msi-optix-g241vc-23-6-fhd-da.jpg'

    },
        
    {
        id: 4,
        denomination: "Ecran PC - SAMSUNG S22A330NHU - 22",
        marque: 'SAMSUNG',
        resolution: 'HD',
        taille: 22,
        dispo: ' EN STOCK',
        price: 99.99,
        img: 'img/ecran-pc-samsung-s22a330nhu-22-fhd-6-5-ms.jpg'
    },


    {
        id: 5,
        denomination: "Ecran PC Gamer - LG - 27GN650",
        marque: "LG",
        resolution: "FHD",
        taille: 27,
        dispo: "EN STOCK",
        price: 229.99,
        img: "img/ecran-pc-gamer-lg-27gn650-27-fhd-dalle-ip.jpg"
    },

    {
        id: 6,
        denomination: "Ecran PC - LG - 27UL850",
        marque: "LG",
        resolution: "4K",
        taille: 27,
        dispo: "EN STOCK",
        price: 379.99,
        img: "img/ecran-pc-lg-27ul850-27-4k-dalle-ips-5-m.jpg"
    },

    {
        id: 7,
        denomination: "SAMSUNG ODYSSEY G7 - Ecran PC Gamer Incurvé",
        marque: "SAMSUNG",
        resolution: "4K",
        taille: 27,
        dispo: "EN STOCK",
        price: 617.99,
        img: "img/samsung-odyssey-g7-ecran-pc-gamer-incurve-32-wq.jpg"
    },

    {
        id: 8,
        denomination: "Moniteur Xiaomi - Moniteur de jeu",
        marque: "XIAOMI",
        resolution: "4K",
        taille: 34,
        dispo: "EN STOCK",
        price: 734.99,
        img: "img/moniteur-xiaomi-34-moniteur-de-jeu-incurve-wqhd-e.jpg"
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
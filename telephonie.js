const articles = [
    {
        id: 1,
        denomination: "Xiaomi Mi 11 5G",
        marque: 'Xiaomi',
        couleur: 'noir',
        type: 'telephonie',
        dispo: 'EN STOCK',
        price: 745.94,
        img: '../EASYTECH grp3/img/xiaomi Mi 11 5g 749.jpg'
    },
    {
        id: 2,
        denomination: "Samsung Galaxy S20",
        marque: 'ROCCAT',
        couleur: 'blanc',
        type: 'filaire',
        dispo: 'EN STOCK',
        price: 162.95,
        img: './img/clavier_roccat_rgb.jpg'
    },
    {
        id: 3,
        denomination: "CORSAIR K57 RGB + HARPOON RGB",
        marque: 'CORSAIR',
        couleur: 'noir',
        type: 'sans fil',
        dispo: 'EN STOCK',
        price: 139.94,
        img: './img/clavier_corsair.jpg'
    },
    {
        id: 4,
        denomination: "MILLENIUM RHB GAMING PACK",
        marque: 'MILLENIUM',
        couleur: 'noir',
        type: 'filaire',
        dispo: 'EN STOCK',
        price: 139.94,
        img: './img/boitier_blanc_noir_rgb.jpg'
    },
    {
        id: 5,
        denomination: "MILLENIUM RHB GAMING PACK",
        marque: 'MILLENIUM',
        couleur: 'noir',
        type: 'filaire',
        dispo: 'EN STOCK',
        price: 139.94,
        img: './img/clavier_souris_tapis_rgb.jpg'
    },
    {
        id: 6,
        denomination: "ROCCAT VULCAN 122 AIMO + KONE AIMO REMASTERED",
        marque: 'ROCCAT',
        couleur: 'blanc',
        type: 'filaire',
        dispo: 'EN STOCK',
        price: 162.95,
        img: './img/clavier_roccat_rgb.jpg'
    },
    {
        id: 7,
        denomination: "CORSAIR K57 RGB + HARPOON RGB",
        marque: 'CORSAIR',
        couleur: 'noir',
        type: 'sans fil',
        dispo: 'EN STOCK',
        price: 139.94,
        img: './img/clavier_corsair.jpg'
    },
    {
        id: 8,
        denomination: "MILLENIUM RHB GAMING PACK",
        marque: 'MILLENIUM',
        couleur: 'noir',
        type: 'filaire',
        dispo: 'EN STOCK',
        price: 139.94,
        img: './img/boitier_blanc_noir_rgb.jpg'
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
    
    const createArticleElement = (article) => { //fonction qui crÃ©e un article
    
    
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
    return divArticle;
    }
    
    displayArticle();
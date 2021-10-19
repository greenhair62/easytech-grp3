const articles = [
    {
        id: 1,
        denomination: "ASUS TUF A17",
        marque: 'ASUS',
        couleur: 'Noir',
        taille: '17.3 pouces',
        cpu: 'INTEL',
        dique: '512 GO',
        dispo: 'EN STOCK',
        price: 1149,
        img: './img/asus_pc_portable_gamer_yellow.jpg'
    },
    {
        id: 2,
        denomination: "ASUS ROG STRIX G",
        marque: 'ASUS',
        couleur: 'Noir',
        taille: '15 pouces',
        cpu: 'INTEL Core i7',
        dique: '512 GO',
        dispo: 'EN STOCK',
        price: 1399,
        img: './img/asus_pc_portable_gamer.jpg'
    },
    {
        id: 3,
        denomination: "LENOVO IDEAPAD GAMING 3",
        marque: 'LENOVO',
        couleur: 'Noir',
        taille: '15.6 pouces',
        cpu: 'INTEL',
        dique: '512 GO',
        dispo: 'EN STOCK',
        price: 999,
        img: './img/pc_portable_lenovo.jpg'
    },
    {
        id: 4,
        denomination: "MSI GP76 LEOPARD",
        marque: 'MSI',
        couleur: 'Noir',
        taille: '17.3 pouces',
        cpu: 'INTEL',
        dique: '512GO',
        dispo: 'EN STOCK',
        price: 59.99,
        img: './img/CASQUE_acer_predator.jpg'
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
    return divArticle;
    }
    
    displayArticle();
    
    
    
const articles = [
    {
        id: 1,
        denomination: "AEROCOOL CYLONMINI RGB",
        marque: 'AEROCOOL',
        couleur: 'blanc',
        poids: '3.3kg',
        taille: 'Mini ITX',
        dispo: 'EN STOCK',
        price: 41.28,
        img: './img/boitier_blanc_noir_rgb.jpg'
    },
    {
        id: 2,
        denomination: "LIANLI O11D XL ROG CERTIFIED",
        marque: 'LIAN LI',
        couleur: 'noir',
        poids: '13.75kg',
        taille: ' ',
        dispo: 'EN STOCK',
        price: 236.89,
        img: './img/boitier_noir_rgb.jpg'
    },
    {
        id: 3,
        denomination: "XIGMATEK AQUARIUS PLUS",
        marque: 'XIGMATEK',
        couleur: 'noir',
        poids: '9.1kg',
        taille: 'Mid Tower',
        dispo: 'EN STOCK',
        price: 183.99,
        img: './img/boitier_rgb_transparent.jpg'
    },
    {
        id: 4,
        denomination: "CORSAIR SPEC-DELTA",
        marque: 'CORSAIR',
        couleur: 'noir',
        poids: '6.3kg',
        taille: 'Mid Tower',
        dispo: 'EN STOCK',
        price: 57.59,
        img: './img/corsair-boitier.jpg'
    },

    ]
    
    //panier
    let panier = [];




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
        addArticleToCart(article);
    })

        btnDelete.addEventListener('click', (event) => {
        event.preventDefault();
        btnDelete.classList.add('dnone');
        btn.classList.remove('dnone');
        removeArticleToCart(article);
    })



    return divArticle;
    }

    const addArticleToCart = (article) =>{
        panier.push(article);
        console.log(panier);
    }
    
    //13 fonction supprimer l'article du panier
    const removeArticleToCart = (article) => {
        let deleteArticle = panier.filter(value => value.id !== article.id) //1 2 3 // il garde 1 et le 3
        panier = deleteArticle;
        console.log(panier);
    }
    
    displayArticle();
    
    
    
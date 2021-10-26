const articles = [
    {
        id: 1,
        denomination: "Xiaomi Mi 11 5G",
        marque: 'Xiaomi',
        couleur: 'noir',
        type: 'telephonie',
        dispo: 'EN STOCK',
        price: 745.94,
        img: './img/xiaomi Mi 11 5g 749.jpg'
    },
    {
        id: 2,
        denomination: "Samsung S20",
        marque: 'Samsung',
        couleur: 'noir',
        type: 'telephonie',
        dispo: 'EN STOCK',
        price: 497.00,
        img: './img/s20.jpg'
    },
    {
        id: 3,
        denomination: "Samsung Galaxy S21",
        marque: 'Samsung',
        couleur: 'noir',
        type: 'telephonie',
        dispo: 'EN STOCK',
        price: 799.99,
        img: './img/s21.jpg'
    },
    {
        id: 4,
        denomination: "Galaxy Z Fold3 5G",
        marque: 'Samsung',
        couleur: 'noir',
        type: 'telephonie',
        dispo: 'EN STOCK',
        price: 1899.99,
        img: './img/zfold.jpg'
    },
    {
        id: 5,
        denomination: "xiaomi Mi 10 T pro 5g",
        marque: 'Xiaomi',
        couleur: 'noir',
        type: 'telephonie',
        dispo: 'EN STOCK',
        price: 500.00,
        img: './img/xiaomi Mi 10 T pro 5g.jpg'
    },
    {
        id: 6,
        denomination: "Iphone xr",
        marque: 'iphone',
        couleur: 'blanc',
        type: 'telephonie',
        dispo: 'EN STOCK',
        price: 300.00,
        img: './img/iphone xr 300.jpg'
    },
    {
        id: 7,
        denomination: "Iphone-13-pro-gold-select",
        marque: 'iphone',
        couleur: 'gold',
        type: 'telephonie',
        dispo: 'EN STOCK',
        price: 1159.99,
        img: './img/iphone-13-pro-gold-select.png'
    },
    {
        id: 8,
        denomination: "APPLE iPhone 12 Pro 128Go Graphite",
        marque: 'iphone',
        couleur: 'noir',
        type: 'telephonie',
        dispo: 'EN STOCK',
        price: 949.99,
        img: './img/apple-iphone-12-pro-128go-graphite.jpg'
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

    const btn2 = document.createElement('button2');

    function AddtoCart() {
        console.log('hi');
        var x = document.getElementById('btn');
        var new_row = x.rows[1].cloneNode(true);
        var len = x.rows.length;
        new_row.cells[0].innerHTML = len;
        var inp1 = new_row.cells[1].getElementsByTagName('input')[0];
        inp1.id += len;
        inp1.value = '';
        var inp2 = new_row.cells[2].getElementsByTagName('input')[0];
        inp2.id += len;
        inp2.value = '';
        x.appendChild(new_row);
      }

    btn.innerText = "supprimer";
    
    
    divAction.append(price, btn, btn2);
    divArticle.append(image, h2, paragraph, divAction);
    return divArticle;
    }
    
    displayArticle();

    

 
const initState = {
    categories: [
        { "id": 1,
        "name": "Wedding Ideas", 
        "icon": "https://res.cloudinary.com/megoox97/image/upload/v1592074635/white-articles_rpqt71.png", 
        "image":"https://res.cloudinary.com/megoox97/image/upload/v1592074073/amira2_cjjz2s.jpg", 
        "photos":[
            {
            "id":"1",
            "title":"Vintage photoshoot",
            "paragraph": "A vintage-themed wedding photoshoot for the bride and groom.",
            "image":"https://res.cloudinary.com/megoox97/image/upload/v1592074071/amira4_lvqy65.jpg",
            "author":"Gihad Belasy",
            "author_link":"https://twitter.com/",
            "author_facebook":"https://www.facebook.com/",
            "author_twitter":"https://twitter.com/"
            },
            {
            "id":"2",
            "title":"Special photoshoot",
            "paragraph": "A special photoshoot for the bride.",
            "image":"https://res.cloudinary.com/megoox97/image/upload/v1592073972/amira1_xq6dxo.jpg",
            "author":"Gihad Belasy",
            "author_link":"https://twitter.com/",
            "author_facebook":"https://www.facebook.com/",
            "author_twitter":"https://twitter.com/"
            },
            {
            "id":"3",
            "title":"Pink/white bouquet",
            "paragraph": "A special photoshoot for the bride.",
            "image":"https://res.cloudinary.com/megoox97/image/upload/v1592073972/amira1_xq6dxo.jpg",
            "author":"Gihad Belasy",
            "author_link":"https://twitter.com/",
            "author_facebook":"https://www.facebook.com/",
            "author_twitter":"https://twitter.com/"
            },
            {
            "id":"4",
            "title":"Wedding cupcakes",
            "paragraph": "A special photoshoot for the bride.",
            "image":"https://res.cloudinary.com/megoox97/image/upload/v1592073972/amira1_xq6dxo.jpg",
            "author":"Gihad Belasy",
            "author_link":"https://twitter.com/",
            "author_facebook":"https://www.facebook.com/",
            "author_twitter":"https://twitter.com/"
            }
        ]
        },
        { "id": 2,
        "name": "Rings", 
        "icon": "https://res.cloudinary.com/megoox97/image/upload/v1592074635/white-articles_rpqt71.png", 
        "image":"https://res.cloudinary.com/megoox97/image/upload/v1592074073/amira2_cjjz2s.jpg", 
        "photos":[
            {
            "id":"1",
            "title":"Vintage photoshoot",
            "paragraph": "A vintage-themed wedding photoshoot for the bride and groom.",
            "image":"https://res.cloudinary.com/megoox97/image/upload/v1592074071/amira4_lvqy65.jpg",
            "author":"Gihad Belasy",
            "author_link":"https://twitter.com/",
            "author_facebook":"https://www.facebook.com/",
            "author_twitter":"https://twitter.com/"
            }
        ]
        },
        { "id": 3,
            "name": "Something", 
            "icon": "https://res.cloudinary.com/megoox97/image/upload/v1592074635/white-articles_rpqt71.png", 
            "image":"https://res.cloudinary.com/megoox97/image/upload/v1592074073/amira2_cjjz2s.jpg", 
            "photos":[
                {
                "id":"1",
                "title":"Vintage photoshoot",
                "paragraph": "A vintage-themed wedding photoshoot for the bride and groom.",
                "image":"https://res.cloudinary.com/megoox97/image/upload/v1592074071/amira4_lvqy65.jpg",
                "author":"Gihad Belasy",
                "author_link":"https://twitter.com/",
                "author_facebook":"https://www.facebook.com/",
                "author_twitter":"https://twitter.com/"
                }
            ]
        }
    ]
}
const categoriesReducer = (state= initState, action) => {
    return state;
}

export default categoriesReducer
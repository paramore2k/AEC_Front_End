const films = [
      {
        "id" : "Jumanji",
        "name": "Jumanji: Le prochain niveau",
        "genre": "Comédie",
        "acteurs": [
          {
            "name": "John Wayne"
          },
          {
            "name": "Black Jack"
          }
        ],
        "picture": "https://img.archambault.ca/images/PG/3019/3019445-gf.jpg?404=default&w=400"
      },
      {
        "id" : "Crawl",
        "name": "Crawl",
        "genre": "Suspense",
        "acteurs": [
          {
            "name": "Scodelario Kaya"
          },
          {
            "name": "Pepper Barry"
          }
        ],
        "picture": "https://img.archambault.ca/images/PG/2919/2919471-gf.jpg?404=default&w=400"
      },
      {
        "id" : "Anna",
        "name": "Anna",
        "genre": "Action",
        "acteurs": [
          {
            "name": "Luss Sasha"
          },
          {
            "name": "Mirren Helen"
          }
        ],
        "picture": "https://pbs.twimg.com/media/EBdzqTNXUAA62y0.jpg"
      },
      {
        "id": "Mafia",
        "name": "Mafia Inc",
        "genre": "Drame",
        "acteurs": [
          {
            "name": "Marc-André Grondin"
          },
          {
            "name": "Test"
          }
        ],
        "picture": "https://img.archambault.ca/images/PG/2496/2496105-gf.jpg?404=default&w=400"
      },
      {
        "id": "Trolls: La tournée mondiale",
        "name": "Trolls: La tournée mondiale",
        "genre": "Animation",
        "acteurs": [
          {
            "name": "Anna Kendrick"
          },
          {
            "name": "Justin Timberlake"
          }
        ],
        "picture": "https://img.archambault.ca/images/PG/3193/3193600-gf.jpg?404=default&w=400"
      },
      {
        "id": "The invisible man",
        "name": "The invisible man",
        "genre": "Thriller",
        "acteurs": [
          {
            "name": "Elisabeth Moss"
          },
          {
            "name": "Oliver Jackson-Cohen"
          }
        ],
        "picture": "https://img.archambault.ca/images/PG/3039/3039345-gf.jpg?404=default&w=400"
      }
]

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
 films
};

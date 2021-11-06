const express = require("express")
const app = express()
const cors = require("cors")

app.set("port", process.env.PORT || 5000)
app.locals.title = "ReadMe User API"
app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
  res.send("Hello, you just reached the user api")
})

app.locals.users = [
  { id: "a1", username: "carlosg", password: "123456", name: "Carlos the Fox", readingList: [{
  "kind": "books#volume",
  "id": "9fyxDgAAQBAJ",
  "etag": "3slLTO2s/Tc",
  "selfLink": "https://www.googleapis.com/books/v1/volumes/9fyxDgAAQBAJ",
  "volumeInfo": {
      "title": "Slightly South of Simple",
      "subtitle": "A Novel",
      "authors": [
          "Kristy Woodson Harvey"
      ],
      "publisher": "Simon and Schuster",
      "publishedDate": "2017-04-25",
      "description": "<b>NATIONAL BESTSELLER<br> *<i>Glitter Guide</i>’s “Must Reads for April”<br> *<i>PopSugar</i>’s “Ultimate Summer Reading”<br> *<i>Bustle</i>’s Books to Read and Discuss With Your Mom and Grandma<br> *<i>New York Live’</i>s “Ashley’s A-List” Pick</b><br> <br><b>“One of the hottest new Southern writers.” —<i>Parade</i></b><br> <br>From the next “major voice in Southern fiction” (Elin Hilderbrand, <i>New York Times</i> bestselling author) comes the first in an all-new series chronicling the journeys of three sisters and their mother—and a secret from their past that has the potential to tear them apart and reshape their very definition of what it means to be a family.<br><br>Caroline Murphy swore she’d never set foot back in the small Southern town of Peachtree Bluff; she was a New York girl born and bred and the worst day of her life was when, in the wake of her father’s death, her mother selfishly forced her to move—during her senior year of high school, no less—back to that hick-infested rat trap where she'd spent her childhood summers. But now that her marriage to a New York high society heir has fallen apart in a very public, very embarrassing fashion, a pregnant Caroline decides to escape the gossipmongers with her nine-year-old daughter and head home to her mother, Ansley.<br> <br>Ansley has always put her three daughters first, especially when she found out that her late husband, despite what he had always promised, left her with next to nothing. Now the proud owner of a charming waterfront design business and finally standing on her own two feet, Ansley welcomes Caroline and her brood back with open arms. But when her second daughter Sloane, whose military husband is overseas, and youngest daughter and successful actress Emerson join the fray, Ansley begins to feel like the piece of herself she had finally found might be slipping from her grasp. Even more discomfiting, when someone from her past reappears in Ansley's life, the secret she’s harbored from her daughters their entire lives might finally be forced into the open.<br> <br>Exploring the powerful bonds between sisters and mothers and daughters, this engaging novel is filled with Southern charm, emotional drama, and plenty of heart.",
      "industryIdentifiers": [
          {
              "type": "ISBN_10",
              "identifier": "1501158058"
          },
          {
              "type": "ISBN_13",
              "identifier": "9781501158056"
          }
      ],
      "readingModes": {
          "text": false,
          "image": false
      },
      "pageCount": 400,
      "printedPageCount": 400,
      "dimensions": {
          "height": "21.00 cm",
          "width": "13.50 cm",
          "thickness": "2.50 cm"
      },
      "printType": "BOOK",
      "categories": [
          "Fiction / Romance / Contemporary",
          "Fiction / Women",
          "Fiction / Family Life / General"
      ],
      "averageRating": 4.5,
      "ratingsCount": 11,
      "maturityRating": "NOT_MATURE",
      "allowAnonLogging": false,
      "contentVersion": "0.3.1.0.preview.0",
      "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
      },
      "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/publisher/content?id=9fyxDgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE71ad9BdBordI5jWGfBDT5nC5t3aDQEAwGsxJSaSPgD1xUUhtdYtRXJZpC7KVjz_Ia0rISkvTvu40ENtdva1gqzLkdXux0l03QsNZZa9HZpVYzlDPS-nCmFhu2S8GGLExXLo75n8&source=gbs_api",
          "thumbnail": "http://books.google.com/books/publisher/content?id=9fyxDgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE71NdFvogyaXytNUbW6xIiGnkoUMkIC88LER7YHys8Fl_KrEme1ee4iFRGFxqenHNsqIfqGXqKezH2mw9OVJLYsMIkY-jRtE8Dh9-UL8CpE8WIduh3bVgqzsdVKSt0U1j1Q4pnNB&source=gbs_api",
          "small": "http://books.google.com/books/publisher/content?id=9fyxDgAAQBAJ&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE71WdoNv1-DhflpCsyO23gvGh8btLMr6n8n_Z4UTvCs3py6NNGbtApASCc9MwDKTTmfjgTKMayGEWjw3r_-_tgCDOufA4r8IA4dZ_Z7RGb47v1nIo6LuFn6anb93VwRmCQnpd80r&source=gbs_api",
          "medium": "http://books.google.com/books/publisher/content?id=9fyxDgAAQBAJ&printsec=frontcover&img=1&zoom=3&edge=curl&imgtk=AFLRE71cZHGTEABuPvMWyDewrKU9qm1h-Ce9dU_a3d0CxEXtADQw8wp6Og6-NA0LG2qi60DdZcv7PVj3Anzz60XeDDjNqDYunGJCJMt8NrxpZ93jQ0yVHl_Ml7WSGSCM-zdc1y1YNMC1&source=gbs_api",
          "large": "http://books.google.com/books/publisher/content?id=9fyxDgAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE72arDqWo73yUzho7GzYxD8VoEzP6zhEu56WSuTNEeRG99OGNt0uXjR4kUv2JrjUi3AN_btKv6pTbE9TJO6AKcyqj4cXGqaEejmd2VjV2QvlOK2CnNzVxfezAesEeroQNjsbsnsM&source=gbs_api",
          "extraLarge": "http://books.google.com/books/publisher/content?id=9fyxDgAAQBAJ&printsec=frontcover&img=1&zoom=6&edge=curl&imgtk=AFLRE72ofHtBoNasKhN-ec7B_01phr-yCvyW1aNYR2erutmy4MtJqOJtdm-9xrJRfwODe7oz9PzLjnnpwBDMgG7ALXtiII9jy-yt1Ru5djpRkPD4DlZZE8RKUNhB0yFe1C_KmFmSALKj&source=gbs_api"
      },
      "language": "en",
      "previewLink": "http://books.google.com/books?id=9fyxDgAAQBAJ&hl=&source=gbs_api",
      "infoLink": "https://play.google.com/store/books/details?id=9fyxDgAAQBAJ&source=gbs_api",
      "canonicalVolumeLink": "https://play.google.com/store/books/details?id=9fyxDgAAQBAJ"
  },
  "saleInfo": {
      "country": "US",
      "saleability": "NOT_FOR_SALE",
      "isEbook": false
  },
  "accessInfo": {
      "country": "US",
      "viewability": "PARTIAL",
      "embeddable": true,
      "publicDomain": false,
      "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
      "epub": {
          "isAvailable": false
      },
      "pdf": {
          "isAvailable": false
      },
      "webReaderLink": "http://play.google.com/books/reader?id=9fyxDgAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
      "accessViewStatus": "SAMPLE",
      "quoteSharingAllowed": false
  }
}] },
  { id: "a2", username: "philongt", password: "123456", name: "Phil the Rabbit", readingList: [] },
  { id: "a3", username: "beiz", password: "123456", name: "Bei the Sloth", readingList: [] },
]

//get all users
app.get("/api/v1/users", (req, res) => {
  const users = app.locals.users
  res.send(users)
})

//get one user by id
app.get("/api/v1/users/:id", (req, res) => {
  const foundUser = app.locals.users.find(user => user.id === req.params.id)
  if (!foundUser) {
    return res.sendStatus(404)
  }
  res.status(200).send(foundUser)
})

//create a new user
app.post("/api/v1/users", (req, res) => {
  let id = Date.now()
  let newUser = req.body
  for (let requiredParam of ["username", "password"]) {
    if (!newUser[requiredParam]) {
      res
        .status(422)
        .send({ error: `Expected format:{username:<string>, password: <string>}. You are missing ${requiredParam}` })
    }
  }
  let { username, password } = newUser
  app.locals.users.push({ id, username, password })
  res.status(201).send({ id, username, password })
})

// edit existing user info
app.patch("/api/v1/users/:id", (req, res) => {
  let newReadingList = req.body.readingList;
  let foundUser = app.locals.users.find(user => user.id === req.params.id)
  if (foundUser) {
    foundUser.readingList = newReadingList
  }
  res.status(202).send(foundUser)
})

app.listen(app.get("port"), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get("port")}.`)
})

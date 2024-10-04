const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const admin = require("firebase-admin");
const cors = require("cors")({origin: true});

admin.initializeApp();

exports.countBooks = onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      logger.info("Counting books from Firestore...");
      const booksCollection = admin.firestore().collection("books");
      const snapshot = await booksCollection.get();
      const count = snapshot.size;

      logger.info(`Successfully counted books: ${count}`);
      res.status(200).send({count});
    } catch (error) {
      logger.error("Error counting books:", error);
      res.status(500).send("Error counting books");
    }
  });
});

exports.addBook = onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const {isbn, name} = req.body;
      if (!isbn || !name) {
        return res.status(400).send("Missing isbn or name");
      }

      const capitalizedIsbn = String(isbn).toUpperCase();
      const capitalizedName = name.toUpperCase();
      logger.info("Adding a new book to Firestore...");

      await admin.firestore().collection("books").add({
        isbn: capitalizedIsbn,
        name: capitalizedName,
      });

      res.status(200).send({message: "Book added successfully"});
    } catch (error) {
      logger.error("Error adding book:", error);
      res.status(500).send("Error adding book");
    }
  });
});

exports.getAllBooks = onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const booksSnapshot = await admin.firestore().collection("books").get();
      const books = booksSnapshot.docs.map((doc) => doc.data());

      res.status(200).send(books);
    } catch (error) {
      logger.error("Error retrieving books:", error);
      res.status(500).send("Error retrieving books");
    }
  });
});

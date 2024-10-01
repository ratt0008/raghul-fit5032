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
